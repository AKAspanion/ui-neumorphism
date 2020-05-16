import React from 'react'

import Icon from '@mdi/react'
import { mdiRun } from '@mdi/js'

import { Card, ToggleButton } from 'ui-neumorphism'

class ToggleButtonView extends React.Component {
  render() {
    const { dark } = this.props
    return (
      <Card flat dark={dark}>
        <ToggleButton color='var(--primary)'>
          <Icon path={mdiRun} size={1} />
        </ToggleButton>
      </Card>
    )
  }
}

export default ToggleButtonView
