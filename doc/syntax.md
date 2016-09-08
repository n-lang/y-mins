# Syntax

## Hello World
```n
#!$n n:4
'str n:string

this <
    title '{Hello, world!}
```

## Multi-Lines
```n
name>
    Alicia  love <
            name 'Hans
            name 'Martin
    Anton>
        love <name 'Herbert
        shoppingList <-
            <title 'Vegetables
            <
                title 'Oranges
                count =9'2
###
name Alicia love [name 'Hans]
name Alicia love [name 'Martin]
name Anton love [name 'Herbert]
name Anton shoppingList [- [title 'Vegetables] [title 'Oranges]]
name Anton shoppingList [- [title 'Vegetables] [count =9'2]]
```
