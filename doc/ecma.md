# N for EcmaScriptKiddies

## Syntax

EcmaScript | N | Meaning | Description
 --- |
 |
 | | ***Literals***
`"string"` | `{string}`
`[BACKTICK]Hello, ${name}[/BACKTICK]` | `{Hello, [person]}'x` | Template
`parser[BACKTICK]Hello, ${person}[/BACKTICK]` | `parser{Hello, [person]}` | Parser
 |
`b32("ldg.lv")` *using a lib* | `{1dg.lv}'v` | Base 32
`0xabc.123` | `{abc.123}'f` | Hexadecimal
`123.456` | `{123.456}'9` | Decimal
`0o707.123` | `{707.123}'7` | Octal
`0b101` | `{101}'1` | Binary
 |
`true` | `++` | Boolean
`false` | `--`
 |
`[a, b]` | `: /a |b` | List
 |
 | | ***Objects***
`obj.prop` | `obj'prop`
`obj["$þ€¢íæł cħ@r þrøþ"]` | `obj'({$þ€¢íæł cħ@r þrøþ})`
 |
 | | ***Declarations***
`x=> x(y)` | `"x ^[x y]` | Lambda | Abstraction over `x`
