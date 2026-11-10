import React, { createRef } from 'react'

import { TextField } from '../../index'
import { callCallback, getDOMNode } from '../../util'

class TextArea extends React.Component {
  static displayName = 'NuTextarea'

  domRef = createRef()

  get domNode() {
    return getDOMNode(this.domRef.current)
  }

  constructor(props) {
    super(props)
    const { dense, height } = props
    const defaultHeight = dense ? 32 : 40
    this.minHeight = Math.max(height || 0, defaultHeight)
  }

  onInput(e, prop) {
    if (!this.props.autoExpand) return
    const textarea = e.target

    const outerHeight = parseInt(window.getComputedStyle(textarea).height, 10)
    const diff = outerHeight - textarea.clientHeight

    textarea.style.height = 0
    textarea.style.height = `${Math.max(
      this.minHeight,
      textarea.scrollHeight + diff
    )}px`

    callCallback(this.props[prop], e)
  }

  render() {
    const { autoExpand, inputStyles, ...others } = this.props
    return (
      <TextField
        ref={this.domRef}
        tag='textarea'
        onInput={(e) => this.onInput(e, 'onInput')}
        onKeyDown={(e) => this.onInput(e, 'onKeyDown')}
        inputStyles={{ resize: autoExpand ? 'none' : null, ...inputStyles }}
        {...others}
      />
    )
  }
}

export default TextArea
