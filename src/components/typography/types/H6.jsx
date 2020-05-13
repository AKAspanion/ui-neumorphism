import React from 'react'

import { Typography } from '../../index'
import { TYPOGRAPHY_PROP_TYPES } from '../../../assets/index'

class H6 extends React.Component {
  static displayName = 'NuH6'

  static propTypes = TYPOGRAPHY_PROP_TYPES

  render() {
    return (
      <Typography {...this.props} type='h6'>
        {this.props.children}
      </Typography>
    )
  }
}

export default H6
