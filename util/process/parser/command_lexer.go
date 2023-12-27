// Code generated from Command.g4 by ANTLR 4.13.1. DO NOT EDIT.

package parser

import (
	"fmt"
	"github.com/antlr4-go/antlr/v4"
	"sync"
	"unicode"
)

// Suppress unused import error
var _ = fmt.Printf
var _ = sync.Once{}
var _ = unicode.IsLetter

type CommandLexer struct {
	*antlr.BaseLexer
	channelNames []string
	modeNames    []string
	// TODO: EOF string
}

var CommandLexerLexerStaticData struct {
	once                   sync.Once
	serializedATN          []int32
	ChannelNames           []string
	ModeNames              []string
	LiteralNames           []string
	SymbolicNames          []string
	RuleNames              []string
	PredictionContextCache *antlr.PredictionContextCache
	atn                    *antlr.ATN
	decisionToDFA          []*antlr.DFA
}

func commandlexerLexerInit() {
	staticData := &CommandLexerLexerStaticData
	staticData.ChannelNames = []string{
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	}
	staticData.ModeNames = []string{
		"DEFAULT_MODE",
	}
	staticData.SymbolicNames = []string{
		"", "WORD", "QUOTED_STRING", "ESC", "WS",
	}
	staticData.RuleNames = []string{
		"WORD", "QUOTED_STRING", "ESC", "WS",
	}
	staticData.PredictionContextCache = antlr.NewPredictionContextCache()
	staticData.serializedATN = []int32{
		4, 0, 4, 34, 6, -1, 2, 0, 7, 0, 2, 1, 7, 1, 2, 2, 7, 2, 2, 3, 7, 3, 1,
		0, 4, 0, 11, 8, 0, 11, 0, 12, 0, 12, 1, 1, 1, 1, 1, 1, 5, 1, 18, 8, 1,
		10, 1, 12, 1, 21, 9, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 2, 1, 3, 4, 3, 29, 8,
		3, 11, 3, 12, 3, 30, 1, 3, 1, 3, 1, 19, 0, 4, 1, 1, 3, 2, 5, 3, 7, 4, 1,
		0, 2, 4, 0, 48, 57, 65, 90, 95, 95, 97, 122, 3, 0, 9, 10, 13, 13, 32, 32,
		37, 0, 1, 1, 0, 0, 0, 0, 3, 1, 0, 0, 0, 0, 5, 1, 0, 0, 0, 0, 7, 1, 0, 0,
		0, 1, 10, 1, 0, 0, 0, 3, 14, 1, 0, 0, 0, 5, 24, 1, 0, 0, 0, 7, 28, 1, 0,
		0, 0, 9, 11, 7, 0, 0, 0, 10, 9, 1, 0, 0, 0, 11, 12, 1, 0, 0, 0, 12, 10,
		1, 0, 0, 0, 12, 13, 1, 0, 0, 0, 13, 2, 1, 0, 0, 0, 14, 19, 5, 34, 0, 0,
		15, 18, 3, 5, 2, 0, 16, 18, 9, 0, 0, 0, 17, 15, 1, 0, 0, 0, 17, 16, 1,
		0, 0, 0, 18, 21, 1, 0, 0, 0, 19, 20, 1, 0, 0, 0, 19, 17, 1, 0, 0, 0, 20,
		22, 1, 0, 0, 0, 21, 19, 1, 0, 0, 0, 22, 23, 5, 34, 0, 0, 23, 4, 1, 0, 0,
		0, 24, 25, 5, 92, 0, 0, 25, 26, 9, 0, 0, 0, 26, 6, 1, 0, 0, 0, 27, 29,
		7, 1, 0, 0, 28, 27, 1, 0, 0, 0, 29, 30, 1, 0, 0, 0, 30, 28, 1, 0, 0, 0,
		30, 31, 1, 0, 0, 0, 31, 32, 1, 0, 0, 0, 32, 33, 6, 3, 0, 0, 33, 8, 1, 0,
		0, 0, 5, 0, 12, 17, 19, 30, 1, 6, 0, 0,
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

// CommandLexerInit initializes any static state used to implement CommandLexer. By default the
// static state used to implement the lexer is lazily initialized during the first call to
// NewCommandLexer(). You can call this function if you wish to initialize the static state ahead
// of time.
func CommandLexerInit() {
	staticData := &CommandLexerLexerStaticData
	staticData.once.Do(commandlexerLexerInit)
}

// NewCommandLexer produces a new lexer instance for the optional input antlr.CharStream.
func NewCommandLexer(input antlr.CharStream) *CommandLexer {
	CommandLexerInit()
	l := new(CommandLexer)
	l.BaseLexer = antlr.NewBaseLexer(input)
	staticData := &CommandLexerLexerStaticData
	l.Interpreter = antlr.NewLexerATNSimulator(l, staticData.atn, staticData.decisionToDFA, staticData.PredictionContextCache)
	l.channelNames = staticData.ChannelNames
	l.modeNames = staticData.ModeNames
	l.RuleNames = staticData.RuleNames
	l.LiteralNames = staticData.LiteralNames
	l.SymbolicNames = staticData.SymbolicNames
	l.GrammarFileName = "Command.g4"
	// TODO: l.EOF = antlr.TokenEOF

	return l
}

// CommandLexer tokens.
const (
	CommandLexerWORD          = 1
	CommandLexerQUOTED_STRING = 2
	CommandLexerESC           = 3
	CommandLexerWS            = 4
)
