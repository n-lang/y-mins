import rs from 'n.js'

const
  html = rs`http://example.org/html#`,
  dom = rs`http://example.org/dom#`,
  n = rs`n:`

export default n.root(
  dom.type('html'),
  n['/'](html.html),
  n.kidz(n.ls
    (n['='](
      n['/'](html.head),
      n.kidz([ # js native alternative to `n.ls`

        dom.smpl(html.title)('Test'),
        n['='](
          n['/'](html.meta),
          n['*']
            (html.name('description'))
            (html.content('Lorem ipsum'))
        ),
      ]),
    )),
    (dom.smpl(html.body)(
      dom.smpl(html.h1)('Lorem ipsum – Ein Test')
    )),
  ),
)
