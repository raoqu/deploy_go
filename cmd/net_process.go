package main

import (
	"encoding/json"
	"fmt"
	"net/http"
	"raoqu/util"
	"raoqu/util/process"
	"runtime"
)

type CommandRequest struct {
	Dir   string `json:"dir"`
	Cmd   string `json:"cmd"`
	Async bool   `json:"async"`
}

func handleRunCommand(w http.ResponseWriter, r *http.Request) {
	var request CommandRequest
	err := json.NewDecoder(r.Body).Decode(&request)
	if err != nil {
		httpResponseError(w, err)
		return
	}

	pid, _ := process.StartCommand(request.Cmd, request.Dir, request.Async)

	httpResponseObject(w, pid)
}

func handleStopCommand(w http.ResponseWriter, r *http.Request) {
	cmdID := r.URL.Path[len("/api/stop/"):]

	if process.TerminateCommand(cmdID) {
		fmt.Fprintf(w, "Command %d terminated\n", cmdID)
	} else {
		fmt.Fprintf(w, "Command %d not found\n", cmdID)
	}
}

func handleGetOutput(w http.ResponseWriter, r *http.Request) {
	cmdID := r.URL.Path[len("/api/output/"):]

	output, found := process.GetCommandOutput(cmdID)
	s := string(output)
	if !found {
		fmt.Fprintf(w, "Command %d not found\n", cmdID)
		return
	}
	if runtime.GOOS == "windows" {
		s, _ = util.Gbk2Utf8(s)
	}

	httpResponseText(w, s)
}
