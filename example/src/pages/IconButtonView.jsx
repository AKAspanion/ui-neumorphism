import React from 'react'

// import Icon from '@mdi/react'
// import { mdiRun, mdiBroom, mdiBucket } from '@mdi/js'

import { Card, IconButton } from 'ui-neumorphism'

class ToggleButtonView extends React.Component {
  render() {
    const { dark } = this.props
    return (
      <Card flat dark={dark}>
        <IconButton></IconButton>
      </Card>
    )
  }
}

export default ToggleButtonView
