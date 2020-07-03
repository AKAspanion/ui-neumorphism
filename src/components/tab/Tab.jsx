import React from 'react'

import { Button } from '../../index'

import styles from './Tab.module.css'

import { DEFAULT_PROPS, DEFAULT_PROPS_TYPE } from '../../assets/index'
import { getModuleClasses, callCallback, pickKeys } from '../../util'

class Tab extends React.Component {
  static displayName = 'NuTab'

  static defaultProps = {
    ...DEFAULT_PROPS
  }

  static propTypes = DEFAULT_PROPS_TYPE

  constructor(props) {
    super(props)
    this.state = { color: '' }
  }

  get color() {
    const { color } = this.state
    const { active, color: propColor } = this.props
    return active ? propColor : color
  }

  getClasses(elem) {
    const { dark, checked } = this.props
    if (elem === 'tab') {
      return getModuleClasses(
        styles,
        `
          nu-tab
          nu-tab--${dark ? 'dark' : 'light'}
          ${checked ? 'nu-tab--checked' : ''}
        `
      )
    } else {
      return getModuleClasses(styles, elem)
    }
  }

  handleMouseOut(e) {
    this.setState({ color: '' })
    callCallback(this.props.onMouseOut, e)
  }

  handleMouseOver(e) {
    this.setState({ color: this.props.color })
    callCallback(this.props.onMouseOver, e)
  }

  render() {
    const { style, className, children } = this.props
    const pickedProps = pickKeys(this.props, [
      'dark',
      'onClick',
      'rounded',
      'disabled'
    ])
    return (
      <Button
        text
        noPress
        style={style}
        {...pickedProps}
        color={this.color}
        onMouseOut={(e) => this.handleMouseOut(e)}
        onMouseOver={(e) => this.handleMouseOver(e)}
        className={`${this.getClasses('tab')} ${className}`}
      >
        {children}
      </Button>
    )
  }
}

export default Tab
