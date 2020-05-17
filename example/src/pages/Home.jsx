import React from 'react'

import { Card, H1, Subtitle1, Divider, H4, H6, Body1 } from 'ui-neumorphism'

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism'

import FitnessApp from '../examples/FitnessApp.jsx'

const importCode = `import React, { Component } from 'react'

import { Button } from 'ui-neumorphism'
import 'ui-neumorphism/dist/index.css'

class Example extends Component {
  render() {
    return <Button />
  }
}
`
const colorCode = `/* For light theme */
background: var(--light-bg);

/* or */

/* For dark theme */
background: var(--dark-bg);
`

class Home extends React.Component {
  render() {
    const { dark } = this.props
    return (
      <Card flat dark={dark}>
        <H1 style={{ marginLeft: '-6px' }}>UI-Neumorphism</H1>
        <Subtitle1>
          <code>ui-neumorphism</code> is a react component library designed on
          the "new skeuomorphism" UI/UX trend.
        </Subtitle1>
        <br />
        <br />
        <br />
        <H4>Installation</H4>
        <Divider dense style={{ margin: '4px 0px 16px 0px' }} />
        <SyntaxHighlighter language={`bash`} style={okaidia}>
          {`npm install --save ui-neumorphism`}
        </SyntaxHighlighter>
        <br />
        <br />
        <H4>Usage</H4>
        <Divider dense style={{ margin: '4px 0px 16px 0px' }} />
        <Body1>
          Components in this package can be imported as individual React
          component.
        </Body1>
        <SyntaxHighlighter language={`javascript`} style={okaidia}>
          {`import { Card, Button } from 'neumorphic-ui';`}
        </SyntaxHighlighter>
        <br />
        <Body1>Quick usage example to get you started:</Body1>
        <SyntaxHighlighter language={`javascript`} style={okaidia}>
          {importCode}
        </SyntaxHighlighter>
        <br />
        <br />
        <H4>Development</H4>
        <Divider dense style={{ margin: '4px 0px 16px 0px' }} />
        <H6 style={{ marginBottom: '12px' }}>Setting background color</H6>
        <Body1 style={{ marginBottom: '8px' }}>
          In neumorphism UI, background color of all components and pages should
          match.
        </Body1>
        <Body1 style={{ marginBottom: '8px' }}>
          You need to set the background color of all your pages to match the
          component library's color.
        </Body1>
        <Body1 style={{ marginBottom: '12px' }}>
          One way to do this is to put the following inside your{' '}
          <code>html</code> or <code>body</code>&nbsp;css definition.
        </Body1>
        <SyntaxHighlighter language={`css`} style={okaidia}>
          {colorCode}
        </SyntaxHighlighter>
        <Body1 style={{ marginBottom: '8px' }}>
          Here <code>--light-bg</code> and <code>--dark-bg</code> are css
          variables that hold the value of light and dark background color
          respectively.
        </Body1>
        <Body1 style={{ marginBottom: '12px' }}>
          These variables are used to theme the library and its available to
          you.
        </Body1>
        <br />
        <br />
        <H4>Examples</H4>
        <Divider dense style={{ margin: '4px 0px 8px 0px' }} />
        <Body1 style={{ marginBottom: '12px' }}>
          Example UIs created using this library.
        </Body1>
        <H6 style={{ marginBottom: '12px' }}>Fitness App</H6>
        <div
          style={{ justifyContent: 'center', padding: '32px', display: 'flex' }}
        >
          <FitnessApp dark={dark} />
        </div>
        <br />
        <br />
        <H4>Author</H4>
        <Divider dense style={{ margin: '4px 0px 16px 0px' }} />
        <Body1>Ankit Kumar Pandit</Body1>
        <br />
      </Card>
    )
  }
}

export default Home
