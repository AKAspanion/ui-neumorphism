import React from 'react'
import PropTypes from 'prop-types'

import styles from './Button.module.css'
import { getModuleClasses } from '../../util'

class Button extends React.Component {
  static displayName = 'NuButton'

  static propTypes = {
    text: PropTypes.string,
    dark: PropTypes.bool,
    active: PropTypes.bool,
    width: PropTypes.number,
    height: PropTypes.number,
    bordered: PropTypes.bool,
    mouseOver: PropTypes.func,
    mouseOut: PropTypes.func,
    onClick: PropTypes.func
  }

  getClasses(name) {
    const { dark, active, bordered, hoverable } = this.props
    switch (name) {
      case 'container':
        return getModuleClasses(
          styles,
          `
            nu-button
            abc
            cursor-pointer
            nu-button--${hoverable ? '' : 'un'}hoverable
            nu-button--${bordered ? '' : 'un'}bordered
            nu-button--${dark ? 'dark' : 'light'}
            ${active ? 'nu-button--active' : ''}
          `
        )

      case 'input':
        return getModuleClasses(
          styles,
          `
            nu-button-inner
            ${bordered ? 'nu-button-inner--bordered' : ''}
            nu-button--${dark ? 'dark' : 'light'}`
        )
      default:
        break
    }
  }

  render() {
    const { text, width, height, onClick, mouseOver, mouseOut } = this.props
    return (
      <div
        onClick={onClick}
        onMouseOut={mouseOut}
        onMouseOver={mouseOver}
        style={{
          width: `${width || 150}px`,
          height: `${height && height >= 32 ? height : 48}px`
        }}
        className={this.getClasses('container')}
      >
        <button className={this.getClasses('input')}>{text || 'BUTTON'}</button>
      </div>
    )
  }
}

export default Button
