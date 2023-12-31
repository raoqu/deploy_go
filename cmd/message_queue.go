package main

import (
	"container/list"
	"sync"
	"time"
)

const MESSAGE_QUEUE_LENGTH = 100

type MessageQueue struct {
	sync.Mutex
	queue       *list.List
	size        int
	timeout     time.Duration
	publisher   *MessagePublisher
	subscribers map[MessageSubscriber]struct{}
}

type MessagePublisher struct {
	subscribers map[MessageSubscriber]struct{}
	lock        sync.RWMutex
	closed      chan struct{}
}

type MessageSubscriber chan string

type MessageQueueItem struct {
	message   string
	timestamp int64
}

func NewMessageQueue(size, timeout int) *MessageQueue {
	queue := &MessageQueue{
		queue:   list.New(),
		size:    size,
		timeout: time.Duration(timeout) * time.Second,
		publisher: &MessagePublisher{
			subscribers: make(map[MessageSubscriber]struct{}),
			closed:      make(chan struct{}),
		},
	}

	go func() {
		for {
			queue.RemoveExpiredItems()
			time.Sleep(2 * time.Second)
		}
	}()

	return queue
}

func (mq *MessageQueue) addMessageItem(message string) {
	mq.Lock()
	defer mq.Unlock()

	item := MessageQueueItem{
		message:   message,
		timestamp: time.Now().Unix(),
	}
	if mq.queue.Len() >= mq.size {
		mq.queue.Remove(mq.queue.Front())
	}
	mq.queue.PushBack(item)
}

func (mq *MessageQueue) Push(value string) {

	mq.addMessageItem(value)

	mq.publisher.lock.RLock()
	defer mq.publisher.lock.RUnlock()

	for sub := range mq.publisher.subscribers {
		select {
		case sub <- value:
		default:
		}
	}
}

func (mq *MessageQueue) GetMessages() []string {
	mq.Lock()
	defer mq.Unlock()

	var messages []string
	for e := mq.queue.Front(); e != nil; e = e.Next() {
		messages = append(messages, e.Value.(MessageQueueItem).message)
	}
	return messages
}

func (mq *MessageQueue) RemoveExpiredItems() {
	if !mq.TryLock() {
		return
	}
	defer mq.Unlock()

	currentTimestamp := time.Now().Unix()
	expiredTimestamp := currentTimestamp - (int64(mq.timeout) / int64(time.Second))

	l := mq.queue
	for e := l.Front(); e != nil; {
		next := e.Next()
		item := e.Value.(MessageQueueItem)

		if item.timestamp >= expiredTimestamp {
			break
		}

		l.Remove(e)
		e = next
	}
	// fmt.Printf("%d,", len(mq.publisher.subscribers))
}

func (mq *MessageQueue) Subscribe() MessageSubscriber {
	mq.publisher.lock.Lock()
	defer mq.publisher.lock.Unlock()

	ch := make(MessageSubscriber, MESSAGE_QUEUE_LENGTH)
	mq.publisher.subscribers[ch] = struct{}{}
	return ch
}

func (mq *MessageQueue) Unsubscribe(sub MessageSubscriber) {
	print("Unscribe:")
	mq.publisher.lock.Lock()
	defer mq.publisher.lock.Unlock()

	print("%d -> ", len(mq.publisher.subscribers))
	close(sub)
	delete(mq.publisher.subscribers, sub)
	print("%d ,", len(mq.publisher.subscribers))
}

func (mq *MessageQueue) Close() {
	close(mq.publisher.closed)
}

func (mq *MessageQueue) IsClosed() <-chan struct{} {
	return mq.publisher.closed
}
