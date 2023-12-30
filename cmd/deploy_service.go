package main

import (
	"encoding/json"
	"fmt"
	"log"
	"os"
	"os/exec"
	"runtime"

	"github.com/bmatcuk/doublestar/v4"
	"github.com/fsnotify/fsnotify"
)

type Action struct {
	Command          string `json:"command"`
	StrongDependency bool   `json:"strongDependency"`
}

type ActionConfig struct {
	Pattern string   `json:"pattern"`
	Actions []Action `json:"actions"`
}

func executeCommands(actions []Action) {
	for _, action := range actions {
		var cmd *exec.Cmd
		if runtime.GOOS == "windows" {
			cmd = exec.Command("cmd.exe", "/C", action.Command)
		} else {
			cmd = exec.Command("sh", "-c", action.Command)
		}
		output, err := cmd.CombinedOutput()
		fmt.Printf("Executing command: %s\n", action.Command)
		if err != nil {
			fmt.Printf("Error executing command: %s, Output: %s\n", err, string(output))
			if action.StrongDependency {
				break
			}
		} else {
			fmt.Printf("Command output: %s\n", string(output))
		}
	}
}

func startDeployService() {
	configData, err := os.ReadFile("config.json")
	if err != nil {
		log.Fatalf("Error reading config file: %s", err)
	}

	var configs []ActionConfig
	err = json.Unmarshal(configData, &configs)
	if err != nil {
		log.Fatalf("Error parsing config file: %s", err)
	}

	watcher, err := fsnotify.NewWatcher()
	if err != nil {
		log.Fatal(err)
	}
	defer watcher.Close()

	done := make(chan bool)
	go func() {
		for {
			select {
			case event, ok := <-watcher.Events:
				if !ok {
					return
				}
				fmt.Println("Event:", event)
				for _, config := range configs {
					match, _ := doublestar.PathMatch(config.Pattern, event.Name)
					if match && (event.Op&fsnotify.Create == fsnotify.Create || event.Op&fsnotify.Write == fsnotify.Write) {
						executeCommands(config.Actions)
					}
				}
			case err, ok := <-watcher.Errors:
				if !ok {
					return
				}
				log.Println("Error:", err)
			}
		}
	}()

	fsys := os.DirFS("/")
	if runtime.GOOS == "windows" {
		fsys = os.DirFS("C:\\")
	}
	for _, config := range configs {
		matches, err := doublestar.Glob(fsys, config.Pattern)
		if err != nil {
			log.Fatal(err)
		}
		for _, match := range matches {
			err = watcher.Add(match)
			if err != nil {
				log.Fatal(err)
			}
		}
	}

	<-done
}
