import React from 'react'

import styles from './Card.module.css'
import { getModuleClasses, passDownProp } from '../../util'
import { G_BOOL } from '../../assets/index'

class CardContent extends React.Component {
  static displayName = 'NuCardContent'

  static propTypes = {
    dark: G_BOOL,
    rounded: G_BOOL
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
    const cardChildren = passDownProp(this.props.children, this.props, [
      'dark',
      'rounded'
    ])
    return (
      <div className={this.getClass()}>{cardChildren || 'card-content'}</div>
    )
  }
}

export default CardContent
