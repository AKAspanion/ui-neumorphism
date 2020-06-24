import React from 'react'

import { Divider, Body2, Card, H6, H4 } from 'ui-neumorphism'

import { divider, dividerApi } from '../docs/'
import DocCard from '../containers/DocCard.jsx'
import ApiCard from '../containers/ApiCard.jsx'
const url =
  'https://github.com/AKAspanion/ui-neumorphism/blob/master/example/src/pages/DividerView.jsx'
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
        <Divider dense className='mt-6' />
        <H4 className='mt-12'>
          <a href='#api' name='api'>
            API
          </a>
        </H4>
        <ApiCard entity='Divider' data={dividerApi(dark)} />
      </Card>
    )
  }
}

export default DividerView
