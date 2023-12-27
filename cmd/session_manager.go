package main

import (
	"sync"
	"time"
)

type Session struct {
	Data      interface{}
	ExpiresAt time.Time
}

type SessionManager struct {
	sessions map[string]Session
	mu       sync.RWMutex
}

const DEFAULT_SESSION_NAME = "session_id"

var DEFAULT_SESSION_EXPIRATION = 30 * time.Minute

func NewSessionManager(duration time.Duration) *SessionManager {
	DEFAULT_SESSION_EXPIRATION = duration
	mgr := &SessionManager{
		sessions: make(map[string]Session),
	}

	// expiration check per minute
	go func() {
		ticker := time.NewTicker(1 * time.Minute)
		for {
			<-ticker.C
			mgr.CleanupExpired()
		}
	}()

	return mgr
}

func (manager *SessionManager) Set(sessionID string, data interface{}) {
	manager.mu.Lock()
	defer manager.mu.Unlock()

	manager.sessions[sessionID] = Session{
		Data:      data,
		ExpiresAt: time.Now().Add(DEFAULT_SESSION_EXPIRATION),
	}
}

func (manager *SessionManager) Get(sessionID string) (interface{}, bool) {
	manager.mu.RLock()
	defer manager.mu.RUnlock()

	session, exists := manager.sessions[sessionID]
	if !exists || time.Now().After(session.ExpiresAt) {
		return nil, false
	}
	return session.Data, true
}

func (manager *SessionManager) CleanupExpired() {
	manager.mu.Lock()
	defer manager.mu.Unlock()

	for id, session := range manager.sessions {
		if time.Now().After(session.ExpiresAt) {
			delete(manager.sessions, id)
		}
	}
}
