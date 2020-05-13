# ui-neumorphism

>  React components library for neumorphism UI/UX trend.

[![NPM](https://img.shields.io/npm/v/ui-neumorphism.svg)](https://www.npmjs.com/package/ui-neumorphism) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

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
## Getting Started

### Setting background color
In neumorphism UI, background color of all components and pages should match.

You need to set the background color of all your pages to match the component library's color.

One way to do this is to put the following inside your `html` or `body` css definition.
```css
/* For light theme */
background: var(--light-bg);

/* or */

/* For dark theme */
background: var(--dark-bg);
```
Here `--light-bg` and `--dark-bg` are css variables that hold the value of light and dark background color respectively.

A list of css variable definitions is present in root tag of `ui-neumorphism/dist/index.css`.

These variables are used to theme the library and its available to you.

## License

MIT © [AKAspanion](https://github.com/AKAspanion)
