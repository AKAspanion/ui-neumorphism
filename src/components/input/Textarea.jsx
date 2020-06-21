import React from 'react'

import { TextField } from '../../index'
import { callCallback } from '../../util'

class Textarea extends React.Component {
  static displayName = 'NuTextarea'

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
    const { tag, autoExpand, inputStyles, ...others } = this.props
    return (
      <TextField
        tag='textarea'
        onInput={(e) => this.onInput(e, 'onInput')}
        onKeyDown={(e) => this.onInput(e, 'onKeyDown')}
        inputStyles={{ resize: autoExpand ? 'none' : null, ...inputStyles }}
        {...others}
      />
    )
  }
}

export default Textarea
