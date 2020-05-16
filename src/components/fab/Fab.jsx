import React from 'react'

import { Button } from '../index'

import styles from './Fab.module.css'
import { getModuleClasses } from '../../util'
import { G_BOOL, BUTTON_PROP_TYPES } from '../../assets/index'

class Fab extends React.Component {
  static displayName = 'NuFab'

  static propTypes = {
    top: G_BOOL,
    left: G_BOOL,
    right: G_BOOL,
    bottom: G_BOOL,
    fixed: G_BOOL,
    absolute: G_BOOL,
    ...BUTTON_PROP_TYPES
  }

  getClasses() {
    const { fixed, top, right, bottom, left, absolute } = this.props
    return getModuleClasses(
      styles,
      `
        nu-fab
        ${top ? 'nu-fab--top' : ''}
        ${left ? 'nu-fab--left' : ''}
        ${right ? 'nu-fab--right' : ''}
        ${bottom ? 'nu-fab--bottom' : ''}
        ${fixed ? 'nu-fab--fixed' : ''}
        ${absolute ? 'nu-fab--absolute' : ''}
      `
    )
  }

  render() {
    const { children } = this.props
    return (
      <div className={this.getClasses()}>
        <Button
          {...this.props}
          type='fab'
          text={false}
          block={false}
          depressed={false}
        >
          {children}
        </Button>
      </div>
    )
  }
}

export default Fab
