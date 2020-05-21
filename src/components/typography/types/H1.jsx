import React from 'react'

import { Typography } from '../../index'
import { DEFAULT_PROPS, TYPOGRAPHY_PROP_TYPES } from '../../../assets/index'

class H1 extends React.Component {
  static displayName = 'NuH1'

  static defaultProps = DEFAULT_PROPS

  static propTypes = TYPOGRAPHY_PROP_TYPES

  render() {
    return (
      <Typography {...this.props} type='h1'>
        {this.props.children}
      </Typography>
    )
  }
}

export default H1
