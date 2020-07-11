import React from 'react'

import styles from './List.module.css'
import { getModuleClasses, pickKeys } from '../../util'
import { DEFAULT_PROPS, DEFAULT_PROPS_TYPE } from '../../assets/index'

class ListItem extends React.Component {
  static displayName = 'NuListItem'

  static defaultProps = DEFAULT_PROPS

  static propTypes = DEFAULT_PROPS_TYPE

  get title() {
    const { title } = this.props
    return (
      title && (
        <div className={this.getClasses('nu-list-item-title')}>{title}</div>
      )
    )
  }

  get subtitle() {
    const { subtitle, children } = this.props
    const content = children || subtitle
    return (
      content && (
        <div className={this.getClasses('nu-list-item-subtitle')}>
          {content}
        </div>
      )
    )
  }

  getClasses(elem) {
    const {
      dark,
      link,
      dense,
      active,
      raised,
      rounded,
      inActive,
      disabled,
      twoLineSubtitle
    } = this.props
    if (elem === 'list-item') {
      return getModuleClasses(
        styles,
        `
          nu-list-item
          ${link ? 'nu-list-item--link' : ''}
          ${dense ? 'nu-list-item--dense' : ''}
          ${active ? 'nu-list-item--active' : ''}
          ${raised ? 'nu-list-item--raised' : ''}
          ${rounded ? 'nu-list-item--rounded' : ''}
          ${inActive ? 'nu-list-item--inactive' : ''}
          ${disabled ? 'nu-list-item--disabled' : ''}
          ${twoLineSubtitle ? 'nu-list-item--two-line' : ''}
          nu-list-item--${dark ? 'dark' : 'light'}
        `
      )
    } else {
      return getModuleClasses(styles, elem)
    }
  }

  render() {
    const { style, className } = this.props
    const events = pickKeys(this.props, ['onClick'])
    return (
      <div
        {...events}
        style={style}
        className={`${this.getClasses('list-item')} ${className}`}
      >
        {this.title}
        {this.subtitle}
      </div>
    )
  }
}

export default ListItem
