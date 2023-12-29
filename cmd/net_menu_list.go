package main

import (
	"encoding/json"
	"net/http"
)

type MenuItem struct {
	Label    string     `json:"label"`
	LabelEn  string     `json:"labelEn"`
	Key      string     `json:"key"`
	Icon     string     `json:"icon"`
	Rule     string     `json:"rule"`
	Children []MenuItem `json:"children"`
}

type MenuItemResponse struct {
	Code    int        `json:"code"`
	Data    []MenuItem `json:"data"`
	Message string     `json:"message"`
}

func handleMenuList(w http.ResponseWriter, r *http.Request) {
	var response = MenuItemResponse{}
	err := json.Unmarshal([]byte(menu_list), &response)
	if err != nil {
		httpResponseError(w, err)
	} else {
		httpResponseJson(w, response)
	}
}

const menu_list = `{
	"code": 200,
	"data": [
	  {
		"label": "文件管理",
		"labelEn": "Files",
		"key": "files",
		"icon": "la:tachometer-alt",
		"children": [
		  {
			"label": "文件管理",
			"labelEn": "File manager",
			"key": "/files",
			"rule": "/files"
		  }
		]
	  }
	],
	"message": ""
  }`
