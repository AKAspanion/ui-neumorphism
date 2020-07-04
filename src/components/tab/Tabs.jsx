import React, { Children, cloneElement } from 'react'
import { findDOMNode } from 'react-dom'

import { Tab } from '../../index'

import styles from './Tab.module.css'

import { DEFAULT_PROPS, DEFAULT_PROPS_TYPE } from '../../assets/index'
import { passDownProp, callCallback, getModuleClasses } from '../../util'

class Tabs extends React.Component {
  wait = false

  static displayName = 'NuTabs'

  static defaultProps = {
    ...DEFAULT_PROPS,
    color: 'var(--primary)'
  }

  static propTypes = DEFAULT_PROPS_TYPE

  static getDerivedStateFromProps({ value: active }) {
    return { active }
  }

  constructor(props) {
    super(props)
    this.state = {
      tabsMeta: {},
      disabled: false,
      active: props.value || 0
    }
  }

  get selectorStyle() {
    const { active, tabsMeta } = this.state

    const leftPos = this.getLeftPos(tabsMeta, active)
    const width = tabsMeta[active]

    if (!width) {
      return { display: 'none' }
    }

    return { width: `${width}px`, left: `${leftPos}px` }
  }

  get tabItems() {
    const { active } = this.state
    const { children } = this.props
    return passDownProp(
      Children.map(children, (child, index) => {
        if (child.type === Tab) {
          const { onClick } = child.props
          return cloneElement(child, {
            active: index === active,
            ref: (ref) => this.handleRef(ref, index),
            onClick: (e) => this.handleClick(e, index, onClick)
          })
        }
      }),
      this.props,
      ['dark', 'color', 'disabled', 'rounded']
    )
  }

  getClasses(elem) {
    const { dark, rounded, outlined, underlined } = this.props
    if (elem === 'container') {
      return getModuleClasses(
        styles,
        `
          nu-tabs-wrapper
          nu-tabs-wrapper--${dark ? 'dark' : 'light'}
          ${rounded ? 'nu-tabs-wrapper--rounded' : ''}
          ${outlined ? 'nu-tabs-wrapper--outlined' : ''}
          ${underlined ? 'nu-tabs-wrapper--underlined' : ''}
        `
      )
    } else {
      return getModuleClasses(styles, elem)
    }
  }

  getLeftPos(meta, value) {
    let width = 0
    for (let i = 0; i < value; i++) width += meta[i]
    return width
  }

  pauseClick() {
    this.wait = true
    setTimeout(() => (this.wait = false), 250)
  }

  handleClick(event, active, click) {
    if (this.wait) return

    const { onClick, onChange } = this.props

    this.setState({ active })

    callCallback(click, event)
    callCallback(onChange, { active })
    callCallback(onClick, { event, active })

    this.pauseClick()
  }

  handleRef(ref, index) {
    const tab = findDOMNode(ref)

    if (!tab) return

    const { tabsMeta } = this.state
    const { width } = tab.getBoundingClientRect()

    if (tabsMeta[index] === width) return

    this.setState({ tabsMeta: { ...tabsMeta, [index]: width } })
  }

  render() {
    const { style, className } = this.props
    return (
      <div
        style={style}
        className={`${this.getClasses('container')} ${className}`}
      >
        {this.tabItems}
        <div
          style={this.selectorStyle}
          className={this.getClasses('nu-tab-selector')}
        />
      </div>
    )
  }
}

export default Tabs
