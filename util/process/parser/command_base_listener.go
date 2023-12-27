// Code generated from Command.g4 by ANTLR 4.13.1. DO NOT EDIT.

package parser // Command

import "github.com/antlr4-go/antlr/v4"

// BaseCommandListener is a complete listener for a parse tree produced by CommandParser.
type BaseCommandListener struct{}

var _ CommandListener = &BaseCommandListener{}

// VisitTerminal is called when a terminal node is visited.
func (s *BaseCommandListener) VisitTerminal(node antlr.TerminalNode) {}

// VisitErrorNode is called when an error node is visited.
func (s *BaseCommandListener) VisitErrorNode(node antlr.ErrorNode) {}

// EnterEveryRule is called when any rule is entered.
func (s *BaseCommandListener) EnterEveryRule(ctx antlr.ParserRuleContext) {}

// ExitEveryRule is called when any rule is exited.
func (s *BaseCommandListener) ExitEveryRule(ctx antlr.ParserRuleContext) {}

// EnterCommandline is called when production commandline is entered.
func (s *BaseCommandListener) EnterCommandline(ctx *CommandlineContext) {}

// ExitCommandline is called when production commandline is exited.
func (s *BaseCommandListener) ExitCommandline(ctx *CommandlineContext) {}

// EnterCommand is called when production command is entered.
func (s *BaseCommandListener) EnterCommand(ctx *CommandContext) {}

// ExitCommand is called when production command is exited.
func (s *BaseCommandListener) ExitCommand(ctx *CommandContext) {}

// EnterParam is called when production param is entered.
func (s *BaseCommandListener) EnterParam(ctx *ParamContext) {}

// ExitParam is called when production param is exited.
func (s *BaseCommandListener) ExitParam(ctx *ParamContext) {}
