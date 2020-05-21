import React from 'react'

import { Typography } from '../../index'
import { DEFAULT_PROPS, TYPOGRAPHY_PROP_TYPES } from '../../../assets/index'

class Subtitle2 extends React.Component {
  static displayName = 'NuSubtitle2'

  static defaultProps = DEFAULT_PROPS

  static propTypes = TYPOGRAPHY_PROP_TYPES

  render() {
    return (
      <Typography {...this.props} type='subtitle-2'>
        {this.props.children}
      </Typography>
    )
  }
}

export default Subtitle2
