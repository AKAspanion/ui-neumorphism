import React from 'react'

import { ProgressCircular, Card, H4, H6, Subtitle1 } from 'ui-neumorphism'

class ProgressCircularView extends React.Component {
  state = {
    val: 75
  }
  render() {
    const { dark } = this.props
    return (
      <Card flat dark={dark}>
        <H4>Progress Circular</H4>
        <H6>Progress Circular displays a circular progress bar.</H6>
        <br />
        <Subtitle1>
          The component is used to convey data visually to users. They can also
          represent an indeterminate amount, such as loading or processing.
        </Subtitle1>
        <br />
        <br />
        <br />
        <Card outlined style={{ padding: '32px' }} className='d-flex'>
          <ProgressCircular
            color='var(--primary)'
            value={this.state.val}
            className='doc-btn'
          />
          <br />
          <ProgressCircular
            color='var(--primary)'
            value={this.state.val}
            size={64}
            elevated
            className='doc-btn'
          >
            50
          </ProgressCircular>
          <br />
          <ProgressCircular
            color='var(--primary)'
            indeterminate
            className='doc-btn'
          />
        </Card>
        <br />
        <br />
      </Card>
    )
  }
}

export default ProgressCircularView
