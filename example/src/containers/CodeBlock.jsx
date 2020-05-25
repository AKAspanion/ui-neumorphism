import React from 'react'

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { prism, okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism'

import Icon from '@mdi/react'
import { mdiCodeTags, mdiGithub, mdiInvertColors } from '@mdi/js'

import {
  IconButton,
  Subtitle2,
  Card,
  Spacer,
  ToggleButton
} from 'ui-neumorphism'
class CodeBlock extends React.Component {
  static displayName = 'NuCodeBlock'

  state = {
    open: this.props.noCollapse ? true : !!this.props.open
  }

  render() {
    const { open } = this.state
    const {
      url,
      dark,
      noCollapse,
      title,
      lang,
      onThemeChange,
      children
    } = this.props
    return (
      <Card flat dark={dark}>
        {noCollapse ? null : (
          <Card flat className='pl-4 pr-1 py-1 d-flex align-center'>
            <Subtitle2>{title}</Subtitle2>
            <Spacer />
            {url ? (
              <IconButton
                className='ml-1'
                onClick={() => window.open(url, '_blank')}
              >
                <Icon path={mdiGithub} size={1} />
              </IconButton>
            ) : null}
            <ToggleButton className='ml-1' onChange={onThemeChange}>
              <Icon path={mdiInvertColors} size={1} />
            </ToggleButton>
            <IconButton
              className='ml-1'
              onClick={() => this.setState({ open: !open })}
            >
              <Icon path={mdiCodeTags} size={1} />
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
