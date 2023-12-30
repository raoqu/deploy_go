package main

import (
	"encoding/json"
	"log"
	"os"
)

type DeployConfig struct {
	Path  string       `json:"path"`
	Env   DeployEnv    `json:"env"`
	Items []DeployItem `json:"items"`
}

type DeployEnv map[string]string

type DeployItem struct {
	Pattern string   `json:"path"`
	Actions []string `json:"actions"`
}

var DefaultDeployConfig = DeployConfig{
	Path:  ".",
	Env:   DeployEnv{},
	Items: []DeployItem{},
}

// configuration for deployment
var DEPLOY_CONFIG = DefaultDeployConfig

func parseDeployConfig(content string) (DeployConfig, bool) {
	var configs DeployConfig
	err := json.Unmarshal([]byte(content), &configs)

	if err != nil {
		return DefaultDeployConfig, false
	}

	return configs, true
}

func loadDeployConfig(configFilename string) {
	configData, err := os.ReadFile(configFilename)
	if err != nil {
		log.Fatalf("Error reading config file: %s", err)
		return
	}

	config, success := parseDeployConfig(string(configData))
	if !success {
		log.Fatalf("Error parsing config file: %s", err)
		return
	}
	DEPLOY_CONFIG = config
}
