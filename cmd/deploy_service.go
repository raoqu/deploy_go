package main

import (
	"fmt"
	"os/exec"
	"path/filepath"
	"raoqu/util"
	"raoqu/util/filemon"
	"runtime"
	"strings"

	"github.com/bmatcuk/doublestar/v4"
)

type DeployContext struct {
	BasePath string
	File     string
	Pattern  string
	Action   string
	Env      map[string]string
	Dir      string
	Command  string
}

func startDeployService(configFilename string) {
	loadDeployConfig(configFilename)

	w := filemon.NewWatcher(deployFn)
	w.Watch(DEPLOY_CONFIG.Path)
}

func deployFn(ev *filemon.WatchEvent) {
	if ev.Type == filemon.C_Create {
		path := ev.Fpath
		file, err := filepath.Rel(DEPLOY_CONFIG.Path, path)
		if err != nil {
			util.PrintError(err)
			return
		}

		for _, item := range DEPLOY_CONFIG.Items {
			if matchPath(file, item.Pattern) {
				if !executeDeployActions(file, item, DEPLOY_CONFIG.Env) {
					break
				}
			}
		}
	}
}

func matchPath(path string, pattern string) bool {
	match, _ := doublestar.PathMatch(pattern, path)
	return match
}

func executeDeployActions(file string, item DeployItem, env DeployEnv) bool {
	for _, action := range item.Actions {
		var cmd *exec.Cmd
		ctx := initDeployContext(file, item, action)
		if ctx == nil {
			return false
		}

		// cmd = exec.Command(ctx.Command)
		if runtime.GOOS == "windows" {
			cmd = exec.Command("c:\\windows\\system32\\cmd.exe", "/C", ctx.Command)
		} else {
			cmd = exec.Command("/bin/sh", "-c", ctx.Command)
		}

		cmd.Dir = ctx.Dir

		output, err := cmd.CombinedOutput()
		fmt.Printf("Executing command: %s   { %s }\n", ctx.Command, ctx.Dir)
		if err != nil {
			fmt.Printf("Error executing command: %s, Output: %s\n", err, string(output))
			return false
		}
		// else {
		// 	if runtime.GOOS == "windows" {
		// 		str, _ := util.Gbk2Utf8(string(output))
		// 		fmt.Printf("Output: %s\n", str)
		// 	} else {
		// 		fmt.Printf("Output: %s\n", output)
		// 	}
		// }
	}
	return true
}

func initDeployContext(file string, item DeployItem, action string) *DeployContext {
	basePath := DEPLOY_CONFIG.Path
	ctx := DeployContext{
		BasePath: basePath,
		File:     file,
		Pattern:  item.Pattern,
		Action:   action,
	}

	if parseDeployAction(&ctx) {
		return &ctx
	}
	return nil
}

func parseDeployAction(ctx *DeployContext) bool {
	action := ctx.Action
	parts := strings.Split(action, "=>")
	ctx.Dir = ctx.BasePath
	if len(parts) < 1 || len(parts) > 2 {
		util.Red("Invalid action:" + action)
		return false
	}

	dir := ctx.BasePath
	if len(parts) == 2 {
		dir = decodeDeployParams(parts[0], ctx)
	}
	ctx.Command = decodeDeployParams(parts[len(parts)-1], ctx)
	ctx.Dir, _ = util.GetAbsPath(dir)
	return true
}

func decodeDeployParams(input string, ctx *DeployContext) string {
	str := util.TrimString(input)
	str = strings.ReplaceAll(str, "{$FILE}", ctx.File)
	for k, v := range DEPLOY_CONFIG.Env {
		str = strings.ReplaceAll(str, "{$"+k+"}", v)
	}
	return str
}

func getActionType(evType filemon.EvType) string {
	switch evType {
	case filemon.C_Create:
		return "create"
	case filemon.C_Modify:
		return "modify"
	case filemon.C_Delete:
		return "delete"
	case filemon.C_Rename:
		return "rename"
	case filemon.C_Attrib:
		return "attribute"
	default:
		return "unknown"
	}
}
