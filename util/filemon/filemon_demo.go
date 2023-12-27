package filemon

import (
	"fmt"
)

func FilemonDemo() {
	w := NewWatcher(func(ev *WatchEvent) {
		fmt.Println(ev)
	})
	w.Watch("./")

	w.WaitForKill()
}
