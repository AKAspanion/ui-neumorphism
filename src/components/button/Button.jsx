import React from 'react'

import styles from './Button.module.css'
import { getModuleClasses, passDownProp } from '../../util'
import { SIZE_PROP, G_FUNC, G_BOOL } from '../../assets/index'

class Button extends React.Component {
  static displayName = 'NuButton'

  static defaultProps = {
    size: 'medium'
  }

  static propTypes = {
    fab: G_BOOL,
    text: G_BOOL,
    dark: G_BOOL,
    block: G_BOOL,
    stamp: G_BOOL, // TODO
    toggle: G_BOOL,
    active: G_BOOL,
    rounded: G_BOOL,
    outlined: G_BOOL,
    depressed: G_BOOL,
    mouseOver: G_FUNC,
    mouseOut: G_FUNC,
    onClick: G_FUNC,
    size: SIZE_PROP
  }

  getValidSize(size) {
    const sizes = ['small', 'medium', 'large']
    return sizes.find((s) => s === size) || 'medium'
  }

  getClasses(type) {
    const {
      fab,
      dark,
      size,
      text,
      block,
      toggle,
      active,
      rounded,
      disabled,
      outlined,
      depressed
    } = this.props
    const isRounded = fab || rounded
    switch (type) {
      case 'container':
        return getModuleClasses(
          styles,
          `
            nu-button
            cursor-pointer
            ${fab ? 'nu-button--fab' : ''}
            ${text ? 'nu-button--text' : ''}
            ${block ? 'nu-button--block' : ''}
            ${toggle ? 'nu-button--toggle' : ''}
            ${active ? 'nu-button--active' : ''}
            nu-button--${this.getValidSize(size)}
            nu-button--${dark ? 'dark' : 'light'}
            ${isRounded ? 'nu-button--rounded' : ''}
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
    const { fab, color, bgColor, disabled, outlined, children } = this.props
    const { onClick, mouseOver, mouseOut } = this.props
    const btnChildren = passDownProp(children, this.props, 'dark')
    return (
      <div
        onClick={onClick}
        onMouseOut={mouseOut}
        onMouseOver={mouseOver}
        className={this.getClasses('container')}
        style={{
          color: disabled ? null : color,
          backgroundColor: disabled ? null : bgColor,
          border: disabled ? null : outlined ? `1px solid ${color}` : null
        }}
      >
        <button className={this.getClasses('input')}>
          {fab ? btnChildren : btnChildren || 'button'}
        </button>
      </div>
    )
  }
}

export default Button
