import React, { createRef } from 'react'

import styles from './Divider.module.css'
import { getModuleClasses, getDOMNode } from '../../util'
import { G_BOOL, DEFAULT_PROPS, DEFAULT_PROPS_TYPE } from '../../assets/index'

class Divider extends React.Component {
  static displayName = 'NuDivider'

  domRef = createRef()

  get domNode() {
    return getDOMNode(this.domRef.current)
  }

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
    return (
      <hr
        ref={this.domRef}
        style={style}
        className={`${this.getClasses()} ${className}`}
      />
    )
  }
}

export default Divider
