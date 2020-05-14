import React from 'react'

import styles from './Divider.module.css'
import { getModuleClasses } from '../../util'
import { G_BOOL } from '../../assets/index'

class Divider extends React.Component {
  static displayName = 'NuDivider'

  static propTypes = {
    dark: G_BOOL,
    dense: G_BOOL,
    elevated: G_BOOL
  }

  getClasses() {
    const { dark, dense, elevated } = this.props
    return getModuleClasses(
      styles,
      `
        nu-divider
        ${dense ? 'nu-divider--dense' : ''}
        nu-divider--${dark ? 'dark' : 'light'}
        ${elevated ? 'nu-divider--elevated' : ''}
      `
    )
  }

  render() {
    return <hr style={{ ...this.props.style }} className={this.getClasses()} />
  }
}

export default Divider
