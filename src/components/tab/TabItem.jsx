import React, { createRef } from 'react'

// import { Button } from '../../index'

import styles from './Tab.module.css'

import { DEFAULT_PROPS, DEFAULT_PROPS_TYPE } from '../../assets/index'
import { getModuleClasses, getDOMNode } from '../../util'

class TabItem extends React.Component {
  static displayName = 'NuTabItem'

  domRef = createRef()

  get domNode() {
    return getDOMNode(this.domRef.current)
  }

  static defaultProps = DEFAULT_PROPS

  static propTypes = DEFAULT_PROPS_TYPE

  getClasses(elem) {
    return getModuleClasses(styles, elem)
  }

  render() {
    const { style, className, children } = this.props
    return (
      <div
        ref={this.domRef}
        style={style}
        className={`${this.getClasses('nu-tab-item')} ${className}`}
      >
        {children}
      </div>
    )
  }
}

export default TabItem
