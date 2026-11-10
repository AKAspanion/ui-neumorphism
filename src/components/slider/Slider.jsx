import React, { createRef } from 'react'
import { getDOMNode } from '../../util'

class Slider extends React.Component {
  domRef = createRef()

  get domNode() {
    return getDOMNode(this.domRef.current)
  }

  render() {
    return <div ref={this.domRef}>Slider</div>
  }
}

export default Slider
