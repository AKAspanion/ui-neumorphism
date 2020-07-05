# [ui-neumorphism](https://akaspanion.github.io/ui-neumorphism/)

[![NPM](https://img.shields.io/npm/v/ui-neumorphism.svg)](https://www.npmjs.com/package/ui-neumorphism) [![Build Status](https://travis-ci.org/AKAspanion/ui-neumorphism.svg?branch=master)](https://travis-ci.org/AKAspanion/ui-neumorphism) [![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/AKAspanion/ui-neumorphism/blob/master/LICENSE) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

> React component library designed on the "new skeuomorphism" or "neumorphism" UI/UX trend.

All the components are designed according to the neumorphic design trend.

Library features more than 50 individual components.

## Demo

![Fitness App by Jray](https://firebasestorage.googleapis.com/v0/b/spanion-portfolio.appspot.com/o/fitness--theme.jpg?alt=media&token=df27927a-bfcf-4b54-85e7-bde8a72d3947)

View examples [here](https://akaspanion.github.io/ui-neumorphism/examples).

## Documentation

Each component, and its API is well documented, with various examples along with their code and preview.

Check out the documentation [here](https://akaspanion.github.io/ui-neumorphism/).

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
