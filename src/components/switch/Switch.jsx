import React from 'react'

import { SelectionControl } from '../../index'

import { SELECTION_CONTROL_PROP_TYPES } from '../../assets/index'
class Switch extends React.Component {
  static displayName = 'NuSwitch'

  static propTypes = SELECTION_CONTROL_PROP_TYPES

  render() {
    return <SelectionControl type='switch' {...this.props} />
  }
}

export default Switch
