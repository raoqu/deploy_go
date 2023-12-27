package main

import (
	"encoding/json"
	"errors"
	"net/http"
	"raoqu/util"
	"time"
)

type LoginRequest struct {
	Username string `json:"username"`
	Password string `json:"password"`
}

type LoginResponse struct {
	Success  bool   `json:"success"`
	Username string `json:"username"`
}

type SessionData struct {
	Username string
}

func handleLogin(w http.ResponseWriter, r *http.Request) {
	var request LoginRequest
	err := json.NewDecoder(r.Body).Decode(&request)
	if err != nil {
		httpResponseError(w, err)
		return
	}

	if request.Username != "admin" || request.Password != "admin" {
		httpResponseError(w, errors.New("Invalid username or password"))
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
	w.WriteHeader(http.StatusOK)
	httpResponseObject(w, LoginResponse{
		Success:  true,
		Username: request.Username,
	})
}
