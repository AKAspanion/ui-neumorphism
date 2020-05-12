import React from 'react'
import PropTypes from 'prop-types'

import styles from './Button.module.css'
import { getModuleClasses } from '../../util'

class Button extends React.Component {
  static displayName = 'NuButton'

  static defaultProps = {
    size: 'medium'
  }

  static propTypes = {
    text: PropTypes.bool,
    dark: PropTypes.bool,
    block: PropTypes.bool,
    active: PropTypes.bool,
    rounded: PropTypes.bool,
    outlined: PropTypes.bool,
    depressed: PropTypes.bool,
    mouseOver: PropTypes.func,
    mouseOut: PropTypes.func,
    onClick: PropTypes.func,
    size: PropTypes.oneOf(['small', 'medium', 'large'])
  }

  getClasses(type) {
    switch (type) {
      case 'container':
        return getModuleClasses(
          styles,
          `
            nu-button
            cursor-pointer
            nu-button--${this.props.size}
            ${this.props.text ? 'nu-button--text' : ''}
            ${this.props.block ? 'nu-button--block' : ''}
            ${this.props.active ? 'nu-button--active' : ''}
            nu-button--${this.props.dark ? 'dark' : 'light'}
            ${this.props.rounded ? 'nu-button--rounded' : ''}
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
    const { color, bgColor, disabled, children } = this.props
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
          {children || 'button'}
        </button>
      </div>
    )
  }
}

export default Button
