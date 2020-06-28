import React from 'react'

import { Card, H2, H4, H6, Carousel, CarouselItem } from 'ui-neumorphism'

// import { toggle, toggleLabel, switchApi } from '../docs/'

import DocCard from '../containers/DocCard.jsx'
// import ApiCard from '../containers/ApiCard.jsx'

const url =
  'https://github.com/AKAspanion/ui-neumorphism/blob/master/example/src/pages/CarouselView.jsx'
class CarouselView extends React.Component {
  render() {
    const { dark } = this.props
    return (
      <Card flat dark={dark}>
        <H4>
          <a href='#component' name='component'>
            Carousel
          </a>
        </H4>
        <H6>
          The Carousel component is used to display large numbers of visual
          content on a rotating timer.
        </H6>
        <DocCard
          url={url}
          content={
            <Card
              flat
              className='d-flex align-center justify-center flex-wrap fill-width'
            >
              <Carousel continuous cycle value={2}>
                <CarouselItem dark style={{ background: 'var(--info)' }}>
                  <H2>Slide 1</H2>
                </CarouselItem>
                <CarouselItem style={{ background: 'var(--error)' }}>
                  <H2>Slide 2</H2>
                </CarouselItem>
                <CarouselItem style={{ background: 'var(--success)' }}>
                  <H2>Slide 3</H2>
                </CarouselItem>
                <CarouselItem style={{ background: 'var(--warning)' }}>
                  <H2>Slide 4</H2>
                </CarouselItem>
              </Carousel>
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

export default CarouselView
