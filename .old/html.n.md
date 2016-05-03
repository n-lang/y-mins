N's shebang:
```n
#!$n
```

Using the parser version 0 of the `n:` schema to parse the document:
```n
#!"n:p0"
```

Comments:
```n
# single line comment
#[
  multi line comment
  start and end must be at the beginning of the line
  start and end must have the same indention level
#]
```

Use vocabulary version 0 of the `n:` schema to match unis:
```n
/ "n:v0"
```

Initialize `:html` and `:dom` literal globally:
```n
[@
  :html "http://example.org/html#"
  :dom "http://example.org/dom#"
]
```

Block with informations about the subject identified by this document:
```n
this
```

Setting `n/1` predicate `dom:type` to literal:
```n
  dom:type :"html"
```

Typing to `n/1` type `html:html` which maps the `<html>` tag:
```n
  / html:html

```

```n
  [@
    html:version :"XHTML+RDFa 1.1"
  ]

  kidz [ls
    dom:smpl.html:title :"Test"
    =
      / html:meta

      @ html:charset :"utf-8"
    =
      / html:meta

      [@
        html:name :"description"
        html:content :"Lorem ipsum"
      ]
  ]
```
