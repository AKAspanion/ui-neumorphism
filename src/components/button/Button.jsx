import React from 'react'

import styles from './Button.module.css'
import { getModuleClasses } from '../../util'
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
    active: G_BOOL,
    rounded: G_BOOL,
    outlined: G_BOOL,
    depressed: G_BOOL,
    mouseOver: G_FUNC,
    mouseOut: G_FUNC,
    onClick: G_FUNC,
    size: SIZE_PROP
  }

  getClasses(type) {
    const { fab, rounded } = this.props
    const isRounded = fab || rounded
    switch (type) {
      case 'container':
        return getModuleClasses(
          styles,
          `
            nu-button
            cursor-pointer
            nu-button--${this.props.size}
            ${isRounded ? 'nu-button--rounded' : ''}
            ${this.props.fab ? 'nu-button--fab' : ''}
            ${this.props.text ? 'nu-button--text' : ''}
            ${this.props.block ? 'nu-button--block' : ''}
            ${this.props.active ? 'nu-button--active' : ''}
            nu-button--${this.props.dark ? 'dark' : 'light'}
            ${this.props.disabled ? 'nu-button--disabled' : ''}
            ${this.props.outlined ? 'nu-button--outlined' : ''}
            ${this.props.depressed ? 'nu-button--depressed' : ''}
          `
        )
      case 'input':
        return getModuleClasses(styles, 'nu-button-inner')
      default:
        break
    }
  }

  render() {
    const { fab, color, bgColor, disabled, children } = this.props
    const { onClick, mouseOver, mouseOut } = this.props
    return (
      <div
        onClick={onClick}
        onMouseOut={mouseOut}
        onMouseOver={mouseOver}
        className={this.getClasses('container')}
        style={{ backgroundColor: bgColor, color: disabled ? null : color }}
      >
        <button className={this.getClasses('input')}>
          {fab ? children : children || 'button'}
        </button>
      </div>
    )
  }
}

export default Button
