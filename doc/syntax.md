# Syntax
##### Annotiations:
- Headings ending with a colon are meant as *named paragraphs*.
- These cute little things: {`:P`} … they are just there to make this text fun to read; 'cause fun, fun, fun … {`:DDD`}

## Hello World {`:P`}
##### Shebang:
N's shebang is `#!$n -n(version)`.

The first version will be 4.00 because it's based on the works on W3C's *RDF/N3*. You usally don't want to specify the minor version , so you'll just write `#!$n -n4`; except you depend on an addition made in a minor version; then you would *shebang* `#!$n -n4.25`.

##### Identifiers:
… are case-sensitive and identify one (or more; see semantics) objects in global space.

When identifiers include "special" chars like whitespace you write: `({spezielle spätzle})`. But unicode *is* supported, so you do *not* need to write: `({spezialspätzle})`, just `spezialspätzle` is fine.


##### Example:
```n
#!$n -n4

(_{My comment.})
title {Hello, world!}
```

## Parenthesis {`:]`}
### `{strings}`
`{This}` is a literal.

##### Example:
```n
{
    Multi-[
    ]lined
    {nested}[(char"curly-end)]
    string.
}

===

#{
    Multi-#[
    ]#lined
    {nested}}
    string.
}#
```

### `[expressions]`
`[document id]` is an expression entity.

##### Example:
```n
title [document id'heading]
```

### `(escapes)`
`(char'xi)` is a escape entity.
A fragment is evaluated eager – before all of the expressions – and returns 0–n strings.
These strings are part of the identifiers of the next processing frame.

##### Example:
```n
math'(char'xi)
```

## Principles `:P`
```n
has-sister /called \= /{Magrit} |{Ma[char"xi]}
called {Bernhard} \has-brother
has-mother bea

===

has-sister
    /called \=
        {Magrit}
        {Ma[(char'xi)]}
has-brother [called {Bernhard}]
```


## Pseudo-literals `:|`
### Lists
##### Example:
```n
: /0 |9'1 |9'2

===

:
    0
    9'1
    9'2
```

### Numbers
Numbers are keys of their highest digit (i.e. base minus 1). When the highest digit is 10 or more, the corresponding uppercase letter is used.

##### Example:
```n
1'10010 (_{Binary})
8'22 (_{Octal})
9'18 (_{Decimal})
F'12 (_{Hexadecimal})
V'I (_{Base32})
```

## Polymorphism {`8>`}
##### Example:
```n
has-sister
    /called
        \=
            {Margit}
            {Ma[(char'xi)]}
        {Sonja}
        {Tina}
```
