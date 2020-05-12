import React from 'react'
import PropTypes from 'prop-types'

import styles from './Button.module.css'
import { getModuleClasses } from '../../util'

class Button extends React.Component {
  static displayName = 'NuButton'

  static propTypes = {
    name: PropTypes.string,
    text: PropTypes.bool,
    dark: PropTypes.bool,
    active: PropTypes.bool,
    rounded: PropTypes.bool,
    outlined: PropTypes.bool,
    depressed: PropTypes.bool,
    mouseOver: PropTypes.func,
    mouseOut: PropTypes.func,
    onClick: PropTypes.func
  }

  getClasses(name) {
    const { dark, text, active, outlined, depressed, rounded, disabled } = this.props
    switch (name) {
      case 'container':
        return getModuleClasses(
          styles,
          `
            nu-button
            cursor-pointer
            ${text ? 'nu-button--text' : ''}
            ${active ? 'nu-button--active' : ''}
            nu-button--${dark ? 'dark' : 'light'}
            ${rounded ? 'nu-button--rounded' : ''}
            ${disabled ? 'nu-button--disabled' : ''}
            ${outlined ? 'nu-button--outlined' : ''}
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
    const { name, onClick, mouseOver, mouseOut } = this.props
    return (
      <div
        onClick={onClick}
        onMouseOut={mouseOut}
        onMouseOver={mouseOver}
        className={this.getClasses('container')}
      >
        <button className={this.getClasses('input')}>{name || 'button'}</button>
      </div>
    )
  }
}

export default Button
