import React from 'react'

import { Card, Spacer, IconButton } from '../../index'
import styles from './Alert.module.css'

import { getModuleClasses, uid, setCSSVariable, callCallback } from '../../util'
import { ALERT_PROP_TYPES, DEFAULT_PROPS } from '../../assets/index'

class Alert extends React.Component {
  static displayName = 'NuAlert'

  static defaultProps = {
    visible: true,
    ...DEFAULT_PROPS
  }

  static propTypes = ALERT_PROP_TYPES

  constructor(props) {
    super(props)
    this.state = {
      id: uid()
    }
  }

  get type() {
    return (
      ['success', 'info', 'warning', 'error'].find(
        (t) => t === this.props.type
      ) || null
    )
  }

  get border() {
    return (
      ['top', 'right', 'bottom', 'left'].find((t) => t === this.props.border) ||
      null
    )
  }

  get icon() {
    const { icon, dense } = this.props
    return icon && !dense ? (
      <span className={this.getClasses('nu-alert-icon')}>{icon}</span>
    ) : null
  }

  get close() {
    const { onClose, rounded, closeIcon, closable } = this.props
    return closable ? (
      <IconButton
        size='small'
        outlined={false}
        bordered={false}
        rounded={rounded}
        onClick={() => callCallback(onClose, false)}
        className={this.getClasses('nu-alert-close')}
      >
        {closeIcon || (
          <span className={this.getClasses('nu-alert-close--icon')}>×</span>
        )}
      </IconButton>
    ) : null
  }

  get alertChildren() {
    return (
      <div className={this.getClasses('nu-alert-children')}>
        {this.props.children}
      </div>
    )
  }

  getClasses(name) {
    const { dense, outlined, closable } = this.props
    switch (name) {
      case 'alert':
        return getModuleClasses(
          styles,
          `
            nu-alert
            ${dense ? 'nu-alert--dense' : ''}
            ${this.type ? `nu-alert--${this.type}` : ''}
            ${outlined ? 'nu-alert--outlined' : ''}
            ${closable ? 'nu-alert--closable' : ''}
            ${this.border ? `nu-alert--border-${this.border}` : ''}
          `
        )
      default:
        return getModuleClasses(styles, name)
    }
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
    const { style, visible, className, ...otherProps } = this.props
    return visible ? (
      <Card
        style={style}
        {...otherProps}
        id={this.state.id}
        className={`${this.getClasses('alert')} ${className}`}
      >
        {this.icon}
        {this.alertChildren}
        <Spacer />
        {this.close}
      </Card>
    ) : null
  }
}

export default Alert
