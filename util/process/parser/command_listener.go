// Code generated from Command.g4 by ANTLR 4.13.1. DO NOT EDIT.

package parser // Command

import "github.com/antlr4-go/antlr/v4"

// CommandListener is a complete listener for a parse tree produced by CommandParser.
type CommandListener interface {
	antlr.ParseTreeListener

	// EnterCommandline is called when entering the commandline production.
	EnterCommandline(c *CommandlineContext)

	// EnterCommand is called when entering the command production.
	EnterCommand(c *CommandContext)

	// EnterParam is called when entering the param production.
	EnterParam(c *ParamContext)

	// ExitCommandline is called when exiting the commandline production.
	ExitCommandline(c *CommandlineContext)

	// ExitCommand is called when exiting the command production.
	ExitCommand(c *CommandContext)

	// ExitParam is called when exiting the param production.
	ExitParam(c *ParamContext)
}
