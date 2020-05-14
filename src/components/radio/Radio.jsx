import React from 'react'

import { SelectionControl } from '../../index'

import { SELECTION_CONTROL_PROP_TYPES } from '../../assets/index'
class Radio extends React.Component {
  static displayName = 'NuRadio'

  static propTypes = SELECTION_CONTROL_PROP_TYPES

  render() {
    return <SelectionControl type='radio' {...this.props} />
  }
}

export default Radio
