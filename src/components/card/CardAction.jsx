import React from 'react'

import styles from './Card.module.css'
import { getModuleClasses, passDownProp } from '../../util'
import {
  G_BOOL,
  DEFAULT_PROPS,
  DEFAULT_PROPS_TYPE,
  CARD_CHILD_PASS_DOWN
} from '../../assets/index'

class CardAction extends React.Component {
  static displayName = 'NuCardAction'

  static defaultProps = DEFAULT_PROPS

  static propTypes = {
    rounded: G_BOOL,
    disabled: G_BOOL,
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
    const { style, className, children } = this.props
    const cardChildren = passDownProp(
      children,
      this.props,
      CARD_CHILD_PASS_DOWN
    )
    return (
      <div style={style} className={`${this.getClass()} ${className}`}>
        {cardChildren}
      </div>
    )
  }
}

export default CardAction
