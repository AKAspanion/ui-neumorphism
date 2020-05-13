import React from 'react'

import { Typography } from '../../index'
import { TYPOGRAPHY_PROP_TYPES } from '../../../assets/index'

class Caption extends React.Component {
  static displayName = 'NuCaption'

  static propTypes = TYPOGRAPHY_PROP_TYPES

  render() {
    return (
      <Typography {...this.props} type='caption'>
        {this.props.children}
      </Typography>
    )
  }
}

export default Caption
