import React from 'react'

import {
  H4,
  H6,
  Card,
  Body1,
  Divider,
  Subtitle1,
  ToggleButton,
  ToggleButtonGroup,
  overrideThemeVariables
} from 'ui-neumorphism'

import CodeBlock from '../containers/CodeBlock.jsx'

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
const themeUtilCode = `import React, { Component } from 'react'

import { overrideThemeVariables } from 'ui-neumorphism'
import 'ui-neumorphism/dist/index.css'

class App extends Component {
  componentDidMount() {
    // takes an object of css variable key-value pairs
    overrideThemeVariables({
      '--light-bg': '#E9B7B9',
      '--light-bg-dark-shadow': '#ba9294',
      '--light-bg-light-shadow': '#ffdcde',
      '--dark-bg': '#292E35',
      '--dark-bg-dark-shadow': '#21252a',
      '--dark-bg-light-shadow': '#313740',
      '--primary': '#8672FB',
      '--primary-dark': '#4526f9',
      '--primary-light': '#c7befd'
    })
  }

  ...
}
`

const themes = {
  'light-1': {
    '--light-bg': '#E9B7B9',
    '--light-bg-dark-shadow': '#ba9294',
    '--light-bg-light-shadow': '#ffdcde'
  },
  'light-2': {
    '--light-bg': '#B9D7D2',
    '--light-bg-dark-shadow': '#94aca8',
    '--light-bg-light-shadow': '#defffc'
  },
  'light-3': {
    '--light-bg': '#D6DDFB',
    '--light-bg-dark-shadow': '#abb1c9',
    '--light-bg-light-shadow': '#ffffff',
    '--primary': '#8672FB',
    '--primary-dark': '#4526f9',
    '--primary-light': '#c7befd'
  },
  'light-4': {
    '--light-bg': '#cccccc',
    '--light-bg-dark-shadow': '#a3a3a3',
    '--light-bg-light-shadow': '#f5f5f5'
  },
  'dark-1': {
    '--dark-bg': '#292E35',
    '--dark-bg-dark-shadow': '#21252a',
    '--dark-bg-light-shadow': '#313740'
  },
  'dark-2': {
    '--dark-bg': '#3E3D42',
    '--dark-bg-dark-shadow': '#323135',
    '--dark-bg-light-shadow': '#4a494f'
  },
  'dark-3': {
    '--dark-bg': '#243441',
    '--dark-bg-dark-shadow': '#1d2a34',
    '--dark-bg-light-shadow': '#2b3e4e'
  },
  'dark-4': {
    '--dark-bg': '#515568',
    '--dark-bg-dark-shadow': '#414453',
    '--dark-bg-light-shadow': '#61667d',
    '--primary': '#0087FF',
    '--primary-dark': '#005db1',
    '--primary-light': '#4eacff'
  },
  default: {
    '--light-bg': '#E4EBF5',
    '--light-bg-dark-shadow': '#bec8e4',
    '--light-bg-light-shadow': '#ffffff',
    '--dark-bg': '#444444',
    '--dark-bg-dark-shadow': '#363636',
    '--dark-bg-light-shadow': '#525252',
    '--primary': '#f71b94',
    '--primary-dark': '#aa0660',
    '--primary-light': '#fa7ac0'
  }
}

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      theme: 'default'
    }
  }

  handleThemeChange(e) {
    const theme = e.active || 'default'
    this.setState({ theme })
    overrideThemeVariables(themes[theme])
  }

  render() {
    const { dark } = this.props
    return (
      <Card flat dark={dark} style={{ padding: '8px 0px' }}>
        <Subtitle1>
          <code>ui-neumorphism</code> is a react component library designed on
          the "new skeuomorphism" UI/UX trend.
        </Subtitle1>
        <br />
        <FitnessApp dark={dark} />
        <br />
        <br />
        <H4>Installation</H4>
        <Divider dense style={{ margin: '4px 0px 16px 0px' }} />
        <CodeBlock lang={`bash`}>
          {`npm install --save ui-neumorphism`}
        </CodeBlock>
        <br />
        <br />
        <H4>Usage</H4>
        <Divider dense style={{ margin: '4px 0px 16px 0px' }} />
        <Body1>
          Components in this package can be imported as individual React
          component.
        </Body1>
        <CodeBlock>{`import { Card, Button } from 'ui-neumorphism'`}</CodeBlock>
        <br />
        <Body1>Quick usage example to get you started:</Body1>
        <CodeBlock>{importCode}</CodeBlock>
        <br />
        <br />
        <H4>Theming</H4>
        <Divider dense style={{ margin: '4px 0px 16px 0px' }} />
        <Body1 style={{ marginBottom: '8px' }}>
          In neumorphism UI, theming is dead simple.
        </Body1>
        <Body1 style={{ marginBottom: '16px' }}>
          It is accomplished by using and modifying root css variables for
          colors.
        </Body1>
        <Body1 style={{ marginBottom: '16px' }}>
          To change the theme, you modify the root css variables directly or
          with the help of <code>overrideThemeVariables()</code>
          function, like this:
        </Body1>
        <CodeBlock>{themeUtilCode}</CodeBlock>
        <br />
        <Body1>
          Using the power of CSS variables, you can change the theme anywhere in
          the entire application.
        </Body1>
        <br />
        <br />
        <H6 style={{ marginBottom: '4px' }}>Live theme example</H6>
        <Body1 style={{ marginBottom: '4px' }}>
          Toggle below buttons to see change in theme
        </Body1>
        <ToggleButtonGroup onChange={(e) => this.handleThemeChange(e)}>
          {[1, 2, 3, 4].map((i) => {
            return (
              <ToggleButton
                key={i}
                text={false}
                value={`${dark ? 'dark' : 'light'}-${i}`}
                style={{
                  marginTop: '12px',
                  padding: '0px 12px',
                  marginRight: '24px'
                }}
              >
                {`${dark ? 'Dark' : 'Light'} Theme ${i}`}
              </ToggleButton>
            )
          })}
        </ToggleButtonGroup>
        <br />
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
