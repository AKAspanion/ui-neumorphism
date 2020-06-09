import React from 'react'

import { SelectionControl } from '../../index'

import { DEFAULT_PROPS, SELECTION_CONTROL_PROP_TYPES } from '../../assets/index'
import { callCallback } from '../../util'

class Checkbox extends React.Component {
  static displayName = 'NuCheckbox'

  static defaultProps = DEFAULT_PROPS

  static propTypes = SELECTION_CONTROL_PROP_TYPES

  handleChange({ event, id, checked }) {
    const { onChange } = this.props
    callCallback(onChange, { event, id, value: checked })
  }

  render() {
    return (
      <SelectionControl
        {...this.props}
        type='checkbox'
        onChange={(e) => this.handleChange(e)}
      />
    )
  }
}

export default Checkbox
