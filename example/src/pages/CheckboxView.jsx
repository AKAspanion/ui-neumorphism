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
            <div style={{ padding: '20px' }}>
              <Checkbox color='var(--primary)' dark={dark} checked />
            </div>
            <div style={{ padding: '20px' }}>
              <Checkbox dark={dark} color='#42aaee' />
            </div>
            <div style={{ padding: '20px' }}>
              <Checkbox dark={dark} />
            </div>
            <div style={{ padding: '20px' }}>
              <Checkbox dark={dark} disabled />
            </div>

            <div style={{ padding: '20px' }}>
              <Checkbox dark={dark} disabled checked />
            </div>
            <div style={{ padding: '20px' }}>
              <Checkbox dark={dark} checked />
            </div>
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
