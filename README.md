# 〔ף〕► The N Language — Why? How? What?
![N Language Logo](https://avatars0.githubusercontent.com/u/16749774)

This is the page where we tell the world about the N Language. Get prepared; a ~~journey~~ *short'n'messy text snippet* begins.


***


## Who?

- **`probit Labs`** ([@probitlabs](//github.com/probitlabs)), the intiator of the whole thing, is based in **Vienna**, Austria, currently studying at [**Popperschule**](https://www.popperschule.at/), hanging out at [**Metalab** hackerspace](https://metalab.at/) and working on **Semantic Web projects** at [**University** Vienna](http://www.univie.ac.at/).

We welcome anyone who wants to help us do good. But at the moment, we are at a very early stage of the development so that there aren't any language design drafts or contributor guides at the moment. However, [`gram.js`](//github.com/n-lang/n.js/blob/master/src/gram.js) is a good starting point as it includes ~~formal syntax specifications written using EcmaScript's template strings~~ *nothing interesting at the moment :smile:*.



## Why?
We want to create a language in which you **tell what** you think and what you want to know, **not how** to represent your thoughts as computer understandable data structures and how to exactly solve your problems.



## How?
We make extensive use of **graph-based** knowledge representation and **functional** problem descriptions.

EcmaScript | N | Description
 --- | --- | ---
 |
 | | ***Literals***
`""` | `=_'string`
`"$þ€¢íæł cħ@r $ŧrìng"` | `=_'{$þ€¢íæł cħ@r $ŧrìng}`
*No distinction between chars and strings* | `'a` | Char
 |
`[BACKTICK]Hello, ${name}[/BACKTICK]` | `'{Hello, } name`
`parser[BACKTICK]Hello, name[/BACKTICK]` |
 |
`0xabc.123` | `=f'abc.123` | Hexadecimal
`123.456` | `=9'123.456` | Decimal
`0o707.123` | `=7'707.123` | Octal
`0b101` | `=1'101` | Binary
 |
`true` | `++`
`false` | `--`
 |
`[a, b]` | `- a b`
 |
 | | ***Objects***
`obj.prop` | `obj'prop`
`obj["$þ€¢íæł cħ@r þrøþ"]` | `obj'{$þ€¢íæł cħ@r þrøþ}`
 |
 | | ***Functions***
`x=> y=> x y` | `*x*y[x y]`



## What?
See [`y-mins` repository](//github.com/n-lang/y-mins/) for some snippets written in N. However, at the moment, there is no way to parse or interprete.

### What The #!~§?
Jeah, looks kinda ~~cool~~ *empty*.



## When?
These are the things to get done in order to get N working:

+ [ ] Write this list about the things to do :smile:
