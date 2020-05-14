import React, { createElement } from 'react'

import styles from './Typography.module.css'
import { getModuleClasses } from '../../util'
import { TYPOGRAPHY_PROP_TYPES, G_STRING } from '../../assets/index'

class Typography extends React.Component {
  static displayName = 'NuTypography'

  mapping = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
    caption: 'p',
    overline: 'p',
    'subtitle-1': 'p',
    'subtitle-2': 'p',
    'body-1': 'p',
    'body-2': 'p'
  }

  static propTypes = {
    type: G_STRING,
    ...TYPOGRAPHY_PROP_TYPES
  }

  getTypographyType() {
    const { disabled, secondary } = this.props
    return disabled ? 'disabled' : secondary ? 'secondary' : 'primary'
  }

  getClass() {
    const { dark, type } = this.props
    return getModuleClasses(
      styles,
      `
        nu-typography
        nu-${type || 'body-1'}
        nu-typography--${this.getTypographyType()}
        nu-typography--${dark ? 'dark' : 'light'}
      `
    )
  }

  render() {
    return createElement(
      this.mapping[this.props.type || 'body-1'],
      { style: this.props.style, className: this.getClass() },
      this.props.children
    )
  }
}

export default Typography
