import React from 'react'

import styles from './Button.module.css'

import { getModuleClasses, passDownProp, pickKeys } from '../../util'
import {
  BUTTON_PROP_TYPES,
  DEFAULT_PROPS,
  MOUSE_EVENTS,
  SIZES
} from '../../assets/index'

class Button extends React.Component {
  static displayName = 'NuButton'

  static defaultProps = {
    size: 'medium',
    ...DEFAULT_PROPS
  }

  static propTypes = BUTTON_PROP_TYPES

  getValidSize(size) {
    return SIZES.find((s) => s === size) || 'medium'
  }

  getClasses(classType) {
    const {
      type,
      dark,
      size,
      text,
      block,
      active,
      rounded,
      disabled,
      bordered,
      outlined,
      depressed
    } = this.props
    switch (classType) {
      case 'container':
        return getModuleClasses(
          styles,
          `
            nu-button
            cursor-pointer
            nu-button--${type}
            ${text ? 'nu-button--text' : ''}
            ${block ? 'nu-button--block' : ''}
            ${active ? 'nu-button--active' : ''}
            nu-button--${this.getValidSize(size)}
            nu-button--${dark ? 'dark' : 'light'}
            ${rounded ? 'nu-button--rounded' : ''}
            ${outlined ? 'nu-button--outlined' : ''}
            ${bordered ? 'nu-button--bordered' : ''}
            ${disabled ? 'nu-button--disabled' : ''}
            ${depressed ? 'nu-button--depressed' : ''}
          `
        )
      case 'input':
        return getModuleClasses(styles, 'nu-button-inner')
      default:
        break
    }
  }

  render() {
    const {
      id,
      type,
      style,
      color,
      bgColor,
      disabled,
      outlined,
      children,
      className
    } = this.props
    const btnChildren = passDownProp(children, this.props, 'dark')
    return (
      <div
        id={id}
        {...pickKeys(this.props, MOUSE_EVENTS)}
        className={`${this.getClasses('container')} ${className}`}
        style={{
          ...style,
          color: disabled ? null : color,
          backgroundColor: disabled ? null : bgColor,
          border: disabled ? null : outlined ? `1px solid ${color}` : null
        }}
      >
        <button className={this.getClasses('input')}>
          {type ? btnChildren : btnChildren || 'button'}
        </button>
      </div>
    )
  }
}

export default Button
