import React from 'react'

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism'

class CodeBlock extends React.Component {
  render() {
    const { lang, children } = this.props
    return (
      <SyntaxHighlighter language={lang || 'javascript'} style={okaidia}>
        {children}
      </SyntaxHighlighter>
    )
  }
}

export default CodeBlock
