import React from 'react'

import { Card, H4, H6, Subtitle1 } from 'ui-neumorphism'

// import { toggle, toggleLabel, switchApi } from '../docs/'

import DocCard from '../containers/DocCard.jsx'
// import ApiCard from '../containers/ApiCard.jsx'

const url =
  'https://github.com/AKAspanion/ui-neumorphism/blob/master/example/src/pages/SliderView.jsx'
class SliderView extends React.Component {
  render() {
    const { dark } = this.props
    return (
      <Card flat dark={dark}>
        <H4>
          <a href='#component' name='component'>
            Slider
          </a>
        </H4>
        <H6>Sliders allow users to make selections from a range of values.</H6>
        <Subtitle1 className='mt-3'>
          Sliders reflect a range of values along a bar, from which users may
          select a single value. They are ideal for adjusting settings such as
          volume, brightness, or applying image filters.
        </Subtitle1>
        <DocCard
          url={url}
          content={
            <Card flat className='d-flex align-center justify-center flex-wrap'>
              Coming soon..
            </Card>
          }
        />
        <H4 className='mt-12'>
          <a href='#api' name='api'>
            API
          </a>
        </H4>
        Coming soon..
      </Card>
    )
  }
}

export default SliderView
