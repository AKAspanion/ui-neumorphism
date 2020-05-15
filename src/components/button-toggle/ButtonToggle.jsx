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
    rounded: G_BOOL,
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
    const { children } = this.props
    return (
      <Button
        toggle
        {...this.props}
        active={this.state.isActive}
        onClick={(e) => this.handleClick(e)}
      >
        {children}
      </Button>
    )
  }
}

export default ButtonToggle
