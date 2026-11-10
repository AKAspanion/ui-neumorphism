import React, { createRef } from 'react'
import { getDOMNode } from '../../util'

class Spacer extends React.Component {
  domRef = createRef()

  get domNode() {
    return getDOMNode(this.domRef.current)
  }

  render() {
    return <div ref={this.domRef} style={{ flexGrow: '1' }} />
  }
}

export default Spacer
