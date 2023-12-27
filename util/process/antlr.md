### Install
pip install antlr4-tools

### Generate GO source
antlr4 -Dlanguage=Go -o parser -listener Command.g4

### Test g4
antlr4-parse Command.g4 commandline -gui
> command p1 "p2 with blank"
> ^Z
