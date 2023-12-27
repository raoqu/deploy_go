grammar Command;

commandline: command (param)+ EOF;

command: WORD;
param: WORD | QUOTED_STRING;

WORD: [a-zA-Z0-9_]+;
QUOTED_STRING: '"' (ESC|.)*? '"';
ESC: '\\' .;
WS: [ \t\r\n]+ -> skip;
