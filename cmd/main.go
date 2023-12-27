package main

import (
	"errors"
	"io/fs"
	"net/http"
	"os"
	"raoqu/util"
	"time"
)

var globalConfig = loadConfig()
var SESSION_MANAGER = NewSessionManager(60 * time.Minute)

func initEnvironment() {
	if _, err := os.Stat("./input"); os.IsNotExist(err) {
		os.Mkdir("./input", fs.ModeDir)
	}
}

type HttpHandler func(http.ResponseWriter, *http.Request)

func validateLoginStatus(w http.ResponseWriter, r *http.Request) bool {
	if r.URL.Path == "/api/login" {
		return true
	}

	sessionId := r.Header.Get(DEFAULT_SESSION_NAME)
	_, ok := SESSION_MANAGER.Get(sessionId)
	return ok
}

func main() {

	initEnvironment()

	// Default static web server
	fileServer := http.FileServer(http.Dir("./static"))
	http.Handle("/static/", http.StripPrefix("/static/", fileServer))

	// Initialize http handler
	handlerMap := util.NewOrderedMap()
	handlerMap.Set("/api/getConfig/", handleGetConfig)
	handlerMap.Set("/api/login", handleLogin)
	handlerMap.Set("/api/upload", uploadHandler)
	handlerMap.Set("/api/files", listFileHandler)
	handlerMap.Set("/api/delete", deleteFileHandler)
	handlerMap.Set("/api/download", downloadFileHandler)

	handlerMap.Set("/api/run", handleRunCommand)
	handlerMap.Set("/api/stop/", handleStopCommand)
	handlerMap.Set("/api/output/", handleGetOutput)

	// Intercept requests for login status validation
	for _, path := range handlerMap.Keys() {
		handler, _ := handlerMap.Get(path)
		http.HandleFunc(path, func(w http.ResponseWriter, r *http.Request) {
			// validate login status
			if !validateLoginStatus(w, r) {
				httpResponseError(w, errors.New("not login yet"))
				return
			}

			// forward to http handler
			httpHandler := handler.(HttpHandler)
			httpHandler(w, r)
		})
	}
	http.ListenAndServe("127.0.0.1:8062", nil)
}
