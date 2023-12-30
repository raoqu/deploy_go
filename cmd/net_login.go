package main

import (
	"encoding/json"
	"net/http"
	"raoqu/util"
	"time"
)

type LoginRequest struct {
	Username string `json:"username"`
	Password string `json:"password"`
}

type LoginUser struct {
	Id       int    `json:"token"`
	Username string `json:"username"`
	Email    string `json:"email"`
	Phone    string `json:"phone"`
}

type LoginPermissions struct {
	Id        string   `json:"id"`
	Operation []string `json:"operation"`
}

type LoginData struct {
	Token       string             `json:"token"`
	User        LoginUser          `json:"user"`
	Permissions []LoginPermissions `json:"permissions"`
}

type LoginResponse struct {
	Code    int       `json:"code"`
	Data    LoginData `json:"data"`
	Message string    `json:"message"`
}

type SessionData struct {
	Username string
}

func responseLoginContent(w http.ResponseWriter, text string) {
	var response = LoginResponse{}
	err := json.Unmarshal([]byte(text), &response)
	if err != nil {
		httpResponseError(w, err)
	} else {
		httpResponseJson(w, response)
	}
}

func handleLogin(w http.ResponseWriter, r *http.Request) {
	var request LoginRequest
	err := json.NewDecoder(r.Body).Decode(&request)
	if err != nil {
		httpResponseError(w, err)
		return
	}

	if !CheckLogin(request.Username, request.Password) {
		responseLoginContent(w, login_fail_response)
		return
	}

	// session registration
	sessionId := util.Uuid()
	sessionData := SessionData{
		Username: request.Username,
	}
	SESSION_MANAGER.Set(sessionId, sessionData)

	// response for successful login
	http.SetCookie(w, &http.Cookie{
		Name:    DEFAULT_SESSION_NAME,
		Value:   sessionId,
		Expires: time.Now().Add(DEFAULT_SESSION_EXPIRATION),
	})
	responseLoginContent(w, login_response)
}

func handlePermissions(w http.ResponseWriter, r *http.Request) {
	responseLoginContent(w, login_response)
}

const login_fail_response = `{
	"code": 401,
	"data": {
	},
	"message": "Invalid username or password"
}`

const login_response = `{
	"code": 200,
	"data": {
	  "token": "mock_token_123456",
	  "user": {
		"id": 1,
		"username": "管理员",
		"email": "raoqu@msn.com",
		"phone": "18888888888"
	  },
	  "permissions": [
		{
		  "id": "files",
		  "operation": []
		}
	  ]
	},
	"message": "login success"
}`
