# EcmaScipt → N

## Syntax

| EcmaScript				| N				| Meaning | Description |
| ---:					| :---				| :--- | :--- |
|					|
|					|				| ***Literal***
| `"string"`				| `:<<Hey!>>` or `:«Hey!»`	| String
| `[BTICK]Hello, ${name}[/BTICK]`	| `:«Hello, [person]»`		| Template
| `parse[BTICK]Hello, ${person}[/BTICK]`| `parse:«Hello, [person]»`	| Parser
| *---*					|
| `0b101`				| `0b:101`			| **B**inary
| `0o707.123`				| `0o:707.123`			| **O**ctal
| `123.456`				| `0c:123.456`			| De**c**imal
| `0xabc.123`				| `0x:abc.123`			| He**x**adecimal
| *---*					|
| `true`				| `1`				| Boolean Truth
| `false`				| `0`				| Boolean Falsity
| *---*					|
| `[a, b]`				| `[a b]`			| Array → Vector
| *---*					|
| 					|				| ***Object***
| `obj.prop`				| `obj.prop`			| Access
| `obj["$þ€¢íæł cħ@rs"]`		| `obj.«$þ€¢íæł cħ@rs»`
| *---* 				|
|					|				| ***Declaration***
| `x=> x(y)`				| `"x ^ x y`			| Lambda | Abstraction over `x`
