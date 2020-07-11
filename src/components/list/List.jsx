import React from 'react'

import { DEFAULT_PROPS, DEFAULT_PROPS_TYPE } from '../../assets/index'
// import { callCallback } from '../../util'

class List extends React.Component {
  static displayName = 'NuList'

  static defaultProps = DEFAULT_PROPS

  static propTypes = DEFAULT_PROPS_TYPE

  render() {
    return <div>list</div>
  }
}

export default List
