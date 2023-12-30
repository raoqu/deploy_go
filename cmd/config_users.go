package main

import (
	"encoding/json"
	"os"
)

// UserConfig 定义了配置文件中的用户信息
type UserConfig struct {
	User     string `json:"user"`
	Password string `json:"password"`
}

// ConfigList 是一个包含多个 UserConfig 的切片
type UserConfigList []UserConfig

var USER_CONFIG = UserConfigList{}

// LoadConfig 加载配置文件并返回 UserConfig 列表
func initUserConfig(filename string) error {
	bytes, err := os.ReadFile(filename)
	if err != nil {
		return err
	}

	var configs UserConfigList
	err = json.Unmarshal(bytes, &configs)
	if err != nil {
		return err
	}

	USER_CONFIG = configs
	return nil
}

// Login 检查提供的用户名和密码是否存在于配置列表中
func CheckLogin(user, password string) bool {
	for _, config := range USER_CONFIG {
		if config.User == user && config.Password == password {
			return true
		}
	}
	return false
}
