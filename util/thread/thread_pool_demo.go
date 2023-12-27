package thread

import (
	"fmt"
	"time"
)

func ThreadPoolDemo() {
	pool := NewThreadPool(5, 3) // queue size 5，3 concurrent threads

	for i := 0; i < 22; i++ {
		i := i
		err := pool.AddTask(func() {
			fmt.Printf("> %d\n", i)
			time.Sleep(1 * time.Second)
			fmt.Printf(". %d\n", i)
		})
		if err != nil {
			fmt.Printf("Failed %d: %v\n", i, err)
		} else {
			fmt.Printf("Added %d\n", i)
		}
	}

	pool.Wait()
	fmt.Println("All tasks are completed.")
}
