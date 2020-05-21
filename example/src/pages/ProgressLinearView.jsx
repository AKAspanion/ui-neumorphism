import React from 'react'

import { ProgressLinear, Card, H4, H5, H6, Subtitle1 } from 'ui-neumorphism'

class ProgressLinearView extends React.Component {
  render() {
    const { dark } = this.props
    return (
      <Card flat dark={dark}>
        <H4>Progress Linear</H4>
        <H6>Progress Linear displays a horizontal progress bar.</H6>
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
          Using the indeterminate prop, ProgressLinear continuously animates.
        </Subtitle1>
        <br />
        <Card outlined style={{ padding: '32px' }}>
          <ProgressLinear active fillHeight height={5} color='red' indeterminate />
          <br />
          <ProgressLinear color='green' indeterminate value={23} />
          <br />
          <ProgressLinear color='blue' indeterminate />
          <br />
        </Card>
        <br />
        <br />
      </Card>
    )
  }
}

export default ProgressLinearView
