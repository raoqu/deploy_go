package main

import (
	"net/http"
)

func handleGetConfig(w http.ResponseWriter, r *http.Request) {
	httpResponseJson(w, globalConfig)
}
