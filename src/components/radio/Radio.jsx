import React, { createRef } from 'react'

import { SelectionControl } from '../../index'

import { callCallback, getDOMNode } from '../../util'
import { DEFAULT_PROPS, SELECTION_CONTROL_PROP_TYPES } from '../../assets/index'
class Radio extends React.Component {
  static displayName = 'NuRadio'

  domRef = createRef()

  get domNode() {
    return getDOMNode(this.domRef.current)
  }

  static defaultProps = DEFAULT_PROPS

  static propTypes = SELECTION_CONTROL_PROP_TYPES

  handleChange({ event, id, checked }) {
    const { value, onChange } = this.props
    callCallback(onChange, { event, id, checked, value })
  }

  render() {
    return (
      <SelectionControl
        ref={this.domRef}
        type='radio'
        {...this.props}
        onChange={(e) => this.handleChange(e)}
      />
    )
  }
}

export default Radio
