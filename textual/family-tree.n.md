> TODO Update to newest version of [`family-tree.n`](family-tree.n) (newer syntax).

===

# Family Tree
### Header
```n
#!$n
#!4
```
uses parser with name `4`

### Comments
```n
#-comment till line ending
#{
multline comment
#{
    nested multiline comment
#}
#}
```

### Main part
```n
_children <ns <
```
`<` opens a new context, it's like `[` without the need of a closing `]`
```n
    $Child1 <child Father*
```
`$` references the current "local" variable space, `*` creates a new
class instance
```n
    World1 <world*                        
```
`World1` isn't an arg of `$` so it will be "exported" to root
```n
        <$Child1
```
objects like `Child` or `World` start with a capital letter, functions
start with a lowercase letter
```n
        <child Mother*
```
