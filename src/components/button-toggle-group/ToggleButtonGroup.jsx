import React, { Children, cloneElement } from 'react'

import { ToggleButton } from '../index'

import { callCallback } from '../../util'
import {
  G_BOOL,
  DEFAULT_PROPS,
  BUTTON_PROP_TYPES,
  BUTTON_GROUP_VALUE
} from '../../assets'

class ToggleButtonGroup extends React.Component {
  static displayName = 'NuToggleButtonGroup'

  static defaultProps = DEFAULT_PROPS

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
    const { key, active: stateActive } = this.state
    const { multiple, mandatory, onChange } = this.props
    if (selected) {
      if (multiple) {
        active = [...(stateActive || []), value]
      } else {
        active = value
      }
    } else {
      if (multiple) {
        active = (stateActive || []).filter((a) => a !== value)
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

    callCallback(onChange, { event, active })
  }

  render() {
    const {
      style,
      size,
      children,
      multiple,
      className,
      dark: parentDark
    } = this.props
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
          size,
          selected,
          key: this.state.key,
          dark: dark || parentDark,
          onChange: (e) => this.handleClick(e, child)
        })
      }
    })
    return (
      <div style={style} className={className}>
        {buttons}
      </div>
    )
  }
}

export default ToggleButtonGroup
