package thread

import (
	"errors"
	"sync"
)

type Task func()

type ThreadPool struct {
	taskQueue  chan Task
	workerPool chan struct{}
	wg         sync.WaitGroup
}

func NewThreadPool(maxQueueSize, numWorkers int) *ThreadPool {
	pool := &ThreadPool{
		taskQueue:  make(chan Task, maxQueueSize),
		workerPool: make(chan struct{}, numWorkers),
	}

	go pool.start()
	return pool
}

func (p *ThreadPool) start() {
	for task := range p.taskQueue {
		p.workerPool <- struct{}{}
		go func(task Task) {
			defer func() { <-p.workerPool }()
			task()
			p.wg.Done()
		}(task)
	}
}

func (p *ThreadPool) AddTask(task Task) error {
	select {
	case p.taskQueue <- task:
		p.wg.Add(1)
		return nil
	default:
		return errors.New("task queue is full")
	}
}

func (p *ThreadPool) Wait() {
	p.wg.Wait()
}
