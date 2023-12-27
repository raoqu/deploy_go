// Code generated from Command.g4 by ANTLR 4.13.1. DO NOT EDIT.

package parser // Command

import (
	"fmt"
	"strconv"
	"sync"

	"github.com/antlr4-go/antlr/v4"
)

// Suppress unused import errors
var _ = fmt.Printf
var _ = strconv.Itoa
var _ = sync.Once{}

type CommandParser struct {
	*antlr.BaseParser
}

var CommandParserStaticData struct {
	once                   sync.Once
	serializedATN          []int32
	LiteralNames           []string
	SymbolicNames          []string
	RuleNames              []string
	PredictionContextCache *antlr.PredictionContextCache
	atn                    *antlr.ATN
	decisionToDFA          []*antlr.DFA
}

func commandParserInit() {
	staticData := &CommandParserStaticData
	staticData.SymbolicNames = []string{
		"", "WORD", "QUOTED_STRING", "ESC", "WS",
	}
	staticData.RuleNames = []string{
		"commandline", "command", "param",
	}
	staticData.PredictionContextCache = antlr.NewPredictionContextCache()
	staticData.serializedATN = []int32{
		4, 1, 4, 19, 2, 0, 7, 0, 2, 1, 7, 1, 2, 2, 7, 2, 1, 0, 1, 0, 4, 0, 9, 8,
		0, 11, 0, 12, 0, 10, 1, 0, 1, 0, 1, 1, 1, 1, 1, 2, 1, 2, 1, 2, 0, 0, 3,
		0, 2, 4, 0, 1, 1, 0, 1, 2, 16, 0, 6, 1, 0, 0, 0, 2, 14, 1, 0, 0, 0, 4,
		16, 1, 0, 0, 0, 6, 8, 3, 2, 1, 0, 7, 9, 3, 4, 2, 0, 8, 7, 1, 0, 0, 0, 9,
		10, 1, 0, 0, 0, 10, 8, 1, 0, 0, 0, 10, 11, 1, 0, 0, 0, 11, 12, 1, 0, 0,
		0, 12, 13, 5, 0, 0, 1, 13, 1, 1, 0, 0, 0, 14, 15, 5, 1, 0, 0, 15, 3, 1,
		0, 0, 0, 16, 17, 7, 0, 0, 0, 17, 5, 1, 0, 0, 0, 1, 10,
	}
	deserializer := antlr.NewATNDeserializer(nil)
	staticData.atn = deserializer.Deserialize(staticData.serializedATN)
	atn := staticData.atn
	staticData.decisionToDFA = make([]*antlr.DFA, len(atn.DecisionToState))
	decisionToDFA := staticData.decisionToDFA
	for index, state := range atn.DecisionToState {
		decisionToDFA[index] = antlr.NewDFA(state, index)
	}
}

// CommandParserInit initializes any static state used to implement CommandParser. By default the
// static state used to implement the parser is lazily initialized during the first call to
// NewCommandParser(). You can call this function if you wish to initialize the static state ahead
// of time.
func CommandParserInit() {
	staticData := &CommandParserStaticData
	staticData.once.Do(commandParserInit)
}

// NewCommandParser produces a new parser instance for the optional input antlr.TokenStream.
func NewCommandParser(input antlr.TokenStream) *CommandParser {
	CommandParserInit()
	this := new(CommandParser)
	this.BaseParser = antlr.NewBaseParser(input)
	staticData := &CommandParserStaticData
	this.Interpreter = antlr.NewParserATNSimulator(this, staticData.atn, staticData.decisionToDFA, staticData.PredictionContextCache)
	this.RuleNames = staticData.RuleNames
	this.LiteralNames = staticData.LiteralNames
	this.SymbolicNames = staticData.SymbolicNames
	this.GrammarFileName = "Command.g4"

	return this
}

// CommandParser tokens.
const (
	CommandParserEOF           = antlr.TokenEOF
	CommandParserWORD          = 1
	CommandParserQUOTED_STRING = 2
	CommandParserESC           = 3
	CommandParserWS            = 4
)

// CommandParser rules.
const (
	CommandParserRULE_commandline = 0
	CommandParserRULE_command     = 1
	CommandParserRULE_param       = 2
)

// ICommandlineContext is an interface to support dynamic dispatch.
type ICommandlineContext interface {
	antlr.ParserRuleContext

	// GetParser returns the parser.
	GetParser() antlr.Parser

	// Getter signatures
	Command() ICommandContext
	EOF() antlr.TerminalNode
	AllParam() []IParamContext
	Param(i int) IParamContext

	// IsCommandlineContext differentiates from other interfaces.
	IsCommandlineContext()
}

type CommandlineContext struct {
	antlr.BaseParserRuleContext
	parser antlr.Parser
}

func NewEmptyCommandlineContext() *CommandlineContext {
	var p = new(CommandlineContext)
	antlr.InitBaseParserRuleContext(&p.BaseParserRuleContext, nil, -1)
	p.RuleIndex = CommandParserRULE_commandline
	return p
}

func InitEmptyCommandlineContext(p *CommandlineContext) {
	antlr.InitBaseParserRuleContext(&p.BaseParserRuleContext, nil, -1)
	p.RuleIndex = CommandParserRULE_commandline
}

func (*CommandlineContext) IsCommandlineContext() {}

func NewCommandlineContext(parser antlr.Parser, parent antlr.ParserRuleContext, invokingState int) *CommandlineContext {
	var p = new(CommandlineContext)

	antlr.InitBaseParserRuleContext(&p.BaseParserRuleContext, parent, invokingState)

	p.parser = parser
	p.RuleIndex = CommandParserRULE_commandline

	return p
}

func (s *CommandlineContext) GetParser() antlr.Parser { return s.parser }

func (s *CommandlineContext) Command() ICommandContext {
	var t antlr.RuleContext
	for _, ctx := range s.GetChildren() {
		if _, ok := ctx.(ICommandContext); ok {
			t = ctx.(antlr.RuleContext)
			break
		}
	}

	if t == nil {
		return nil
	}

	return t.(ICommandContext)
}

func (s *CommandlineContext) EOF() antlr.TerminalNode {
	return s.GetToken(CommandParserEOF, 0)
}

func (s *CommandlineContext) AllParam() []IParamContext {
	children := s.GetChildren()
	len := 0
	for _, ctx := range children {
		if _, ok := ctx.(IParamContext); ok {
			len++
		}
	}

	tst := make([]IParamContext, len)
	i := 0
	for _, ctx := range children {
		if t, ok := ctx.(IParamContext); ok {
			tst[i] = t.(IParamContext)
			i++
		}
	}

	return tst
}

func (s *CommandlineContext) Param(i int) IParamContext {
	var t antlr.RuleContext
	j := 0
	for _, ctx := range s.GetChildren() {
		if _, ok := ctx.(IParamContext); ok {
			if j == i {
				t = ctx.(antlr.RuleContext)
				break
			}
			j++
		}
	}

	if t == nil {
		return nil
	}

	return t.(IParamContext)
}

func (s *CommandlineContext) GetRuleContext() antlr.RuleContext {
	return s
}

func (s *CommandlineContext) ToStringTree(ruleNames []string, recog antlr.Recognizer) string {
	return antlr.TreesStringTree(s, ruleNames, recog)
}

func (s *CommandlineContext) EnterRule(listener antlr.ParseTreeListener) {
	if listenerT, ok := listener.(CommandListener); ok {
		listenerT.EnterCommandline(s)
	}
}

func (s *CommandlineContext) ExitRule(listener antlr.ParseTreeListener) {
	if listenerT, ok := listener.(CommandListener); ok {
		listenerT.ExitCommandline(s)
	}
}

func (p *CommandParser) Commandline() (localctx ICommandlineContext) {
	localctx = NewCommandlineContext(p, p.GetParserRuleContext(), p.GetState())
	p.EnterRule(localctx, 0, CommandParserRULE_commandline)
	var _la int

	p.EnterOuterAlt(localctx, 1)
	{
		p.SetState(6)
		p.Command()
	}
	p.SetState(8)
	p.GetErrorHandler().Sync(p)
	if p.HasError() {
		goto errorExit
	}
	_la = p.GetTokenStream().LA(1)

	for ok := true; ok; ok = _la == CommandParserWORD || _la == CommandParserQUOTED_STRING {
		{
			p.SetState(7)
			p.Param()
		}

		p.SetState(10)
		p.GetErrorHandler().Sync(p)
		if p.HasError() {
			goto errorExit
		}
		_la = p.GetTokenStream().LA(1)
	}
	{
		p.SetState(12)
		p.Match(CommandParserEOF)
		if p.HasError() {
			// Recognition error - abort rule
			goto errorExit
		}
	}

errorExit:
	if p.HasError() {
		v := p.GetError()
		localctx.SetException(v)
		p.GetErrorHandler().ReportError(p, v)
		p.GetErrorHandler().Recover(p, v)
		p.SetError(nil)
	}
	p.ExitRule()
	return localctx
	goto errorExit // Trick to prevent compiler error if the label is not used
}

// ICommandContext is an interface to support dynamic dispatch.
type ICommandContext interface {
	antlr.ParserRuleContext

	// GetParser returns the parser.
	GetParser() antlr.Parser

	// Getter signatures
	WORD() antlr.TerminalNode

	// IsCommandContext differentiates from other interfaces.
	IsCommandContext()
}

type CommandContext struct {
	antlr.BaseParserRuleContext
	parser antlr.Parser
}

func NewEmptyCommandContext() *CommandContext {
	var p = new(CommandContext)
	antlr.InitBaseParserRuleContext(&p.BaseParserRuleContext, nil, -1)
	p.RuleIndex = CommandParserRULE_command
	return p
}

func InitEmptyCommandContext(p *CommandContext) {
	antlr.InitBaseParserRuleContext(&p.BaseParserRuleContext, nil, -1)
	p.RuleIndex = CommandParserRULE_command
}

func (*CommandContext) IsCommandContext() {}

func NewCommandContext(parser antlr.Parser, parent antlr.ParserRuleContext, invokingState int) *CommandContext {
	var p = new(CommandContext)

	antlr.InitBaseParserRuleContext(&p.BaseParserRuleContext, parent, invokingState)

	p.parser = parser
	p.RuleIndex = CommandParserRULE_command

	return p
}

func (s *CommandContext) GetParser() antlr.Parser { return s.parser }

func (s *CommandContext) WORD() antlr.TerminalNode {
	return s.GetToken(CommandParserWORD, 0)
}

func (s *CommandContext) GetRuleContext() antlr.RuleContext {
	return s
}

func (s *CommandContext) ToStringTree(ruleNames []string, recog antlr.Recognizer) string {
	return antlr.TreesStringTree(s, ruleNames, recog)
}

func (s *CommandContext) EnterRule(listener antlr.ParseTreeListener) {
	if listenerT, ok := listener.(CommandListener); ok {
		listenerT.EnterCommand(s)
	}
}

func (s *CommandContext) ExitRule(listener antlr.ParseTreeListener) {
	if listenerT, ok := listener.(CommandListener); ok {
		listenerT.ExitCommand(s)
	}
}

func (p *CommandParser) Command() (localctx ICommandContext) {
	localctx = NewCommandContext(p, p.GetParserRuleContext(), p.GetState())
	p.EnterRule(localctx, 2, CommandParserRULE_command)
	p.EnterOuterAlt(localctx, 1)
	{
		p.SetState(14)
		p.Match(CommandParserWORD)
		if p.HasError() {
			// Recognition error - abort rule
			goto errorExit
		}
	}

errorExit:
	if p.HasError() {
		v := p.GetError()
		localctx.SetException(v)
		p.GetErrorHandler().ReportError(p, v)
		p.GetErrorHandler().Recover(p, v)
		p.SetError(nil)
	}
	p.ExitRule()
	return localctx
	goto errorExit // Trick to prevent compiler error if the label is not used
}

// IParamContext is an interface to support dynamic dispatch.
type IParamContext interface {
	antlr.ParserRuleContext

	// GetParser returns the parser.
	GetParser() antlr.Parser

	// Getter signatures
	WORD() antlr.TerminalNode
	QUOTED_STRING() antlr.TerminalNode

	// IsParamContext differentiates from other interfaces.
	IsParamContext()
}

type ParamContext struct {
	antlr.BaseParserRuleContext
	parser antlr.Parser
}

func NewEmptyParamContext() *ParamContext {
	var p = new(ParamContext)
	antlr.InitBaseParserRuleContext(&p.BaseParserRuleContext, nil, -1)
	p.RuleIndex = CommandParserRULE_param
	return p
}

func InitEmptyParamContext(p *ParamContext) {
	antlr.InitBaseParserRuleContext(&p.BaseParserRuleContext, nil, -1)
	p.RuleIndex = CommandParserRULE_param
}

func (*ParamContext) IsParamContext() {}

func NewParamContext(parser antlr.Parser, parent antlr.ParserRuleContext, invokingState int) *ParamContext {
	var p = new(ParamContext)

	antlr.InitBaseParserRuleContext(&p.BaseParserRuleContext, parent, invokingState)

	p.parser = parser
	p.RuleIndex = CommandParserRULE_param

	return p
}

func (s *ParamContext) GetParser() antlr.Parser { return s.parser }

func (s *ParamContext) WORD() antlr.TerminalNode {
	return s.GetToken(CommandParserWORD, 0)
}

func (s *ParamContext) QUOTED_STRING() antlr.TerminalNode {
	return s.GetToken(CommandParserQUOTED_STRING, 0)
}

func (s *ParamContext) GetRuleContext() antlr.RuleContext {
	return s
}

func (s *ParamContext) ToStringTree(ruleNames []string, recog antlr.Recognizer) string {
	return antlr.TreesStringTree(s, ruleNames, recog)
}

func (s *ParamContext) EnterRule(listener antlr.ParseTreeListener) {
	if listenerT, ok := listener.(CommandListener); ok {
		listenerT.EnterParam(s)
	}
}

func (s *ParamContext) ExitRule(listener antlr.ParseTreeListener) {
	if listenerT, ok := listener.(CommandListener); ok {
		listenerT.ExitParam(s)
	}
}

func (p *CommandParser) Param() (localctx IParamContext) {
	localctx = NewParamContext(p, p.GetParserRuleContext(), p.GetState())
	p.EnterRule(localctx, 4, CommandParserRULE_param)
	var _la int

	p.EnterOuterAlt(localctx, 1)
	{
		p.SetState(16)
		_la = p.GetTokenStream().LA(1)

		if !(_la == CommandParserWORD || _la == CommandParserQUOTED_STRING) {
			p.GetErrorHandler().RecoverInline(p)
		} else {
			p.GetErrorHandler().ReportMatch(p)
			p.Consume()
		}
	}

errorExit:
	if p.HasError() {
		v := p.GetError()
		localctx.SetException(v)
		p.GetErrorHandler().ReportError(p, v)
		p.GetErrorHandler().Recover(p, v)
		p.SetError(nil)
	}
	p.ExitRule()
	return localctx
	goto errorExit // Trick to prevent compiler error if the label is not used
}
