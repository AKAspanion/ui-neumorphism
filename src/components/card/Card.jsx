import React from 'react'

import { ProgressLinear } from '../../index'

import styles from './Card.module.css'
import { getModuleClasses, passDownProp, pickKeys } from '../../util'
import {
  G_NUM,
  G_BOOL,
  DEFAULT_PROPS,
  DEFAULT_PROPS_TYPE
} from '../../assets/index'

class Card extends React.Component {
  static displayName = 'NuCard'

  static defaultProps = DEFAULT_PROPS

  static propTypes = {
    flat: G_BOOL,
    width: G_NUM,
    height: G_NUM,
    inset: G_BOOL,
    loading: G_BOOL,
    minWidth: G_NUM,
    maxWidth: G_NUM,
    rounded: G_BOOL,
    minHeight: G_NUM,
    maxHeight: G_NUM,
    disabled: G_BOOL,
    outlined: G_BOOL,
    elevation: G_NUM,
    ...DEFAULT_PROPS_TYPE
  }

  getClass() {
    const { dark, flat, inset, elevation, rounded, outlined } = this.props
    const cardElevation = !isNaN(elevation) ? String(elevation) : null
    return getModuleClasses(
      styles,
      `
        nu-card
        ${flat ? 'nu-card--flat' : ''}
        elevation-${cardElevation || 1}
        ${inset ? 'nu-card--inset' : ''}
        nu-card--${dark ? 'dark' : 'light'}
        ${rounded ? 'nu-card--rounded' : ''}
        ${outlined ? 'nu-card--outlined' : ''}
      `
    )
  }

  render() {
    const sizeStyles = {}
    const { id, dark, style, loading, children, className } = this.props
    const cardChildren = passDownProp(children, this.props, [
      'dark',
      'rounded',
      'disabled',
      'outlined'
    ])
    const pickedStyles = pickKeys(this.props, [
      'width',
      'height',
      'minWidth',
      'maxWidth',
      'minHeight',
      'maxHeight'
    ])
    Object.keys(pickedStyles).map((key) => {
      sizeStyles[key] = `${pickedStyles[key]}px`
    })
    return (
      <div
        id={id}
        style={{ ...style, ...sizeStyles }}
        className={`${this.getClass()} ${className}`}
      >
        {loading ? (
          <ProgressLinear
            active
            fillHeight
            height={4}
            dark={dark}
            indeterminate
            color='var(--primary)'
          />
        ) : null}
        {cardChildren}
      </div>
    )
  }
}

export default Card
