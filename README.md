# ui-neumorphism

>  React component library designed on the "new skeuomorphism" UI/UX trend.

[![NPM](https://img.shields.io/npm/v/ui-neumorphism.svg)](https://www.npmjs.com/package/ui-neumorphism) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

Live demo and documentation at https://akaspanion.github.io/ui-neumorphism/

## Install

```bash
npm install --save ui-neumorphism
```

## Usage

```jsx
import React, { Component } from 'react'

import { Button } from 'ui-neumorphism'
import 'ui-neumorphism/dist/index.css'

class Example extends Component {
  render() {
    return <Button />
  }
}
```
## Theming

In neumorphism UI, theming is dead simple.

It is accomplished by using and modifying root css variables for colors.

To change the theme, you modify the root css variables directly or with the help of `overrideThemeVariables()` function, like this.
```javascript
import React, { Component } from 'react'

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
```
Here `--light-bg` and `--dark-bg` are css variables that hold specific values of color.

Using this power of CSS variables, you can change the app theme from anywhere in the entire application.

All the css variable definition is present in root tag of [index.css](/src/components/styles.css).

These variables are used to theme the library and its available for you to modify.

## License

MIT © [AKAspanion](https://github.com/AKAspanion)
