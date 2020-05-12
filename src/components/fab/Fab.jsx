import React from 'react'

import { Button } from '../index'

import styles from './Fab.module.css'
import { getModuleClasses } from '../../util'
import { SIZE_PROP, G_BOOL, G_STRING } from '../../assets/index'

class Fab extends React.Component {
  static displayName = 'NuFab'

  static defaultProps = {
    size: 'medium'
  }

  static propTypes = {
    dark: G_BOOL,
    top: G_BOOL,
    left: G_BOOL,
    right: G_BOOL,
    bottom: G_BOOL,
    fixed: G_BOOL,
    size: SIZE_PROP,
    color: G_STRING,
    disabled: G_BOOL,
    absolute: G_BOOL
  }

  getClasses() {
    const { fixed, top, right, bottom, left, absolute } = this.props
    return getModuleClasses(
      styles,
      `
        nu-fab
        ${fixed ? 'nu-fab--fixed' : ''}
        ${absolute ? 'nu-fab--absolute' : ''}
        ${top ? 'nu-fab--top' : ''}
        ${right ? 'nu-fab--right' : ''}
        ${bottom ? 'nu-fab--bottom' : ''}
        ${left ? 'nu-fab--left' : ''}
      `
    )
  }

  render() {
    const { dark, size, color, disabled, children } = this.props
    const { onClick, mouseOver, mouseOut } = this.props
    return (
      <div className={this.getClasses()}>
        <Button
          fab
          dark={dark}
          size={size}
          color={color}
          onClick={onClick}
          disabled={disabled}
          onMouseOut={mouseOut}
          onMouseOver={mouseOver}
        >
          {children}
        </Button>
      </div>
    )
  }
}

export default Fab
