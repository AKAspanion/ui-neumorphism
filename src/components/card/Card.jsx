import React from 'react'

import styles from './Card.module.css'
import { getModuleClasses, passDownProp } from '../../util'
import {
  G_NUM,
  G_BOOL,
  G_STRING,
  DEFAULT_PROPS,
  DEFAULT_PROPS_TYPE
} from '../../assets/index'

class Card extends React.Component {
  static displayName = 'NuCard'

  static defaultProps = DEFAULT_PROPS

  static propTypes = {
    dark: G_BOOL,
    flat: G_BOOL,
    width: G_NUM,
    height: G_NUM,
    loading: G_BOOL,
    rounded: G_BOOL,
    disabled: G_BOOL,
    outlined: G_BOOL,
    elevation: G_STRING,
    ...DEFAULT_PROPS_TYPE
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
    const { style, width, height, className, children } = this.props
    const cardChildren = passDownProp(children, this.props, [
      'dark',
      'rounded',
      'disabled',
      'outlined'
    ])
    return (
      <div
        style={{ ...style, width: `${width}px`, height: `${height}px` }}
        className={`${this.getClass()} ${className}`}
      >
        {cardChildren}
      </div>
    )
  }
}

export default Card
