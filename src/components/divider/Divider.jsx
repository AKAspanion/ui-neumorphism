import React from 'react'

import styles from './Divider.module.css'
import { getModuleClasses } from '../../util'
import { G_BOOL, DEFAULT_PROPS, DEFAULT_PROPS_TYPE } from '../../assets/index'

class Divider extends React.Component {
  static displayName = 'NuDivider'

  static defaultProps = DEFAULT_PROPS

  static propTypes = {
    dense: G_BOOL,
    elevated: G_BOOL,
    ...DEFAULT_PROPS_TYPE
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
    const { style, className } = this.props
    return <hr style={style} className={`${this.getClasses()} ${className}`} />
  }
}

export default Divider
