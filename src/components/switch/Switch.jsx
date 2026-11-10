import React, { createRef } from 'react'

import { SelectionControl } from '../../index'

import { DEFAULT_PROPS, SELECTION_CONTROL_PROP_TYPES } from '../../assets/index'
import { getDOMNode } from '../../util'
class Switch extends React.Component {
  static displayName = 'NuSwitch'

  domRef = createRef()

  get domNode() {
    return getDOMNode(this.domRef.current)
  }

  static defaultProps = DEFAULT_PROPS

  static propTypes = SELECTION_CONTROL_PROP_TYPES

  render() {
    return <SelectionControl ref={this.domRef} type='switch' {...this.props} />
  }
}

export default Switch
