# N for EcmaScriptKiddies

## Syntax

EcmaScript | N | Meaning | Description
 --- |
 |
 | | ***Literals***
`"string"` | `{string}`
`[BACKTICK]Hello, ${name}[/BACKTICK]` | `=x '{Hello, [person]}` | Template
`parser[BACKTICK]Hello, ${person}[/BACKTICK]` | `parser, : '{Hello, } person` | Parser
 |
`0xabc.123` | `=f'abc.123` | Hexadecimal
`123.456` | `=9'123.456` | Decimal
`0o707.123` | `=7'707.123` | Octal
`0b101` | `=1'101` | Binary
 |
`true` | `++`
`false` | `--`
 |
`[a, b]` | `: a b` | List
 |
 | | ***Objects***
`obj.prop` | `obj'prop`
`obj["$þ€¢íæł cħ@r þrøþ"]` | `obj'{$þ€¢íæł cħ@r þrøþ}`
 |
 | | ***Declarations***
`x=> x(y)` | `"x ^[x y]` | Lambda | Abstraction over `x`
