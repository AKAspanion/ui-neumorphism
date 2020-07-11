import React, { Children, cloneElement } from 'react'

import { ListItem } from '../../index'

import styles from './List.module.css'
import { passDownProp, callCallback, getModuleClasses } from '../../util'
import { DEFAULT_PROPS, DEFAULT_PROPS_TYPE } from '../../assets/index'

class ListItemGroup extends React.Component {
  static displayName = 'NuListItemGroup'

  static defaultProps = DEFAULT_PROPS

  static propTypes = DEFAULT_PROPS_TYPE

  static getDerivedStateFromProps = ({ value: active, onClick }) => {
    return onClick ? { active } : {}
  }

  constructor(props) {
    super(props)
    this.state = { active: props.value }
  }

  get children() {
    const { active } = this.state
    const { children } = this.props
    return passDownProp(
      Children.map(children, (child, index) => {
        if (child.type === ListItem) {
          return cloneElement(child, {
            active: active === index,
            onClick: (e) => this.handleClick(e, index, child.onClick)
          })
        }
      }),
      this.props,
      [
        'dark',
        'link',
        'dense',
        'raised',
        'rounded',
        'inActive',
        'disabled',
        'twoLineSubtitle'
      ]
    )
  }

  getClasses(elem) {
    const { dark } = this.props
    if (elem === 'list') {
      return getModuleClasses(
        styles,
        `
          nu-list
          nu-list-item--${dark ? 'dark' : 'light'}
        `
      )
    } else {
      return getModuleClasses(styles, elem)
    }
  }

  handleClick(event, index, click) {
    const { active: prevActive } = this.state
    const active = prevActive === index ? undefined : index

    this.setState({ active })

    const { onClick, onChange } = this.props

    callCallback(click, event)
    callCallback(onChange, { active })
    callCallback(onClick, { event, active })
  }

  render() {
    const { style, className } = this.props
    return (
      <div style={style} className={`${this.getClasses('list')} ${className}`}>
        {this.children}
      </div>
    )
  }
}

export default ListItemGroup
