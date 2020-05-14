import React from 'react'

import { Card, Divider, Subtitle1, Body2, H6, H5, H4 } from 'ui-neumorphism'
class DividerView extends React.Component {
  render() {
    const { dark } = this.props
    return (
      <Card flat dark={dark}>
        <H4>Divider</H4>
        <H6>A divider is a line that separates content into clear groups.</H6>
        <br />
        <br />

        <Card outlined>
          <div
            style={{
              padding: '64px 64px 32px 64px',
              textAlign: 'center'
            }}
          >
            <Divider dark={dark} />
            <br />
            <Body2 dark={dark}>Default</Body2>
          </div>
          <div
            style={{
              padding: '0px 64px 32px 64px',
              textAlign: 'center'
            }}
          >
            <Divider dense dark={dark} />
            <br />
            <Body2 dark={dark}>Dense</Body2>
          </div>
          <div
            style={{
              padding: '0px 64px 32px 64px',
              textAlign: 'center'
            }}
          >
            <Divider elevated dark={dark} />
            <br />
            <Body2 dark={dark}>Elevated</Body2>
          </div>
          <div
            style={{
              padding: '0px 64px 32px 64px',
              textAlign: 'center'
            }}
          >
            <Divider dense elevated dark={dark} />
            <br />
            <Body2 dark={dark}>Dense & Elevated</Body2>
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

export default DividerView
