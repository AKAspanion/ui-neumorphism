import React, { Children, cloneElement } from 'react'

import { ToggleButton } from '../index'

import { callCallback } from '../../util'
import { BUTTON_PROP_TYPES, BUTTON_GROUP_VALUE, G_BOOL } from '../../assets'

class ToggleButtonGroup extends React.Component {
  static displayName = 'NuToggleButtonGroup'

  static propTypes = {
    multiple: G_BOOL,
    mandatory: G_BOOL,
    ...BUTTON_PROP_TYPES,
    value: BUTTON_GROUP_VALUE
  }

  constructor(props) {
    super(props)
    this.state = {
      active: props.value,
      key: 1
    }
  }

  componentDidUpdate(props, state) {
    const { active } = this.state
    if (JSON.stringify(state.active) !== JSON.stringify(active)) {
      callCallback(props.onChange, { active })
    }
  }

  handleClick(event) {
    let active = ''
    const { selected, value } = event
    const { multiple, mandatory } = this.props
    const { key, active: stateActive } = this.state

    if (selected) {
      if (multiple) {
        active = [...stateActive, value]
      } else {
        active = value
      }
    } else {
      if (multiple) {
        active = stateActive.filter((a) => a !== value)
        if (mandatory && !active.length) {
          active = [value]
        }
      } else {
        if (mandatory) {
          active = value
        }
      }
    }

    this.setState({ active })
    this.setState({ key: key + 1 })

    callCallback(this.props.onClick, { event, active })
  }

  render() {
    const { children, dark: parentDark, multiple } = this.props
    const buttons = Children.map(children, (child) => {
      if (child.type === ToggleButton) {
        let selected = false
        const { active } = this.state
        const { value, dark } = child.props

        if (Array.isArray(active)) {
          const trimmedActive = multiple
            ? active
            : active.filter((a, i) => i === 0)
          selected = !!trimmedActive.find((a) => a === value)
        } else {
          selected = active === value
        }

        return cloneElement(child, {
          selected,
          key: this.state.key,
          dark: dark || parentDark,
          onClick: (e) => this.handleClick(e, child)
        })
      }
    })
    return <div>{buttons}</div>
  }
}

export default ToggleButtonGroup
