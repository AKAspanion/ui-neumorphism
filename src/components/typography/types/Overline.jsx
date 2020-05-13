import React from 'react'

import { Typography } from '../../index'
import { TYPOGRAPHY_PROP_TYPES } from '../../../assets/index'

class Overline extends React.Component {
  static displayName = 'NuOverline'

  static propTypes = TYPOGRAPHY_PROP_TYPES

  render() {
    return (
      <Typography {...this.props} type='overline'>
        {this.props.children}
      </Typography>
    )
  }
}

export default Overline
