import React from 'react'

import styles from './Badge.module.css'

import { getModuleClasses, setCSSVariable, uid } from '../../util'
import {
  DEFAULT_PROPS_TYPE,
  DEFAULT_PROPS,
  G_STRING,
  G_BOOL,
  G_NODE,
  G_NUM
} from '../../assets/index'

class Badge extends React.Component {
  static displayName = 'NuBadge'

  static defaultProps = {
    visible: true,
    ...DEFAULT_PROPS
  }

  static propTypes = {
    max: G_NUM,
    dot: G_BOOL,
    left: G_BOOL,
    inline: G_BOOL,
    bottom: G_BOOL,
    square: G_BOOL,
    content: G_NODE,
    overlap: G_BOOL,
    visible: G_BOOL,
    label: G_STRING,
    color: G_STRING,
    bordered: G_BOOL,
    bgColor: G_STRING,
    borderColor: G_STRING,
    ...DEFAULT_PROPS_TYPE
  }

  constructor(props) {
    super(props)
    this.state = {
      id: uid()
    }
  }

  get isContentNumber() {
    return !isNaN(this.props.content)
  }

  get content() {
    const { content, max } = this.props
    return this.isContentNumber
      ? content > max
        ? `${max}+`
        : content
      : content
  }

  get badgeContent() {
    const { dot, visible } = this.props
    return visible ? (
      <span className={this.getClasses('badge')}>
        {dot ? null : this.content}
      </span>
    ) : null
  }

  get badgeChildren() {
    const { inline, left, children } = this.props
    return inline && left ? (
      <React.Fragment>
        {this.badgeContent}
        {children}
      </React.Fragment>
    ) : (
      <React.Fragment>
        {children}
        {this.badgeContent}
      </React.Fragment>
    )
  }

  getClasses(name) {
    const { dot, left, square, inline, bottom, overlap, bordered } = this.props
    switch (name) {
      case 'wrapper':
        return getModuleClasses(
          styles,
          `
            nu-badge
            ${inline ? 'nu-badge--inline' : ''}
          `
        )
      case 'badge':
        return getModuleClasses(
          styles,
          `
            nu-badge--badge
            ${dot ? 'nu-badge--dot' : ''}
            ${square ? 'nu-badge--square' : ''}
            ${bordered ? 'nu-badge--bordered' : ''}
            ${
              inline
                ? ''
                : `
              ${overlap ? 'nu-badge--overlap' : ''}
              nu-badge--${left ? 'left' : 'right'}
              nu-badge--${bottom ? 'bottom' : 'top'}
              ${left && !bottom ? 'nu-badge--left-top' : ''}
              ${left && bottom ? 'nu-badge--left-bottom' : ''}
              ${!left && !bottom ? 'nu-badge--right-top' : ''}
              ${!left && bottom ? 'nu-badge--right-bottom' : ''}`
            }
            
          `
        )
    }
  }

  componentDidMount() {
    const { color, bgColor, borderColor } = this.props
    const elem = document.getElementById(this.state.id)
    setCSSVariable(elem, '--badge-bg-color', bgColor)
    setCSSVariable(elem, '--badge-text-color', color)
    setCSSVariable(elem, '--badge-border-color', borderColor)
  }

  render() {
    const { style, className } = this.props
    return (
      <span
        style={style}
        id={this.state.id}
        className={`${this.getClasses('wrapper')} ${className}`}
      >
        {this.badgeChildren}
      </span>
    )
  }
}

export default Badge
