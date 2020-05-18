import React from 'react'

import styles from './Card.module.css'
import { getModuleClasses, passDownProp } from '../../util'
import { G_STRING, G_BOOL, DEFAULT_PROPS } from '../../assets/index'

class Card extends React.Component {
  static displayName = 'NuCard'

  static propTypes = {
    dark: G_BOOL,
    flat: G_BOOL,
    rounded: G_BOOL,
    outlined: G_BOOL,
    elevation: G_STRING,
    ...DEFAULT_PROPS
  }

  getClass() {
    const { dark, flat, elevation, rounded, outlined } = this.props
    return getModuleClasses(
      styles,
      `
        nu-card
        elevation-${elevation || '1'}
        ${flat ? 'nu-card--flat' : ''}
        nu-card--${dark ? 'dark' : 'light'}
        ${rounded ? 'nu-card--rounded' : ''}
        ${outlined ? 'nu-card--outlined' : ''}
      `
    )
  }

  render() {
    const { style, className, children } = this.props
    const cardChildren = passDownProp(children, this.props, [
      'dark',
      'rounded',
      'outlined'
    ])
    return (
      <div style={style} className={`${this.getClass()} ${className}`}>
        {cardChildren}
      </div>
    )
  }
}

export default Card
