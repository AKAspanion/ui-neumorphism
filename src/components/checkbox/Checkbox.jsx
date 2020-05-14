import React from 'react'

import { SelectionControl } from '../../index'

import { SELECTION_CONTROL_PROP_TYPES } from '../../assets/index'
class Checkbox extends React.Component {
  static displayName = 'NuCheckbox'

  static propTypes = SELECTION_CONTROL_PROP_TYPES

  render() {
    return <SelectionControl type='checkbox' {...this.props} />
  }
}

export default Checkbox
