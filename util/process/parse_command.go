package process

import (
	"raoqu/util/process/parser"
	"strconv"

	"github.com/antlr4-go/antlr/v4"
)

type CommandListener struct {
	*parser.BaseCommandListener
	Command string
	Params  []string
}

type CommandInput struct {
	Command string
	Params  []string
}

func (l *CommandListener) ExitCommand(ctx *parser.CommandContext) {
	l.Command = ctx.GetText()
}

func (l *CommandListener) ExitParam(ctx *parser.ParamContext) {
	l.Params = append(l.Params, ctx.GetText())
}

func unquoteStrings(strs []string) []string {
	unquoted := make([]string, len(strs))
	for i, s := range strs {
		unquotedStr, err := strconv.Unquote(s)
		if err != nil {
			unquoted[i] = s
		} else {
			unquoted[i] = unquotedStr
		}
	}
	return unquoted
}

func ParseCommand(input string) CommandInput {
	is := antlr.NewInputStream(input)
	lexer := parser.NewCommandLexer(is)
	stream := antlr.NewCommonTokenStream(lexer, antlr.TokenDefaultChannel)
	p := parser.NewCommandParser(stream)

	listener := new(CommandListener)
	antlr.ParseTreeWalkerDefault.Walk(listener, p.Commandline())
	return CommandInput{
		Command: listener.Command,
		Params:  unquoteStrings(listener.Params),
	}
}
