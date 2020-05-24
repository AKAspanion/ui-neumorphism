import React from 'react'

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { prism, okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism'

class CodeBlock extends React.Component {
  static displayName = 'NuCodeBlock'

  render() {
    const { dark, lang, children } = this.props
    return (
      <SyntaxHighlighter
        language={lang || 'javascript'}
        style={dark ? okaidia : prism}
      >
        {children}
      </SyntaxHighlighter>
    )
  }
}

export default CodeBlock
