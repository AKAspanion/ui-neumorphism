import React from 'react'

import { Button } from '../index'

import { callCallback } from '../../util'
import { BUTTON_PROP_TYPES } from '../../assets/index'

class ToggleButton extends React.Component {
  static displayName = 'NuToggleButton'

  static defaultProps = {
    text: true
  }

  static propTypes = BUTTON_PROP_TYPES

  constructor(props) {
    super(props)
    this.state = {
      isActive: this.props.selected || false,
      color: ''
    }
  }

  handleClick(event) {
    const isActive = !this.state.isActive
    this.setState({ isActive })
    this.setState({ color: isActive ? this.props.color : '' })

    callCallback(this.props.onClick, { event, selected: isActive })
  }

  handleMouseOut(e) {
    if (!this.state.isActive) {
      this.setState({ color: '' })
    }
    callCallback(this.props.mouseOut, e)
  }

  handleMouseOver(e) {
    this.setState({ color: this.props.color })
    callCallback(this.props.mouseOver, e)
  }

  render() {
    const { children } = this.props
    return (
      <Button
        {...this.props}
        type='toggle'
        block={false}
        depressed={false}
        color={this.state.color}
        active={this.state.isActive}
        onClick={(e) => this.handleClick(e)}
        mouseOut={(e) => this.handleMouseOut(e)}
        mouseOver={(e) => this.handleMouseOver(e)}
      >
        {children}
      </Button>
    )
  }
}

export default ToggleButton
