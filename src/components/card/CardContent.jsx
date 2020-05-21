import React from 'react'

import styles from './Card.module.css'
import { getModuleClasses, passDownProp } from '../../util'
import { G_BOOL, DEFAULT_PROPS, DEFAULT_PROPS_TYPE } from '../../assets/index'

class CardContent extends React.Component {
  static displayName = 'NuCardContent'

  static defaultProps = DEFAULT_PROPS

  static propTypes = {
    rounded: G_BOOL,
    ...DEFAULT_PROPS_TYPE
  }

  getClass() {
    const { dark, rounded } = this.props
    return getModuleClasses(
      styles,
      `
        nu-card-content
        nu-card-content--${dark ? 'dark' : 'light'}
        ${rounded ? 'nu-card-content--rounded' : ''}
      `
    )
  }

  render() {
    const { style, className } = this.props
    const cardChildren = passDownProp(this.props.children, this.props, [
      'dark',
      'rounded'
    ])
    return (
      <div style={style} className={`${this.getClass()} ${className}`}>
        {cardChildren}
      </div>
    )
  }
}

export default CardContent
