import React, { Children, cloneElement } from 'react'
import { findDOMNode } from 'react-dom'

import { SlideCarousel } from '../../index'

import styles from './Tab.module.css'

import { DEFAULT_PROPS, DEFAULT_PROPS_TYPE } from '../../assets/index'
import { getModuleClasses, passDownProp } from '../../util'

class TabItems extends React.Component {
  prev = 0
  timeout

  static displayName = 'NuTabItems'

  static defaultProps = {
    height: 200,
    ...DEFAULT_PROPS
  }

  static propTypes = DEFAULT_PROPS_TYPE

  constructor(props) {
    super(props)
    this.state = { color: '', height: props.height }
  }

  get color() {
    const { color } = this.state
    const { active, color: propColor } = this.props
    return active ? propColor : color
  }

  get tabItems() {
    const { children, value } = this.props
    const reverse = this.prev < value
    return passDownProp(
      Children.map(children, (child, index) => {
        return (
          <SlideCarousel appear axis='X' reverse={reverse} in={index === value}>
            {cloneElement(child, {
              ref: (ref) => this.handleRef(ref, index === value)
            })}
          </SlideCarousel>
        )
      }),
      this.props,
      ['dark']
    )
  }

  getClasses(elem) {
    const { dark } = this.props
    if (elem === 'container') {
      return getModuleClasses(
        styles,
        `
          nu-tab-items-wrapper
          nu-tab-items-wrapper--${dark ? 'dark' : 'light'}
        `
      )
    } else {
      return getModuleClasses(styles, elem)
    }
  }

  handleRef(item, check = false) {
    if (!check) return
    const tabItem = findDOMNode(item)

    if (!tabItem) return

    this.timeout = setTimeout(() => {
      const { height: stateHeight } = this.state
      const height = tabItem.scrollHeight

      if (height === stateHeight) return

      this.setState({ height })
    }, 100)
  }

  componentDidUpdate() {
    this.prev = this.props.value || 0
  }

  componentWillUnmount() {
    clearTimeout(this.timeout)
  }

  render() {
    const { height } = this.state
    const { style, className } = this.props
    return (
      <div
        style={{ height: `${height}px`, ...style }}
        className={`${this.getClasses('container')} ${className}`}
      >
        <div className={this.getClasses('nu-tab-items-container')}>
          {this.tabItems}
        </div>
      </div>
    )
  }
}

export default TabItems
