import React from 'react'

import { ProgressLinear } from '../../index'

import styles from './Card.module.css'
import { getModuleClasses, passDownProp, pickKeys } from '../../util'
import { DEFAULT_PROPS, CARD_PROP_TYPES } from '../../assets/index'

class Card extends React.Component {
  static displayName = 'NuCard'

  static defaultProps = DEFAULT_PROPS

  static propTypes = CARD_PROP_TYPES

  getClass() {
    const {
      dark,
      flat,
      inset,
      rounded,
      outlined,
      bordered,
      elevation
    } = this.props
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
        ${bordered ? 'nu-card--bordered' : ''}
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
      'outlined',
      'bordered'
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
