import React from 'react'

import styles from './Card.module.css'
import { getModuleClasses, passDownProp } from '../../util'
import { G_STRING, G_BOOL } from '../../assets/index'

class Card extends React.Component {
  static displayName = 'NuCard'

  static propTypes = {
    dark: G_BOOL,
    rounded: G_BOOL,
    outlined: G_BOOL,
    elevation: G_STRING
  }

  getClass() {
    const { dark, elevation, rounded, outlined } = this.props
    return getModuleClasses(
      styles,
      `
        nu-card
        elevation-${elevation || 1}
        nu-card--${dark ? 'dark' : 'light'}
        ${rounded ? 'nu-card--rounded' : ''}
        ${outlined ? 'nu-card--outlined' : ''}
      `
    )
  }

  render() {
    const cardChildren = passDownProp(this.props.children, this.props, [
      'dark',
      'rounded',
      'outlined'
    ])
    return <div className={this.getClass()}>{cardChildren || 'card'}</div>
  }
}

export default Card
