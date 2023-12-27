package main

import (
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"os"
	"path/filepath"
	"raoqu/util"
)

type CommonResponse struct {
	Data interface{} `json:"data"`
}

func httpHeader(w http.ResponseWriter, key, value string) {
	w.Header().Set(key, value)
}

func httpResponseError(w http.ResponseWriter, err error) {
	http.Error(w, err.Error(), http.StatusInternalServerError)
}

func httpResponseFail(w http.ResponseWriter, msg string) {
	http.Error(w, msg, http.StatusInternalServerError)
}

func httpResponseJson(w http.ResponseWriter, obj interface{}) {
	jsonData, _ := json.Marshal(obj)
	w.Header().Set("Content-Type", "application/json")
	w.Write(jsonData)
}

func httpResponseObject(w http.ResponseWriter, obj interface{}) {
	resp := new(CommonResponse)
	resp.Data = obj
	jsonData, _ := json.Marshal(resp)
	w.Header().Set("Content-Type", "application/json")
	w.Write(jsonData)
}

func httpResponseText(w http.ResponseWriter, s string) {
	w.Header().Set("Content-Type", "text/plain")
	w.Write([]byte(s))
}

func httpResponseFile(w http.ResponseWriter, path string) {

	f, err := os.Open(path)
	if err != nil {
		httpResponseError(w, err)
		return
	}
	defer f.Close()

	contentType := getFileContentType(path)

	if contentType == "application/octet-stream" {
		w.Header().Set("Content-Disposition", "attachment; filename="+filepath.Base(path))
	} else {
		w.Header().Set("Content-Disposition", "filename="+filepath.Base(path))
	}
	w.Header().Set("Content-Type", contentType)
	w.Header().Set("Content-Length", fmt.Sprint(util.GetFileSize(f)))

	_, err = io.Copy(w, f)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
}

func getFileContentType(path string) string {
	ext := filepath.Ext(path)
	switch ext {
	case ".jpg", ".jpeg":
		return "image/jpeg"
	case ".png":
		return "image/png"
	case ".gif":
		return "image/gif"
	case ".txt":
		return "text/plain"
	default:
		return "application/octet-stream"
	}
}
