import React from 'react'

import { Typography } from '../../index'
import { TYPOGRAPHY_PROP_TYPES } from '../../../assets/index'

class Body1 extends React.Component {
  static displayName = 'NuBody1'

  static propTypes = TYPOGRAPHY_PROP_TYPES

  render() {
    return (
      <Typography {...this.props} type='body-1'>
        {this.props.children}
      </Typography>
    )
  }
}

export default Body1
