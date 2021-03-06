import { storiesOf } from '@storybook/react'
import * as React from 'react'
import ArticlePreview from './index'

storiesOf(`molecules|${ArticlePreview.name}`, module)
  .addDecorator((storyFn) => (
    <div
      style={{
        padding: '30px',
      }}
    >
      {storyFn()}
    </div>
  ))
  .add('Simple cassette', () => (
    <ArticlePreview
      url="/blog/yyyy-mm-dd/slug.html"
      createdAt="yyyy/mm/dd"
      title="post title"
      description="dummy dummy dummy dummy dummy dummy dummy dummy"
      heroImage={{
        fluid: {
          src:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAMAAADOQy/fAAAAZlBMVEX/////7On/9vT/9/X/19D/0Mf/9fPWyOT+/v7m3u6Xdbri2OvNzc3n5+fW1tbb29v4+Pj/2dP/z8fUxuLVx+P9/f6qjcbq4/G4uLi/v7+5ubmqqqr/29X9/P78+/3+/f7u6fTg1upBKkMcAAAACXBIWXMAABcRAAAXEQHKJvM/AAAAB3RJTUUH4wULDBMVRs2X4AAAAEBJREFUCB2NwTcCgCAAALGzi4pIsff/f1KcWUiIkqQZobwoqWo80bSd7NWApw3WjYCY5mXddsnv4HT2InA/LzE+sNECb87AvvsAAAAASUVORK5CYII=',
          srcSet:
            '//images.ctfassets.net/luzcv4xauheo/6Od9v3wzLOysiMum0Wkmme/c61f565469373c5563e1943210bb53e9/1_VsDvaO4j8rq-BueKLV1XZQ.png?w=88&h=37&q=50&fit=scale 88w,//images.ctfassets.net/luzcv4xauheo/6Od9v3wzLOysiMum0Wkmme/c61f565469373c5563e1943210bb53e9/1_VsDvaO4j8rq-BueKLV1XZQ.png?w=175&h=73&q=50&fit=scale 175w,//images.ctfassets.net/luzcv4xauheo/6Od9v3wzLOysiMum0Wkmme/c61f565469373c5563e1943210bb53e9/1_VsDvaO4j8rq-BueKLV1XZQ.png?w=350&h=146&q=50&fit=scale 350w,//images.ctfassets.net/luzcv4xauheo/6Od9v3wzLOysiMum0Wkmme/c61f565469373c5563e1943210bb53e9/1_VsDvaO4j8rq-BueKLV1XZQ.png?w=525&h=219&q=50&fit=scale 525w,//images.ctfassets.net/luzcv4xauheo/6Od9v3wzLOysiMum0Wkmme/c61f565469373c5563e1943210bb53e9/1_VsDvaO4j8rq-BueKLV1XZQ.png?w=700&h=292&q=50&fit=scale 700w,//images.ctfassets.net/luzcv4xauheo/6Od9v3wzLOysiMum0Wkmme/c61f565469373c5563e1943210bb53e9/1_VsDvaO4j8rq-BueKLV1XZQ.png?w=1050&h=438&q=50&fit=scale 1050w,//images.ctfassets.net/luzcv4xauheo/6Od9v3wzLOysiMum0Wkmme/c61f565469373c5563e1943210bb53e9/1_VsDvaO4j8rq-BueKLV1XZQ.png?w=1600&h=667&q=50&fit=scale 1600w',
          srcSetWebp:
            '"//images.ctfassets.net/luzcv4xauheo/6Od9v3wzLOysiMum0Wkmme/c61f565469373c5563e1943210bb53e9/1_VsDvaO4j8rq-BueKLV1XZQ.png?w=88&h=37&q=50&fm=webp&fit=scale 88w,//images.ctfassets.net/luzcv4xauheo/6Od9v3wzLOysiMum0Wkmme/c61f565469373c5563e1943210bb53e9/1_VsDvaO4j8rq-BueKLV1XZQ.png?w=175&h=73&q=50&fm=webp&fit=scale 175w,//images.ctfassets.net/luzcv4xauheo/6Od9v3wzLOysiMum0Wkmme/c61f565469373c5563e1943210bb53e9/1_VsDvaO4j8rq-BueKLV1XZQ.png?w=350&h=146&q=50&fm=webp&fit=scale 350w,//images.ctfassets.net/luzcv4xauheo/6Od9v3wzLOysiMum0Wkmme/c61f565469373c5563e1943210bb53e9/1_VsDvaO4j8rq-BueKLV1XZQ.png?w=525&h=219&q=50&fm=webp&fit=scale 525w,//images.ctfassets.net/luzcv4xauheo/6Od9v3wzLOysiMum0Wkmme/c61f565469373c5563e1943210bb53e9/1_VsDvaO4j8rq-BueKLV1XZQ.png?w=700&h=292&q=50&fm=webp&fit=scale 700w,//images.ctfassets.net/luzcv4xauheo/6Od9v3wzLOysiMum0Wkmme/c61f565469373c5563e1943210bb53e9/1_VsDvaO4j8rq-BueKLV1XZQ.png?w=1050&h=438&q=50&fm=webp&fit=scale 1050w,//images.ctfassets.net/luzcv4xauheo/6Od9v3wzLOysiMum0Wkmme/c61f565469373c5563e1943210bb53e9/1_VsDvaO4j8rq-BueKLV1XZQ.png?w=1600&h=667&q=50&fm=webp&fit=scale 1600w',
          srcWebp:
            '//images.ctfassets.net/luzcv4xauheo/6Od9v3wzLOysiMum0Wkmme/c61f565469373c5563e1943210bb53e9/1_VsDvaO4j8rq-BueKLV1XZQ.png?w=350&q=50&fm=webp&fit=scale',
          aspectRatio: 1.4,
          sizes: '(max-width: 350px) 100vw, 350px',
        },
      }}
    />
  ))
