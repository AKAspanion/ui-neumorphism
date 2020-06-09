import React from 'react'

import styles from './Card.module.css'
import { getModuleClasses, passDownProp } from '../../util'
import {
  G_BOOL,
  G_NODE,
  DEFAULT_PROPS,
  DEFAULT_PROPS_TYPE
} from '../../assets/index'

class CardHeader extends React.Component {
  static displayName = 'NuCardHeader'

  static defaultProps = DEFAULT_PROPS

  static propTypes = {
    title: G_NODE,
    avatar: G_NODE,
    action: G_NODE,
    rounded: G_BOOL,
    subtitle: G_NODE,
    disabled: G_BOOL,
    ...DEFAULT_PROPS_TYPE
  }

  getClass(classType) {
    const { dark, rounded } = this.props
    switch (classType) {
      case 'wrapper':
        return getModuleClasses(
          styles,
          `
            nu-card-header
            nu-card-header--${dark ? 'dark' : 'light'}
            ${rounded ? 'nu-card-header--rounded' : ''}
          `
        )
      case 'content':
        return getModuleClasses(styles, 'nu-header-content')
      case 'avatar':
        return getModuleClasses(styles, 'nu-header-avatar')
      case 'content-left':
        return getModuleClasses(
          styles,
          'nu-header-content nu-header-content--left'
        )
    }
  }

  render() {
    const {
      style,
      avatar,
      title,
      action,
      children,
      subtitle,
      className
    } = this.props
    const cardTitle = passDownProp(title, this.props, ['dark', 'disabled'])
    const cardAvatar = passDownProp(avatar, this.props, ['dark', 'disabled'])
    const cardAction = passDownProp(action, this.props, ['dark', 'disabled'])
    const cardSubTitle = passDownProp(subtitle, this.props, [
      'dark',
      'disabled'
    ])
    const cardChildren = passDownProp(children, this.props, [
      'dark',
      'rounded',
      'disabled'
    ])
    return (
      <div style={style} className={`${this.getClass('wrapper')} ${className}`}>
        {cardAvatar || cardTitle || cardSubTitle || cardAction ? (
          <div className={this.getClass('content')}>
            <div className={this.getClass('content-left')}>
              {cardAvatar ? (
                <div className={this.getClass('avatar')}>{cardAvatar}</div>
              ) : null}
              <div>
                {cardTitle}
                {cardSubTitle}
              </div>
            </div>
            {cardAction}
          </div>
        ) : null}
        {cardChildren}
      </div>
    )
  }
}

export default CardHeader
