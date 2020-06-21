import React, { cloneElement, createElement } from 'react'

import styles from './Chip.module.css'

import { getModuleClasses, uid, callCallback, setCSSVariable } from '../../util'
import { SIZES, CONTEXT_COLORS } from '../../assets/'

class Chip extends React.Component {
  static displayName = 'NuChip'

  constructor(props) {
    super(props)
    this.state = { id: uid() }
    this.handleActionClick = this.handleActionClick.bind(this)
  }

  get size() {
    const { size } = this.props
    return SIZES.find((s) => s === size) || 'medium'
  }

  get type() {
    return CONTEXT_COLORS.find((t) => t === this.props.type) || null
  }

  get append() {
    const { append, action, closable } = this.props
    const actionClass = action || closable ? 'nu-append--with-action' : ''
    const className = `${this.getClasses(`nu-append ${actionClass}`)}`
    return append ? cloneElement(append, { className }) : null
  }

  get prepend() {
    const { prepend } = this.props
    return prepend
      ? cloneElement(prepend, { className: this.getClasses('nu-prepend') })
      : null
  }

  get action() {
    let actionItem = null
    let closableItem = null
    const { action, closable, closeIcon } = this.props

    if (action) {
      actionItem = cloneElement(action, {
        className: this.getClasses('nu-action'),
        onClick: (e) => this.handleActionClick(e)
      })
    }

    if (closable) {
      closableItem = closeIcon ? (
        cloneElement(action, {
          className: this.getClasses('nu-action'),
          onClick: (e) => this.handleActionClick(e)
        })
      ) : (
        <span
          className={this.getClasses('nu-action nu-action--close')}
          onClick={(e) => this.handleActionClick(e)}
        >
          ×
        </span>
      )
    }
    return closable ? closableItem : action ? actionItem : null
  }

  getClasses(type) {
    const { dark, flat, label, active, outlined, bordered } = this.props
    switch (type) {
      case 'chip':
        return getModuleClasses(
          styles,
          `
            nu-chip
            nu-chip--${this.size}
            ${flat ? 'nu-chip--flat' : ''}
            ${label ? 'nu-chip--label' : ''}
            ${active ? 'nu-chip--active' : ''}
            nu-chip--${dark ? 'dark' : 'light'}
            ${outlined ? 'nu-chip--outlined' : ''}
            ${bordered ? 'nu-chip--bordered' : ''}
            ${this.type ? `nu-chip--${this.type}` : ''}
          `
        )
      default:
        return getModuleClasses(styles, type)
    }
  }

  handleActionClick(e) {
    callCallback(this.props.onAction, e)
  }

  setColor() {
    const elem = document.getElementById(this.state.id)
    setCSSVariable(elem, '--text-color', this.props.color)
  }

  componentDidMount() {
    this.setColor()
  }

  componentDidUpdate() {
    this.setColor()
  }

  render() {
    const { link, style, children, className } = this.props
    const tag = link ? 'a' : 'span'
    const linkProps = {}
    if (link) {
      linkProps.href = link
    }
    return createElement(
      tag,
      {
        style,
        ...linkProps,
        id: this.state.id,
        className: `${this.getClasses('chip')} ${className}`
      },
      [this.prepend, children, this.append, this.action]
    )
  }
}

export default Chip
