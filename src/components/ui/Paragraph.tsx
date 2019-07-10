import * as React from 'react'
import styled from '@emotion/styled'

import { typeScale } from '../../styles/variables'

const Root = styled('p')`
  margin-top: 20px;
  font-size: ${typeScale.p.fontSize}px;
  line-height: ${typeScale.p.lineHeight}px;

  &:first-child {
    margin-top: 0;
  }
`

interface ParagraphProps {
  className?: string
  style?: React.CSSProperties
}

function Paragraph({ children, className, style }: React.PropsWithChildren<ParagraphProps>) {
  return (
    <Root className={className} style={style}>
      {children}
    </Root>
  )
}

Paragraph.defaultProps = {
  className: undefined,
  style: undefined
}

export default Paragraph
