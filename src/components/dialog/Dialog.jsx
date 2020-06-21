import React from 'react'
import { createPortal } from 'react-dom'

import { Grow } from '../../index'

import styles from './Dialog.module.css'

import {
  getModuleClasses,
  findClickInside,
  passDownProp,
  callCallback
} from '../../util'
import { DEFAULT_PROPS, DEFAULT_PROPS_TYPE } from '../../assets/index'

class Dialog extends React.Component {
  static displayName = 'NuDialog'

  static defaultProps = {
    visible: false,
    ...DEFAULT_PROPS
  }

  static propTypes = DEFAULT_PROPS_TYPE

  constructor(props) {
    super(props)
    this.handleClickInside = this.handleClickInside.bind(this)
  }

  get dialog() {
    const { style, visible, children, className } = this.props
    const dialogChildren = passDownProp(children, this.props, ['dark'])
    return createPortal(
      <div
        role='dialog'
        style={style}
        onClick={this.handleClickInside}
        className={`${this.getClasses('dialog')} ${className}`}
      >
        <div className={this.getClasses('nu-dialog-overlay')} />
        <Grow appear in={visible}>
          <div
            role='document'
            id='nudialogcontent'
            className={this.getClasses('nu-dialog-content')}
          >
            {dialogChildren}
          </div>
        </Grow>
      </div>,
      document.body
    )
  }

  getClasses(name) {
    const { dark } = this.props
    switch (name) {
      case 'dialog':
        return getModuleClasses(
          styles,
          `
            nu-dialog
            nu-dialog--${dark ? 'dark' : 'light'}
          `
        )
      default:
        return getModuleClasses(styles, name)
    }
  }

  handleClickInside(e) {
    const contentDOM = document.getElementById('nudialogcontent')
    const isContentClicked = findClickInside(e, contentDOM)
    const { onClose, persistent } = this.props
    if (!isContentClicked && !persistent) {
      callCallback(onClose, true)
    }
  }

  changeBodyAttrs() {
    const { visible } = this.props
    if (visible) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = null
    }
  }

  componentDidUpdate() {
    this.changeBodyAttrs()
  }

  componentDidMount() {
    this.changeBodyAttrs()
  }

  render() {
    const { visible } = this.props
    return visible ? this.dialog : null
  }
}

export default Dialog
