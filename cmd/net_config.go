package main

import (
	"encoding/json"
	"net/http"
	"os"
	"raoqu/util"
)

var CONFIG_LIST = []string{"deploy.json"}

type ConfigRequest struct {
	Name string `json:"name"`
	Type string `json:"type"`
	Data string `json:"data"`
}

func handleConfig(w http.ResponseWriter, r *http.Request) {
	var request ConfigRequest
	err := json.NewDecoder(r.Body).Decode(&request)
	if err != nil {
		httpResponseError(w, err)
		return
	}

	var configList util.GeneralArray[string] = CONFIG_LIST
	var availableTypes util.GeneralArray[string] = []string{"read", "write"}
	if !configList.Contains(request.Name) || !availableTypes.Contains(request.Type) {
		httpResponseFail(w, "Invalid request")
		return
	}

	var response = request
	if request.Type == "read" {
		data, _ := os.ReadFile(request.Name)
		response.Data = string(data)
		httpResponseJson(w, response)
	} else {
		config, success := parseDeployConfig(request.Data)
		if !success {
			httpResponseFail(w, "Invalid request")
			return
		}
		DEPLOY_CONFIG = config
		os.WriteFile(request.Name, []byte(request.Data), 0644)
		httpResponseJson(w, response)
	}
}
