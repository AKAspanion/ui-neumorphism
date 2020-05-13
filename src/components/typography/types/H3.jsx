import React from 'react'

import { Typography } from '../../index'
import { TYPOGRAPHY_PROP_TYPES } from '../../../assets/index'

class H3 extends React.Component {
  static displayName = 'NuH3'

  static propTypes = TYPOGRAPHY_PROP_TYPES

  render() {
    return (
      <Typography {...this.props} type='h3'>
        {this.props.children}
      </Typography>
    )
  }
}

export default H3
