import React from 'react'

import styles from './Typography.module.css'
import { getModuleClasses } from '../../util'
import { TYPOGRAPHY_PROP_TYPES } from '../../assets/index'

class Typography extends React.Component {
  static displayName = 'NuTypography'

  static propTypes = TYPOGRAPHY_PROP_TYPES

  getTypographyType() {
    const { disabled, secondary } = this.props
    return disabled ? 'disabled' : secondary ? 'secondary' : 'primary'
  }

  getClass() {
    const { dark, type } = this.props
    return getModuleClasses(
      styles,
      `
        nu-${type}
        nu-typography
        nu-typography--${this.getTypographyType()}
        nu-typography--${dark ? 'dark' : 'light'}
      `
    )
  }

  render() {
    return <div className={this.getClass()}>{this.props.children}</div>
  }
}

export default Typography
