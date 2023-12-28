package main

import (
	"encoding/json"
	"io"
	"net/http"
	"os"
	"path"
	"path/filepath"
	"raoqu/util"
	"strconv"
	"strings"
)

var SAFE_OPERATION_FOLDER = []string{"Upload"}
var DEFAULT_FOLDER = "Upload"

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

type DeleteFileRequest struct {
	FilePath string `json:"filePath"`
	Id       string `json:"id"`
}

/* filename -> target path */
type UploadFileTargetPathCallback func(filename string) string

// Upload file
func uploadHandler(w http.ResponseWriter, r *http.Request) {

	targetPathCallback := func(filename string) string {
		targetPath, _ := util.GetPath("./" + DEFAULT_FOLDER + "/" + filename)
		targetPath, _ = util.GetUniqueFileName(targetPath)
		return targetPath
	}

	doFileUploadProcess(w, r, targetPathCallback)
}

func doFileUploadProcess(w http.ResponseWriter, r *http.Request, callback UploadFileTargetPathCallback) string {
	file, header, err := r.FormFile("file")
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return ""
	}
	defer file.Close()

	srcFilename := header.Filename
	targetPath := callback(srcFilename)

	out, err := os.Create(targetPath)
	if err != nil {
		httpResponseError(w, err)
		return ""
	}
	defer out.Close()

	fileSize, err := io.Copy(out, file)
	if err != nil {
		httpResponseError(w, err)
		return ""
	}

	targetFilename := path.Base(targetPath)

	fileUploaded := UploadResult{
		Name:     srcFilename,
		Filename: targetFilename,
		Size:     fileSize,
		// Path:     targetPath,
	}

	httpResponseJson(w, fileUploaded)
	return targetPath
}

func listFileHandler(w http.ResponseWriter, r *http.Request) {
	var request FileListRequest
	err := json.NewDecoder(r.Body).Decode(&request)
	// default options
	if err != nil {
		request = FileListRequest{
			Path:          "Upload",
			IncludeFolder: false,
		}
	} else if len(util.TrimString(request.Path)) < 1 {
		request.Path = DEFAULT_FOLDER
	}

	fileList := []FileItem{}

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

	if !util.ValidatePathSecurity(request.FilePath, SAFE_OPERATION_FOLDER) || !strings.Contains(request.FilePath, "/") || !strings.Contains(request.FilePath, "\\") {
		httpResponseFail(w, "Dagerouse operaton denied")
		return
	}

	os.Remove(request.FilePath)

	httpResponseObject(w, "")
}

func downloadFileHandler(w http.ResponseWriter, r *http.Request) {
	filePath := r.URL.Query().Get("file")
	httpResponseFile(w, filePath)
}
