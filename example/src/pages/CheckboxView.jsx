import React from 'react'

import { Card, H4, H5, H6, Subtitle1, Checkbox } from 'ui-neumorphism'

class CheckboxView extends React.Component {
  render() {
    const { dark } = this.props
    return (
      <Card flat dark={dark}>
        <H4>Checkbox</H4>
        <H6>
          Checkboxes allow the user to select one or more items from a set.
        </H6>
        <br />
        <br />
        <Card outlined>
          <div
            style={{
              padding: '64px 32px',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-around'
            }}
          >
            <Card flat dark={dark}>
              <Checkbox color='var(--primary)' checked />
              <Checkbox color='#299ae6' />
              <Checkbox />
              <Checkbox disabled />
              <Checkbox disabled checked />
              <Checkbox checked />
            </Card>
          </div>
        </Card>
        <br />
        <br />
        <br />
        <H5>Checkbox with label</H5>
        <Subtitle1>Checkbox can be provided with a label.</Subtitle1>
        <br />
        <Card outlined>
          <div
            style={{
              padding: '64px 32px',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-around'
            }}
          >
            <Card flat dark={dark}>
              <Checkbox color='var(--primary)' label='Primary' checked />
              <Checkbox label='Blue' color='#299ae6' />
              <Checkbox label='Default' />
              <Checkbox disabled label='Disabled' />
              <Checkbox disabled checked label='Checked & Disabled' />
              <Checkbox checked label='Checked' />
            </Card>
          </div>
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

export default CheckboxView
