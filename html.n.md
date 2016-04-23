N's shebang:
```n
#!$n
```

Using the parser version 0 of the `n:` namespace to parse the document:
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

Use vocabulary version 0 of the `n:` namespace to match unis:
```n
/ "n:v0"
```

HTML document:
```n
[@
  :html "http://example.org/html#"
  :dom "http://example.org/dom#"
]

this
  dom:type "html"
  / html:html

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
