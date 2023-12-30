package main

import (
	"errors"
	"net/http"
	"os"
	"raoqu/util"
	"time"
)

var globalConfig = loadConfig()
var SESSION_MANAGER = NewSessionManager(60 * time.Minute)

func initEnvironment() {
	// mkdir for upload
	uploadPath := "./" + DEFAULT_UPLOAD_FOLDER
	path, _ := util.GetAbsPath(uploadPath)
	if _, err := os.Stat(path); os.IsNotExist(err) {
		os.Mkdir(path, 0755)
	}
}

func validateLoginStatus(w http.ResponseWriter, r *http.Request) bool {
	return true
	if r.URL.Path == "/api/login" {
		return true
	}

	sessionId := r.Header.Get("Cookie")
	sessionId = util.GetPairedValue(sessionId, DEFAULT_SESSION_NAME)
	_, ok := SESSION_MANAGER.Get(sessionId)
	return ok
}

func initApiHandlers() *util.OrderedMap {
	handlerMap := util.NewOrderedMap()
	handlerMap.Set("/api/login", handleLogin)
	handlerMap.Set("/api/menu/list", handleMenuList)
	handlerMap.Set("/api/authority/user/refresh-permissions", handlePermissions)

	handlerMap.Set("/api/getConfig/", handleGetConfig)
	handlerMap.Set("/api/upload", uploadHandler)
	handlerMap.Set("/api/files", listFileHandler)
	handlerMap.Set("/api/delete", deleteFileHandler)
	handlerMap.Set("/api/createFolder", fileCreateFolderHandler)
	handlerMap.Set("/api/download", downloadFileHandler)

	handlerMap.Set("/api/run", handleRunCommand)
	handlerMap.Set("/api/stop/", handleStopCommand)
	handlerMap.Set("/api/output/", handleGetOutput)
	return handlerMap
}

func main() {

	initEnvironment()

	handlerMap := initApiHandlers()

	fileServer := http.FileServer(http.Dir("static"))
	mux := http.NewServeMux()

	// Intercept requests for login status validation
	for _, path := range handlerMap.Keys() {
		handler, _ := handlerMap.Get(path)
		mux.HandleFunc(path, func(w http.ResponseWriter, r *http.Request) {
			util.Green(r.URL.Path)

			// validate login status
			if !validateLoginStatus(w, r) {
				httpResponseError(w, errors.New("not login yet"))
				return
			}

			// forward to http handler
			httpHandler := handler.(func(http.ResponseWriter, *http.Request))
			httpHandler(w, r)
		})
	}

	// Default forward to static file server
	mux.Handle("/", fileServer)

	http.ListenAndServe("127.0.0.1:8066", mux)
}
