import React from 'react'

import {
  ProgressCircular,
  Card,
  H4,
  H5,
  H6,
  Subtitle1,
  Button
} from 'ui-neumorphism'

class ProgressCircularView extends React.Component {
  state = {
    val: 75
  }
  render() {
    const { dark } = this.props
    return (
      <Card flat dark={dark}>
        <H4>Progress Circular</H4>
        <H6>Progress Circular displays a horizontal progress bar.</H6>
        <br />
        <Subtitle1>
          The component is used to convey data visually to users. They can also
          represent an indeterminate amount, such as loading or processing.
        </Subtitle1>
        <br />
        <br />
        <br />
        <H5 style={{ marginTop: '24px' }}>Indeterminate</H5>
        <Subtitle1>
          Using the indeterminate prop, ProgressCircular continuously animates.
        </Subtitle1>
        <br />
        <Button onClick={(e) => this.setState({ val: 50 })}>increase</Button>
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
          />
          <br />
          <ProgressCircular
            color='var(--primary)'
            value={this.state.val}
            size={64}
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
