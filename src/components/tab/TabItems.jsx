import React, { Children, cloneElement } from 'react'
import { findDOMNode } from 'react-dom'

import { SlideCarousel } from '../../index'

import styles from './Tab.module.css'

import { DEFAULT_PROPS, DEFAULT_PROPS_TYPE } from '../../assets/index'
import { passDownProp, callCallback, getModuleClasses } from '../../util'

class TabItems extends React.Component {
  timeout
  prev = 0

  static displayName = 'NuTabItems'

  static defaultProps = {
    height: 0,
    ...DEFAULT_PROPS
  }

  static propTypes = DEFAULT_PROPS_TYPE

  static getDerivedStateFromProps({ height }) {
    if (height) {
      return { height }
    } else {
      return {}
    }
  }

  constructor(props) {
    super(props)
    this.state = { color: '', height: props.height }
  }

  get tabItems() {
    const { children, reverse: propReverse, value } = this.props
    let reverse = this.prev < value
    reverse = propReverse ? !reverse : reverse
    return passDownProp(
      Children.map(children, (child, index) => {
        return (
          <SlideCarousel
            appear
            axis='X'
            duration={200}
            reverse={reverse}
            in={index === value}
          >
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

  clearHeightTimeout() {
    clearTimeout(this.timeout)
  }

  handleRef(item, check = false) {
    if (!check) return
    const tabItem = findDOMNode(item)

    if (!tabItem) return

    this.clearHeightTimeout()

    this.timeout = setTimeout(() => {
      const { height: stateHeight } = this.state
      const height = tabItem.scrollHeight

      if (height === stateHeight) return

      this.setState({ height })
    }, 250)
  }

  componentDidUpdate({ value }) {
    const { value: active, onChange } = this.props
    this.prev = active || 0
    if (active !== value) {
      callCallback(onChange, { active })
    }
  }

  componentWillUnmount() {
    this.clearHeightTimeout()
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
