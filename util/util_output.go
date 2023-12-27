package util

import (
	"github.com/TwiN/go-color"
)

func PrintError(err error) {
	if err != nil {
		println(color.InRed(err.Error()))
	}
}

func Green(msg string) {
	println(color.InGreen(msg))
}

func Red(msg string) {
	println(color.InRed(msg))
}

func Yellow(msg string) {
	println(color.InYellow(msg))
}

func Purple(msg string) {
	println(color.InPurple(msg))
}

func Cyan(msg string) {
	println(color.InCyan(msg))
}

func Gray(msg string) {
	println(color.InGray(msg))
}
