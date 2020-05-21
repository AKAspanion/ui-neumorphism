import React from 'react'

import styles from './Card.module.css'
import { getModuleClasses, passDownProp } from '../../util'
import { G_BOOL, DEFAULT_PROPS, DEFAULT_PROPS_TYPE } from '../../assets/index'

class CardAction extends React.Component {
  static displayName = 'NuCardAction'

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
        nu-card-action
        nu-card-action--${dark ? 'dark' : 'light'}
        ${rounded ? 'nu-card-action--rounded' : ''}
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

export default CardAction
