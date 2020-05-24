import React from 'react'

import { Switch, Card, H4, H5, H6, Subtitle1 } from 'ui-neumorphism'

class SwitchView extends React.Component {
  render() {
    const { dark } = this.props
    return (
      <Card flat dark={dark}>
        <H4>Switch</H4>
        <H6>Switches toggle the state of a single setting on or off.</H6>
        <br />
        <Subtitle1>
          Switches are the preferred way to adjust settings on mobile. The
          option that the switch controls, as well as the state it’s in, should
          be made clear from the corresponding inline label.
        </Subtitle1>
        <br />
        <Card
          outlined
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            padding: '64px 32px',
            justifyContent: 'center'
          }}
        >
          <Switch color='var(--primary)' checked />
          <Switch color='#299ae6' />
          <Switch />
          <Switch disabled />
          <Switch disabled checked />
          <Switch checked />
        </Card>
        <br />
        <br />
        <br />
        <H5>Switch with label</H5>
        <Subtitle1>Switch can be provided with a label.</Subtitle1>
        <br />
        <Card
          outlined
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            padding: '64px 32px',
            justifyContent: 'center'
          }}
        >
          <Switch color='var(--primary)' label='Primary' checked />
          <Switch label='Blue' color='#299ae6' />
          <Switch label='Default' />
          <Switch disabled label='Disabled' />
          <Switch disabled checked label='Checked & Disabled' />
          <Switch checked label='Checked' />
        </Card>
        <br />
        <br />
        <br />
        <H5>API</H5>
        <Subtitle1>Coming soon..</Subtitle1>
      </Card>
    )
  }
}

export default SwitchView
