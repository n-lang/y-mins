# EcmaScipt → N

## Syntax

| EcmaScript				| N				| Meaning | Description |
| ---:					| :---				| :--- | :--- |
|					|
|					|				| ***Literal***
| `"string"`				| `:<<Hey!>>` or `:«Hey!»`	| String
| `[BTICK]Hello, ${name}[/BTICK]`	| `:«Hello, [person]»`		| Template
| `parse[BTICK]Hello, ${person}[/BTICK]`| `parse:«Hello, [person]»`	| Parser | Both also work w/ `<<…[a]…>>`
| *~*					| *~*
| `0b101`				| `0b:101`			| **B**inary | *o/c/x* works w/ rational nums in N
| `0o707`				| `0o:707`			| **O**ctal
| `123.456`				| `0c:123.456`			| De**c**imal
| `0xabc`				| `0x:abc`			| He**x**adecimal
| *~*					| *~*
| `true`				| `1`				| Boolean Truth
| `false`				| `0`				| Boolean Falsity
| *~*					| *~*
| `[a, b]`				| `[a b]`			| Array → Vector
| *~*					| *~*
| 					|				| ***Object***
| `obj.prop`				| `obj.prop`			| Access
| `obj["$þ€¢íæł cħ@rs"]`		| `obj.«$þ€¢íæł cħ@rs»`		| Quoted Access
| *~*	 				| *~*
|					|				| ***Function***
| `x=> x(y)`				| `x ^ x y`			| Lambda | Abstraction over `x`
