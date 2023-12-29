package util

import (
	"io"
	"io/fs"
	"os"
	"path/filepath"
	"strconv"
	"strings"
	"time"
)

type FileInfo struct {
	FileName string `json:"file_name"`
	IsFolder bool   `json:"is_folder"`
	FileSize int64  `json:"file_size"`
}

func GetUniqueFileName(name string) (string, error) {
	if _, err := os.Stat(name); os.IsNotExist(err) {
		return name, nil
	}

	i := 1
	for {
		newName := name[:len(name)-len(filepath.Ext(name))] + "_" + strconv.Itoa(i) + filepath.Ext(name)
		if _, err := os.Stat(newName); os.IsNotExist(err) {
			return newName, nil
		}
		i++
	}
}

func GetFileModifyTime(path string) string {
	fileInfo, err := os.Stat(path)
	if err != nil {
		return ""
	}
	createTime := fileInfo.ModTime()
	return createTime.Format(time.RFC822)
}

func PathMatchExts(path string, exts []string) bool {
	for _, ext := range exts {
		if ext == ".*" || filepath.Ext(path) == ext {
			return true
		}
	}
	return false
}

func DeleteFileOrDir(path string) error {
	err := os.RemoveAll(path)
	return err
}

func ReadFolder(folderPath string, exts []string) ([]FileInfo, error) {
	var fileList = []FileInfo{}
	files, err := os.ReadDir(folderPath)
	for _, f := range files {
		var info fs.FileInfo
		var fileSize int64 = 0
		info, err = f.Info()
		if err == nil {
			fileSize = info.Size()
		}

		fileList = append(fileList, FileInfo{
			FileName: f.Name(),
			IsFolder: f.IsDir(),
			FileSize: fileSize,
		})
	}

	return fileList, err
}

// enumerate files
//
//	exts: with "." prefix, e.g. {".xls", ".xlsx"}
func EnumerateFiles(folderPath string, exts []string, includeFolder bool) ([]FileInfo, error) {
	if !includeFolder {
		return ReadFolder(folderPath, exts)
	}

	var files = []FileInfo{}

	var err = filepath.Walk(folderPath, func(path string, info os.FileInfo, err error) error {
		// Check if required files
		base := filepath.Base(path)
		if info == nil || strings.HasPrefix(base, ".") || base == "__merged.xlsx" {
			return nil
		} else if includeFolder && info.IsDir() {
			files = append(files, FileInfo{
				FileName: info.Name(),
				IsFolder: true,
				FileSize: 0,
			})
		} else if PathMatchExts(path, exts) {
			files = append(files, FileInfo{
				FileName: info.Name(),
				IsFolder: false,
				FileSize: info.Size(),
			})
			return nil
		}
		return nil
	})
	return files, err
}

func RemoveFiles(filePaths []string) {
	for _, file := range filePaths {
		os.Remove(file)
	}
}

func FileExists(path string) bool {
	fileInfo, err := os.Stat(path)
	if err != nil {
		return false
	}
	return !fileInfo.IsDir() && fileInfo.Mode().IsRegular()
}

func CopyFile(destPath string, srcPath string) {
	os.Remove(destPath)

	src, _ := os.Open(srcPath)
	dest, _ := os.Create(destPath)

	io.Copy(dest, src)

	defer src.Close()
	defer dest.Close()
}

func GetFileSize(f *os.File) int64 {
	fi, err := f.Stat()
	if err != nil {
		return 0
	}
	return fi.Size()
}

func GetAbsPath(relativePath string) (string, error) {
	exePath, err := os.Executable()
	if err != nil {
		return "", err
	}

	exeDir := filepath.Dir(exePath)
	return filepath.Join(exeDir, relativePath), nil
}

func ValidatePathSecurity(path string, availableFolders []string) bool {
	if strings.Contains(path, "..") || strings.Contains(path, "\\") || filepath.IsAbs(path) {
		return false
	}

	segments := strings.Split(path, "/")

	for _, segment := range segments {
		if segment == ".." {
			return false
		}
	}

	for _, folder := range availableFolders {
		if segments[0] == folder {
			return true
		}
	}
	return false
}
