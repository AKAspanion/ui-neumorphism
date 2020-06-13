import React from 'react'

import styles from './Button.module.css'

import { getModuleClasses, passDownProp, pickKeys } from '../../util'
import { BUTTON_PROP_TYPES, DEFAULT_PROPS } from '../../assets/index'

class Button extends React.Component {
  static displayName = 'NuButton'

  static defaultProps = {
    size: 'medium',
    ...DEFAULT_PROPS
  }

  static propTypes = BUTTON_PROP_TYPES

  getValidSize(size) {
    const sizes = ['small', 'medium', 'large']
    return sizes.find((s) => s === size) || 'medium'
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
        {...pickKeys(this.props, [
          'onClick',
          'onMouseUp',
          'onMouseOut',
          'onMouseMove',
          'onMouseDown',
          'onMouseOver',
          'onMouseEnter',
          'onMouseLeave'
        ])}
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
