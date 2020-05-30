import React from 'react'

import { Card, Divider, Subtitle1, Body2, H6, H5, H4 } from 'ui-neumorphism'

import { divider } from '../assets/'
import DocCard from '../containers/DocCard.jsx'
const url =
  'https://github.com/AKAspanion/ui-neumorphism/blob/master/example/src/pages/CardView.jsx'
class DividerView extends React.Component {
  render() {
    const { dark } = this.props
    return (
      <Card flat dark={dark}>
        <H4>Divider</H4>
        <H6>A divider is a line that separates content into clear groups.</H6>
        <DocCard
          url={url}
          content={
            <Card flat className='fill-width text-center px-12'>
              <Divider />
              <br />
              <Body2>Default</Body2>
              <br />
              <br />
              <Divider dense />
              <br />
              <Body2>Dense</Body2>
              <br />
              <br />
              <Divider elevated />
              <br />
              <Body2>Elevated</Body2>
              <br />
              <br />
              <Divider dense elevated />
              <br />
              <br />
              <Body2>Dense & Elevated</Body2>
            </Card>
          }
          code={[divider, dark]}
        />
        <br />
        <br />
        <H5>API</H5>
        <Subtitle1>Coming soon..</Subtitle1>
      </Card>
    )
  }
}

export default DividerView
