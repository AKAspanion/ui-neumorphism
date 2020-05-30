import React from 'react'

import { Card } from 'ui-neumorphism'
import CodeBlock from '../containers/CodeBlock.jsx'

class DocCard extends React.Component {
  static displayName = 'NuDocCard'

  state = {
    darkTheme: this.props.dark
  }

  handleTheme(e) {
    this.setState({ darkTheme: !this.state.darkTheme })
  }

  render() {
    const {
      url,
      code,
      dark,
      style,
      title,
      content,
      subtitle,
      className
    } = this.props
    const { darkTheme } = this.state
    const localDark = darkTheme === undefined ? false : true
    return (
      <Card flat dark={dark} style={style} className={className}>
        {title}
        {subtitle}
        <Card dark={localDark ? darkTheme : dark} outlined className='mt-4'>
          <Card flat outlined={false} className='d-flex justify-center py-12'>
            {content}
          </Card>
          <CodeBlock
            url={url}
            lang='html'
            onThemeChange={this.handleTheme.bind(this)}
          >
            {code
              ? code[0](localDark ? darkTheme : code[1], ...(code[2] || []))
              : null}
          </CodeBlock>
        </Card>
      </Card>
    )
  }
}

export default DocCard
