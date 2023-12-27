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
)

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
	Key          int    `json:"key"`
	FileName     string `json:"fileName"`
	FilePath     string `json:"filePath"`
	FileSize     int64  `json:"fileSize"`
	TimeOfUpload string `json:"timeOfUpload"`
	Uploader     string `json:"uploader"`
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
		targetPath := "./Upload/" + filename
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
	fileList := []FileItem{}

	files, _ := util.EnumerateFiles("Upload/", []string{".*"})
	for i, file := range files {
		fileItem := FileItem{
			Id:           strconv.Itoa(i + 1),
			Key:          i + 1,
			FileName:     filepath.Base(file),
			FilePath:     file,
			FileSize:     0,
			TimeOfUpload: util.GetFileModifyTime(file),
			Uploader:     "",
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

	os.Remove(request.FilePath)

	httpResponseObject(w, "")
}

func downloadFileHandler(w http.ResponseWriter, r *http.Request) {
	filePath := r.URL.Query().Get("file")
	httpResponseFile(w, filePath)
}
