package process

import (
	"bytes"
	"fmt"
	"os/exec"
	"raoqu/util"
	"strings"
	"sync"
)

var (
	runningCmds   = make(map[string]*exec.Cmd)
	runningCmdsMu sync.Mutex
)

func StartCommand(command string, dir string, async bool) (string, error) {
	// var cmd Command = Command{
	// 	Command: command,
	// 	Dir:     dir,
	// }

	cmdParts := strings.Split(command, " ")
	cmd := exec.Command(cmdParts[0], cmdParts[1:]...)
	cmd.Dir = dir

	runningCmdsMu.Lock()
	defer runningCmdsMu.Unlock()

	var err_ error = nil
	cmdID := util.Uuid()
	runningCmds[cmdID] = cmd

	var cmdStdout, cmdStderr bytes.Buffer
	cmd.Stdout = &cmdStdout
	cmd.Stderr = &cmdStderr

	if async {
		go func() {
			ExecuteCmd(cmd, cmdID, async, command, dir)
		}()
	} else {
		err_ = ExecuteCmd(cmd, cmdID, async, command, dir)
		errMsg := cmdStderr.String()
		println(errMsg)
	}

	return cmdID, err_
}

func ExecuteCmd(cmd *exec.Cmd, cmdID string, async bool, command string, dir string) error {
	err_ := cmd.Run()
	if err_ != nil {
		fmt.Printf("Command %s in directory %s failed: %s\n", command, dir, err_)
	}
	if async {
		runningCmdsMu.Lock()
		delete(runningCmds, cmdID)
		runningCmdsMu.Unlock()
	}
	return err_
}

func TerminateCommand(cmdID string) bool {
	runningCmdsMu.Lock()
	defer runningCmdsMu.Unlock()

	cmd, ok := runningCmds[cmdID]
	if !ok {
		return false
	}

	err := cmd.Process.Kill()
	if err != nil {
		fmt.Printf("Command %d termination failed: %s\n", cmdID, err)
		return false
	}

	delete(runningCmds, cmdID)
	return true
}

func GetCommandOutput(cmdID string) ([]byte, bool) {
	runningCmdsMu.Lock()
	defer runningCmdsMu.Unlock()

	cmd, ok := runningCmds[cmdID]
	if !ok {
		return nil, false
	}

	output := cmd.Stdout.(*bytes.Buffer).Bytes()
	return output, true
}
