import React from 'react'

import { Typography } from '../../index'
import { TYPOGRAPHY_PROP_TYPES } from '../../../assets/index'

class Body2 extends React.Component {
  static displayName = 'NuBody2'

  static propTypes = TYPOGRAPHY_PROP_TYPES

  render() {
    return (
      <Typography {...this.props} type='body-2'>
        {this.props.children}
      </Typography>
    )
  }
}

export default Body2
