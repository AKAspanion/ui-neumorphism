import React from 'react'

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { prism, okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism'

import Icon from '@mdi/react'
import { mdiChevronUp, mdiChevronDown } from '@mdi/js'

import { IconButton, Subtitle2, Card } from 'ui-neumorphism'
class CodeBlock extends React.Component {
  static displayName = 'NuCodeBlock'

  state = {
    open: this.props.noCollapse ? true : !!this.props.open
  }

  render() {
    const { open } = this.state
    const { dark, noCollapse, title, lang, children } = this.props
    return (
      <Card flat dark={dark}>
        {noCollapse ? null : (
          <Card
            flat
            className='pl-4 pr-1 py-1 d-flex align-center justify-space-between'
          >
            <Subtitle2>{title || 'Source code'}</Subtitle2>
            <IconButton onClick={() => this.setState({ open: !open })}>
              <Icon path={open ? mdiChevronUp : mdiChevronDown} size={1}></Icon>
            </IconButton>
          </Card>
        )}
        <div className={`code-block ${!open ? 'code-block-closed' : ''}`}>
          <SyntaxHighlighter
            language={lang || 'javascript'}
            style={dark ? okaidia : prism}
          >
            {children}
          </SyntaxHighlighter>
        </div>
      </Card>
    )
  }
}

export default CodeBlock
