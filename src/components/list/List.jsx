import React, { createRef } from 'react'

import { DEFAULT_PROPS, DEFAULT_PROPS_TYPE } from '../../assets/index'
import { getDOMNode } from '../../util'
// import { callCallback } from '../../util'

class List extends React.Component {
  static displayName = 'NuList'

  domRef = createRef()

  get domNode() {
    return getDOMNode(this.domRef.current)
  }

  static defaultProps = DEFAULT_PROPS

  static propTypes = DEFAULT_PROPS_TYPE

  render() {
    return <div ref={this.domRef}>list</div>
  }
}

export default List
