import React from 'react'

import { Button } from '../index'

import { SIZE_PROP, G_BOOL, G_STRING } from '../../assets/index'

class ButtonToggle extends React.Component {
  static displayName = 'NuButtonToggle'

  static defaultProps = {
    size: 'medium'
  }

  static propTypes = {
    dark: G_BOOL,
    active: G_BOOL,
    size: SIZE_PROP,
    color: G_STRING,
    disabled: G_BOOL
  }

  constructor(props) {
    super(props)
    this.state = {
      isActive: this.props.active || false
    }
  }

  handleClick(event) {
    const isActive = !this.state.isActive
    this.setState({ isActive })

    const { onCLick } = this.props
    if (onCLick) {
      this.onCLick({ event, active: isActive })
    }
  }

  render() {
    const { dark, size, color, disabled, children } = this.props
    const { mouseOver, mouseOut } = this.props
    return (
      <Button
        toggle
        dark={dark}
        size={size}
        color={color}
        disabled={disabled}
        onMouseOut={mouseOut}
        onMouseOver={mouseOver}
        active={this.state.isActive}
        onClick={(e) => this.handleClick(e)}
      >
        {children}
      </Button>
    )
  }
}

export default ButtonToggle
