package main

import (
	"encoding/json"
	"io"
	"net/http"
	"os"
	"path"
	"path/filepath"
	"raoqu/util"
	"regexp"
	"strconv"
	"strings"
)

var DEFAULT_UPLOAD_FOLDER = "Upload"
var SAFE_OPERATION_FOLDER = []string{DEFAULT_UPLOAD_FOLDER}

type UploadResult struct {
	Name     string `json:"name"`
	Size     int64  `json:"size"`
	Filename string `json:"filename"`
	Path     string `json:"path"`
	Students bool   `json:"students"`
	Schools  bool   `json:"schools"`
}

//	{
//	    "data": [
//	        {
//	            "_id": "a1",
//	            "key": 1,
//	            "fileName": "5fc1372e68a1010210d11e12635492e5c5.png",
//	            "filePath": "uploads/5fc1372e68a1010210d11e12635492e5c5.png",
//	            "uploader": "unknown",
//	            "timeOfUpload": "2023-04-21T06:55:45.493Z",
//	            "fileSize": 1
//	        }
//	    ]
//	}
type FileItem struct {
	Id           string `json:"id"`
	FileName     string `json:"fileName"`
	FileSize     int64  `json:"fileSize"`
	TimeOfUpload string `json:"timeOfUpload"`
	IsFolder     bool   `json:"isFolder"`
}

type FileListRequest struct {
	Path          string `json:"path"`
	IncludeFolder bool   `json:"includeFolder"`
}

type FolderCreateRequest struct {
	Path string `json:"path"`
	Name string `json:"name"`
}

type DeleteFileRequest struct {
	FilePath string `json:"filePath"`
	Id       string `json:"id"`
}

/* filename -> target path */
type UploadFileTargetPathCallback func(path string, filename string) string

func fileCreateFolderHandler(w http.ResponseWriter, r *http.Request) {
	var request FolderCreateRequest
	err := json.NewDecoder(r.Body).Decode(&request)
	if err != nil {
		httpResponseFail(w, "Invalid request")
		return
	}
	folderName := request.Name
	match, _ := regexp.MatchString(`^[^\\/:\*\?"<>\|]+$`, folderName)
	if !match {
		httpResponseFail(w, "Invalid request")
		return
	}

	newPath := filepath.Join(request.Path, request.Name)
	if !util.ValidatePathSecurity(newPath, SAFE_OPERATION_FOLDER) {
		httpResponseFail(w, "Invalid path")
		return
	}
	newPath, err = util.GetAbsPath(newPath)
	if err != nil || os.Mkdir(newPath, 0755) != nil {
		httpResponseFail(w, "Operation failed")
		return
	}

	var response = FolderCreateRequest{
		Path: request.Path,
		Name: folderName,
	}
	httpResponseJson(w, response)
}

// Upload file
func uploadHandler(w http.ResponseWriter, r *http.Request) {

	targetPathCallback := func(path string, filename string) string {
		targetPath, _ := util.GetAbsPath(filepath.Join(path, filename))
		targetPath, _ = util.GetUniqueFileName(targetPath)
		return targetPath
	}

	doFileUploadProcess(w, r, targetPathCallback)
}

func doFileUploadProcess(w http.ResponseWriter, r *http.Request, callback UploadFileTargetPathCallback) {
	file, header, err := r.FormFile("file")
	folderPath := r.FormValue("path")
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}
	defer file.Close()

	if len(util.TrimString(folderPath)) < 1 {
		folderPath = DEFAULT_UPLOAD_FOLDER
	}

	if !util.ValidatePathSecurity(folderPath, SAFE_OPERATION_FOLDER) {
		httpResponseFail(w, "Invalid file path")
		return
	}

	srcFilename := header.Filename
	targetPath := callback(folderPath, srcFilename)

	out, err := os.Create(targetPath)
	if err != nil {
		httpResponseError(w, err)
		return
	}
	defer out.Close()

	fileSize, err := io.Copy(out, file)
	if err != nil {
		httpResponseError(w, err)
		return
	}

	targetFilename := path.Base(targetPath)

	fileUploaded := UploadResult{
		Name:     srcFilename,
		Filename: targetFilename,
		Size:     fileSize,
		// Path:     targetPath,
	}

	httpResponseJson(w, fileUploaded)
}

func listFileHandler(w http.ResponseWriter, r *http.Request) {
	var request FileListRequest
	err := json.NewDecoder(r.Body).Decode(&request)
	// default options
	if err != nil {
		request = FileListRequest{
			Path:          DEFAULT_UPLOAD_FOLDER,
			IncludeFolder: false,
		}
	} else if len(util.TrimString(request.Path)) < 1 {
		request.Path = DEFAULT_UPLOAD_FOLDER
	}

	fileList := []FileItem{}

	if !util.ValidatePathSecurity(request.Path, SAFE_OPERATION_FOLDER) {
		httpResponseObject(w, fileList)
		return
	}

	files, _ := util.ReadFolder(request.Path, []string{".*"})
	for i, file := range files {
		fileItem := FileItem{
			Id:           strconv.Itoa(i + 1),
			FileName:     filepath.Base(file.FileName),
			FileSize:     0,
			TimeOfUpload: util.GetFileModifyTime(file.FileName),
			IsFolder:     file.IsFolder,
		}
		fileList = append(fileList, fileItem)
	}

	httpResponseObject(w, fileList)
}

func deleteFileHandler(w http.ResponseWriter, r *http.Request) {
	var request DeleteFileRequest
	err := json.NewDecoder(r.Body).Decode(&request)
	if err != nil {
		httpResponseError(w, err)
		return
	}

	if !util.ValidatePathSecurity(request.FilePath, SAFE_OPERATION_FOLDER) || !strings.Contains(request.FilePath, "/") {
		httpResponseFail(w, "Invalid file path")
		return
	}

	if err := util.DeleteFileOrDir(request.FilePath); err != nil {
		httpResponseFail(w, "Failed remove file")
		return
	}

	httpResponseObject(w, "")
}

func downloadFileHandler(w http.ResponseWriter, r *http.Request) {
	filePath := r.URL.Query().Get("file")
	if !util.ValidatePathSecurity(filePath, SAFE_OPERATION_FOLDER) {
		httpResponseFail(w, "Invalid file path")
		return
	}
	httpResponseFile(w, filePath)
}
