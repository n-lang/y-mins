import {fst, snd, rs} from 'njs'

const
  html = rs`http://example.org/html#`,
  dom = rs`http://example.org/dom#`
  n = rs`n:`,
  L

export default n.root(
  dom.type("html"),
  html.html,
  snd(n.kidz, n.ls)
    (dom.smpl(html.title)("Test"))
    (n.nil(
      html.meta,
      n.def
        (html.name("description"))
        (html.content("Lorem ipsum"))
      ,
    L))
  ),
L)
