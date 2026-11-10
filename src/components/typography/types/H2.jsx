import React, { createRef } from 'react'

import { Typography } from '../../index'
import { DEFAULT_PROPS, TYPOGRAPHY_PROP_TYPES } from '../../../assets/index'
import { getDOMNode } from '../../../util'

class H2 extends React.Component {
  static displayName = 'NuH2'

  domRef = createRef()

  get domNode() {
    return getDOMNode(this.domRef.current)
  }

  static defaultProps = DEFAULT_PROPS

  static propTypes = TYPOGRAPHY_PROP_TYPES

  render() {
    return (
      <Typography ref={this.domRef} {...this.props} type='h2'>
        {this.props.children}
      </Typography>
    )
  }
}

export default H2
