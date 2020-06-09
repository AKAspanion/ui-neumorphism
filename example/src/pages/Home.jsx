import React from 'react'
import { withRouter } from 'react-router-dom'

import {
  H4,
  H6,
  Card,
  Body1,
  Button,
  Divider,
  Subtitle1,
  ToggleButton,
  ToggleButtonGroup,
  overrideThemeVariables
} from 'ui-neumorphism'

import CodeBlock from '../containers/CodeBlock.jsx'

import { FitnessApp } from '../examples/'

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
    '--light-bg-light-shadow': '#ffdcde',
    '--primary': '#ff1744',
    '--primary-dark': '#d50000',
    '--primary-light': '#ff8a80'
  },
  'light-2': {
    '--light-bg': '#B9D7D2',
    '--light-bg-dark-shadow': '#94aca8',
    '--light-bg-light-shadow': '#defffc',
    '--primary': '#009688',
    '--primary-dark': '#00695c',
    '--primary-light': '#80cbc4'
  },
  'light-3': {
    '--light-bg': '#D6DDFB',
    '--light-bg-dark-shadow': '#abb1c9',
    '--light-bg-light-shadow': '#ffffff',
    '--primary': '#9c27b0',
    '--primary-dark': '#6a1b9a',
    '--primary-light': '#ce93d8'
  },
  'light-4': {
    '--light-bg': '#cccccc',
    '--light-bg-dark-shadow': '#a3a3a3',
    '--light-bg-light-shadow': '#f5f5f5',
    '--primary': '#424242',
    '--primary-dark': '#616161',
    '--primary-light': '#9e9e9e'
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
    '--dark-bg-light-shadow': '#61667d'
  },
  default: {
    '--light-bg': '#E4EBF5',
    '--light-bg-dark-shadow': '#bec8e4',
    '--light-bg-light-shadow': '#ffffff',
    '--dark-bg': '#444444',
    '--dark-bg-dark-shadow': '#363636',
    '--dark-bg-light-shadow': '#525252',
    '--primary': '#2979ff',
    '--primary-dark': '#2962ff',
    '--primary-light': '#82b1ff'
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

  handleExampleClick(e) {
    this.props.history.push('/examples')
  }

  render() {
    const { dark } = this.props
    return (
      <Card flat dark={dark} className='py-2'>
        <Subtitle1>
          <code>ui-neumorphism</code> is a react component library designed on
          the "new skeuomorphism" UI/UX trend.
        </Subtitle1>
        <br />
        <FitnessApp dark={dark} />
        <Card flat className='text-center my-12'>
          <Button
            outlined
            color='var(--primary)'
            onClick={(e) => this.handleExampleClick(e)}
          >
            Show more
          </Button>
        </Card>
        <H4 className='mt-12'>Installation</H4>
        <Divider dense className='mt-1 mb-3' />
        <CodeBlock noCollapse lang='bash'>
          {`npm install --save ui-neumorphism`}
        </CodeBlock>
        <H4 className='mt-12'>Usage</H4>
        <Divider dense className='mt-1 mb-3' />
        <Body1 className='mb-2'>
          Components in this package can be imported as individual React
          component.
        </Body1>
        <CodeBlock noCollapse>
          {`import { Card, Button } from 'ui-neumorphism'`}
        </CodeBlock>
        <Body1 className='mb-2 mt-4'>
          Quick usage example to get you started:
        </Body1>
        <CodeBlock noCollapse>{importCode}</CodeBlock>
        <H4 className='mt-12'>Theming</H4>
        <Divider dense className='mt-1 mb-3' />
        <Body1 className='mb-2'>
          In neumorphism UI, theming is dead simple.
        </Body1>
        <Body1 className='mb-4'>
          It is accomplished by using and modifying root css variables for
          colors.
        </Body1>
        <Body1 className='mb-4'>
          To change the theme, you modify the root css variables directly or
          with the help of <code>overrideThemeVariables()</code>&nbsp;function,
          like this:
        </Body1>
        <CodeBlock noCollapse>{themeUtilCode}</CodeBlock>
        <Body1 className='mt-4'>
          Using the power of CSS variables, you can change the theme anywhere in
          the entire application.
        </Body1>
        <H6 className='mb-1 mt-10'>Live theme example</H6>
        <Body1 className='mb-1'>
          Toggle below buttons to see change in theme
        </Body1>
        <ToggleButtonGroup
          style={{ margin: '8px' }}
          onChange={(e) => this.handleThemeChange(e)}
        >
          {[1, 2, 3, 4].map((i) => {
            return (
              <ToggleButton
                key={i}
                text={false}
                className='mt-3 px-3 mr-6'
                value={`${dark ? 'dark' : 'light'}-${i}`}
              >
                {`${dark ? 'Dark' : 'Light'} ${i}`}
              </ToggleButton>
            )
          })}
        </ToggleButtonGroup>
        <H4 className='mt-12'>Author</H4>
        <Divider dense className='mt-1 mb-3' />
        <Body1>Ankit Kumar Pandit</Body1>
        <br />
      </Card>
    )
  }
}

export default withRouter(Home)
