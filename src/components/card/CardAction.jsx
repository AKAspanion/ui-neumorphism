import React from 'react'

import styles from './Card.module.css'
import { getModuleClasses, passDownProp } from '../../util'
import { G_BOOL } from '../../assets/index'

class CardAction extends React.Component {
  static displayName = 'NuCardAction'

  static propTypes = {
    dark: G_BOOL,
    rounded: G_BOOL
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
    const cardChildren = passDownProp(this.props.children, this.props, [
      'dark',
      'rounded'
    ])
    return (
      <div className={this.getClass()}>{cardChildren || 'card-action'}</div>
    )
  }
}

export default CardAction
