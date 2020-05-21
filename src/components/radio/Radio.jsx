import React from 'react'

import { SelectionControl } from '../../index'

import { callCallback } from '../../util'
import { DEFAULT_PROPS, SELECTION_CONTROL_PROP_TYPES } from '../../assets/index'
class Radio extends React.Component {
  static displayName = 'NuRadio'

  static defaultProps = DEFAULT_PROPS

  static propTypes = SELECTION_CONTROL_PROP_TYPES

  handleChange({ event, checked }) {
    const { value, onChange } = this.props
    callCallback(onChange, { event, checked, value })
  }

  render() {
    return (
      <SelectionControl
        type='radio'
        {...this.props}
        onChange={(e) => this.handleChange(e)}
      />
    )
  }
}

export default Radio
