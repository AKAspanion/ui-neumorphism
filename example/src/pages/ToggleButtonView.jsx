import React from 'react'

import Icon from '@mdi/react'
import { mdiRun, mdiBroom, mdiBucket } from '@mdi/js'

import { Card, ToggleButton, ToggleButtonGroup } from 'ui-neumorphism'

class ToggleButtonView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: '1',
      key: 1
    }
  }
  handleClick(e) {
    console.log(e)
    if (e.selected) {
      this.setState({ active: e.value })
      this.setState({ key: this.state.key + 1 })
    }
  }
  render() {
    const { dark } = this.props
    const { active } = this.state
    return (
      <Card flat dark={dark}>
        <ToggleButton
          onClick={(e) => this.handleClick(e)}
          color='var(--primary)'
        >
          <Icon path={mdiRun} size={1} />
        </ToggleButton>
        <ToggleButtonGroup
          value={['1', '2']}
          size='large'
          onChange={(e) => this.handleClick(e)}
        >
          <ToggleButton value='1' color='var(--primary)'>
            <Icon path={mdiRun} size={1} />
          </ToggleButton>
          <ToggleButton value='2' color='var(--primary)'>
            <Icon path={mdiBroom} size={1} />
          </ToggleButton>
          <ToggleButton value='3' color='var(--primary)'>
            <Icon path={mdiBucket} size={1} />
          </ToggleButton>
        </ToggleButtonGroup>
        <ToggleButton
          value='1'
          selected={active === '1'}
          color='var(--primary)'
          onClick={(e) => this.handleClick(e)}
        >
          <Icon path={mdiRun} size={1} />
        </ToggleButton>
        <ToggleButton
          value='2'
          selected={active === '2'}
          color='var(--primary)'
          onClick={(e) => this.handleClick(e)}
        >
          <Icon path={mdiBroom} size={1} />
        </ToggleButton>
        <ToggleButton
          value='3'
          selected={active === '3'}
          color='var(--primary)'
          onClick={(e) => this.handleClick(e)}
        >
          <Icon path={mdiBucket} size={1} />
        </ToggleButton>
      </Card>
    )
  }
}

export default ToggleButtonView
