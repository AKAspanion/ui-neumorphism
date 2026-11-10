import React, { createRef } from 'react'

import { Typography } from '../../index'
import { DEFAULT_PROPS, TYPOGRAPHY_PROP_TYPES } from '../../../assets/index'
import { getDOMNode } from '../../../util'

class H4 extends React.Component {
  static displayName = 'NuH4'

  domRef = createRef()

  get domNode() {
    return getDOMNode(this.domRef.current)
  }

  static defaultProps = DEFAULT_PROPS

  static propTypes = TYPOGRAPHY_PROP_TYPES

  render() {
    return (
      <Typography ref={this.domRef} {...this.props} type='h4'>
        {this.props.children}
      </Typography>
    )
  }
}

export default H4
