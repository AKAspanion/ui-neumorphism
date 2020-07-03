import React from 'react'

// import { Button } from '../../index'

import styles from './Tab.module.css'

import { DEFAULT_PROPS, DEFAULT_PROPS_TYPE } from '../../assets/index'
import { getModuleClasses } from '../../util'

class TabItem extends React.Component {
  static displayName = 'NuTabItem'

  static defaultProps = {
    ...DEFAULT_PROPS
  }

  static propTypes = DEFAULT_PROPS_TYPE

  getClasses(elem) {
    return getModuleClasses(styles, elem)
  }

  render() {
    const { style, className, children } = this.props
    return (
      <div
        style={style}
        className={`${this.getClasses('nu-tab-item')} ${className}`}
      >
        {children}
      </div>
    )
  }
}

export default TabItem
