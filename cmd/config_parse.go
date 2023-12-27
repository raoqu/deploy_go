package main

import (
	"encoding/json"
	"fmt"
	"os"
)

type Config struct {
	ImageTool ImageToolConfig `json:"imageTool"`
}

type ImageToolConfig struct {
	Command   string `json:"command"`
	Directory string `json:"directory"`
}

func defaultConfig() Config {
	config := Config{
		ImageTool: ImageToolConfig{
			Command:   `python 127.0.0.1`,
			Directory: `D:\mylab\backgroundremover`,
		},
	}
	return config
}

func loadConfig() Config {
	defaultConfig := defaultConfig()
	file, err := os.Open("config.json")
	if err != nil {
		fmt.Println("Error opening config file:", err)
		return defaultConfig
	}
	defer file.Close()

	decoder := json.NewDecoder(file)
	config := Config{}
	err = decoder.Decode(&config)
	if err != nil {
		fmt.Println("Error decoding config:", err)
		return defaultConfig
	}

	fmt.Println("imageTool.command: ", config.ImageTool.Command)
	fmt.Println("imageTool.directory: ", config.ImageTool.Directory)
	return config
}
