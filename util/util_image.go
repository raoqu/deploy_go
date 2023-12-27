package util

import (
	"fmt"
	"image"
	"os"
)

func IsImageFile(filePath string) bool {
	file, err := os.Open(filePath)
	if err != nil {
		fmt.Println("Error opening file:", err)
		return false
	}
	defer file.Close()

	_, format, err := image.DecodeConfig(file)
	if err != nil {
		fmt.Println("Error decoding image:", err)
		return false
	}

	switch format {
	case "jpeg":
		return true
	case "png":
		return true
	case "gif":
		return true
	default:
		return false
	}
}
