# Operators

`n4` supports the following operators… (It is *not* intended to *invent* new operators.)

*   `l r`
>   `l` gets applied on `r`.
*   `l<<BKTK>>r`
>   `r` gets applied on `l`. (!)
*   `l'r`
>   `l` alternates `r`.
*   `l^r`
>   `r` abstracts over var `l` (`λl÷r` – semantic substitution).
---
*   `{Äpfel}`
>   A literal.
*   `[a b]`
>   An expression.
*   `(a b)`
>   Another thing.


# Literals

-   … represent a ordered list containing it's "alternating" chars.

```n
{Äpfel}
{Hier noch 2 Katzenbilder: [lolcat-1′lolcat-2]}
```
