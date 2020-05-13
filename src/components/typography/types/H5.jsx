import React from 'react'

import { Typography } from '../../index'
import { TYPOGRAPHY_PROP_TYPES } from '../../../assets/index'

class H5 extends React.Component {
  static displayName = 'NuH5'

  static propTypes = TYPOGRAPHY_PROP_TYPES

  render() {
    return (
      <Typography {...this.props} type='h5'>
        {this.props.children}
      </Typography>
    )
  }
}

export default H5
