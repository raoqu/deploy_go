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

func httpResponseSSE(w http.ResponseWriter, r *http.Request, mq *MessageQueue) {
	clientChan := make(chan string)
	defer close(clientChan)

	w.Header().Set("Content-Type", "text/event-stream")
	w.Header().Set("Cache-Control", "no-cache")
	w.Header().Set("Connection", "keep-alive")
	w.Header().Set("Access-Control-Allow-Origin", "*")

	historyMessages := mq.GetMessages()
	for _, oldMessage := range historyMessages {
		fmt.Fprintf(w, oldMessage+"\n")
		if f, ok := w.(http.Flusher); ok {
			f.Flush()
		}
	}

	sub := mq.Subscribe()
	defer mq.Unsubscribe(sub)

	ctx := r.Context()
	for {
		select {
		case <-ctx.Done():
			return
		case msg, ok := <-sub:
			w.Write([]byte(msg + "\n"))
			if flusher, ok := w.(http.Flusher); ok {
				flusher.Flush()
			}
			if !ok {
				return
			}
		case <-mq.IsClosed():
			if flusher, ok := w.(http.Flusher); ok {
				flusher.Flush()
			}
			return
		}
	}
}
