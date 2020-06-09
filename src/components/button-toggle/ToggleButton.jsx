import React from 'react'

import { Button } from '../index'

import { callCallback } from '../../util'
import {
  G_ANY,
  G_BOOL,
  DEFAULT_PROPS,
  BUTTON_PROP_TYPES
} from '../../assets/index'

class ToggleButton extends React.Component {
  static displayName = 'NuToggleButton'

  static defaultProps = {
    text: true,
    ...DEFAULT_PROPS
  }

  static propTypes = {
    value: G_ANY,
    selected: G_BOOL,
    ...BUTTON_PROP_TYPES
  }

  constructor(props) {
    super(props)
    const { selected, color } = this.props
    this.state = {
      isActive: selected || false,
      color: selected ? color : '',
      key: 1
    }
  }

  handleClick(event) {
    const { value, color, onClick, onChange } = this.props
    const isActive = !this.state.isActive
    this.setState({ isActive })
    this.setState({ color: isActive ? color : '' })
    this.setState({ key: this.state.key + 1 })

    callCallback(onClick, { event, value })
    callCallback(onChange, { event, selected: isActive, value })
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
        key={this.state.key}
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
