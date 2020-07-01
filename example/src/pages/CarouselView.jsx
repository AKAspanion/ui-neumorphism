import React from 'react'

import Icon from '@mdi/react'
import {
  mdiEmoticonHappyOutline,
  mdiEmoticonCoolOutline,
  mdiArrowRightBoldBox,
  mdiArrowLeftBoldBox
} from '@mdi/js'
import {
  H3,
  H4,
  H5,
  H6,
  Card,
  Divider,
  Carousel,
  Subtitle1,
  CarouselItem
} from 'ui-neumorphism'

import {
  carouselApi,
  customArrows,
  simpleCarousel,
  customCarousel,
  carouselItemApi
} from '../docs/'

import DocCard from '../containers/DocCard.jsx'
import ApiCard from '../containers/ApiCard.jsx'

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
          className='mt-12'
          url={url + '#L65-L78'}
          title={<H5>Cycle</H5>}
          subtitle={
            <Subtitle1>
              With the <code>cycle</code> the given slides automatically
              transitions to the next, with a default <code>interval</code> of
              5s.
            </Subtitle1>
          }
          content={
            <Card
              flat
              className='d-flex align-center justify-center flex-wrap fill-width'
            >
              <Carousel cycle>
                <CarouselItem style={{ background: 'var(--info)' }}>
                  <H3>Slide 1</H3>
                </CarouselItem>
                <CarouselItem style={{ background: 'var(--error)' }}>
                  <H3>Slide 2</H3>
                </CarouselItem>
                <CarouselItem style={{ background: 'var(--success)' }}>
                  <H3>Slide 3</H3>
                </CarouselItem>
                <CarouselItem style={{ background: 'var(--warning)' }}>
                  <H3>Slide 4</H3>
                </CarouselItem>
              </Carousel>
            </Card>
          }
          code={[simpleCarousel, dark, ['cycle']]}
        />
        <DocCard
          className='mt-12'
          url={url + '#L65-L78'}
          title={<H5>Reverse</H5>}
          subtitle={
            <Subtitle1>
              With the <code>reverse</code> prop, transtion is reversed.
            </Subtitle1>
          }
          content={
            <Card
              flat
              className='d-flex align-center justify-center flex-wrap fill-width'
            >
              <Carousel cycle reverse>
                <CarouselItem style={{ background: 'var(--info)' }}>
                  <H3>Slide 1</H3>
                </CarouselItem>
                <CarouselItem style={{ background: 'var(--error)' }}>
                  <H3>Slide 2</H3>
                </CarouselItem>
                <CarouselItem style={{ background: 'var(--success)' }}>
                  <H3>Slide 3</H3>
                </CarouselItem>
                <CarouselItem style={{ background: 'var(--warning)' }}>
                  <H3>Slide 4</H3>
                </CarouselItem>
              </Carousel>
            </Card>
          }
          code={[simpleCarousel, dark, ['cycle reverse']]}
        />
        <DocCard
          className='mt-12'
          url={url + '#L98-L111'}
          title={<H5>Show arrows</H5>}
          subtitle={
            <Subtitle1>
              Using the <code>showArrows</code> prop, you can show the arrow
              icon buttons.
            </Subtitle1>
          }
          content={
            <Card
              flat
              className='d-flex align-center justify-center flex-wrap fill-width'
            >
              <Carousel showArrows>
                <CarouselItem style={{ background: 'var(--info)' }}>
                  <H3>Slide 1</H3>
                </CarouselItem>
                <CarouselItem style={{ background: 'var(--error)' }}>
                  <H3>Slide 2</H3>
                </CarouselItem>
                <CarouselItem style={{ background: 'var(--success)' }}>
                  <H3>Slide 3</H3>
                </CarouselItem>
                <CarouselItem style={{ background: 'var(--warning)' }}>
                  <H3>Slide 4</H3>
                </CarouselItem>
              </Carousel>
            </Card>
          }
          code={[simpleCarousel, dark, ['showArrows']]}
        />
        <DocCard
          className='mt-12'
          url={url + '#L131-L144'}
          title={<H5>Show arrows on hover</H5>}
          subtitle={
            <Subtitle1>
              Using the <code>showArrowsOnHover</code> prop, the arrow icon
              buttons appear on hover.
            </Subtitle1>
          }
          content={
            <Card
              flat
              className='d-flex align-center justify-center flex-wrap fill-width'
            >
              <Carousel showArrows showArrowsOnHover>
                <CarouselItem style={{ background: 'var(--info)' }}>
                  <H3>Slide 1</H3>
                </CarouselItem>
                <CarouselItem style={{ background: 'var(--error)' }}>
                  <H3>Slide 2</H3>
                </CarouselItem>
                <CarouselItem style={{ background: 'var(--success)' }}>
                  <H3>Slide 3</H3>
                </CarouselItem>
                <CarouselItem style={{ background: 'var(--warning)' }}>
                  <H3>Slide 4</H3>
                </CarouselItem>
              </Carousel>
            </Card>
          }
          code={[simpleCarousel, dark, ['showArrows showArrowsOnHover']]}
        />
        <DocCard
          className='mt-12'
          url={url + '#L163-L176'}
          title={<H5>Hide delimiters</H5>}
          subtitle={
            <Subtitle1>
              Hide the bottom controls using <code>hideDelimiters</code> prop.
            </Subtitle1>
          }
          content={
            <Card
              flat
              className='d-flex align-center justify-center flex-wrap fill-width'
            >
              <Carousel showArrows hideDelimiters>
                <CarouselItem style={{ background: 'var(--info)' }}>
                  <H3>Slide 1</H3>
                </CarouselItem>
                <CarouselItem style={{ background: 'var(--error)' }}>
                  <H3>Slide 2</H3>
                </CarouselItem>
                <CarouselItem style={{ background: 'var(--success)' }}>
                  <H3>Slide 3</H3>
                </CarouselItem>
                <CarouselItem style={{ background: 'var(--warning)' }}>
                  <H3>Slide 4</H3>
                </CarouselItem>
              </Carousel>
            </Card>
          }
          code={[simpleCarousel, dark, ['showArrows hideDelimiters']]}
        />
        <DocCard
          className='mt-12'
          url={url + '#L193-L216'}
          title={<H5>Custom arrow icons</H5>}
          subtitle={
            <Subtitle1>
              You can customize the arrow icons using <code>nextIcon</code>
              &nbsp; for "next" arrow and <code>prevIcon</code> for "prev"
              arrow.
            </Subtitle1>
          }
          content={
            <Card
              flat
              className='d-flex align-center justify-center flex-wrap fill-width'
            >
              <Carousel
                showArrows
                nextIcon={<Icon path={mdiArrowRightBoldBox} size={1} />}
                prevIcon={<Icon path={mdiArrowLeftBoldBox} size={1} />}
              >
                <CarouselItem style={{ background: 'var(--info)' }}>
                  <H3>Slide 1</H3>
                </CarouselItem>
                <CarouselItem style={{ background: 'var(--error)' }}>
                  <H3>Slide 2</H3>
                </CarouselItem>
                <CarouselItem style={{ background: 'var(--success)' }}>
                  <H3>Slide 3</H3>
                </CarouselItem>
                <CarouselItem style={{ background: 'var(--warning)' }}>
                  <H3>Slide 4</H3>
                </CarouselItem>
              </Carousel>
            </Card>
          }
          code={[customArrows, dark]}
        />
        <DocCard
          className='mt-12'
          url={url + '#L234-L263'}
          title={<H5>Custom delimiters</H5>}
          subtitle={
            <Subtitle1>
              You can use anything as the carousel's delimiter icon.
            </Subtitle1>
          }
          content={
            <Card
              flat
              className='d-flex align-center justify-center flex-wrap fill-width'
            >
              <Carousel
                showArrows
                showArrowsOnHover
                activeDelimiterIcon={
                  <Icon
                    path={mdiEmoticonCoolOutline}
                    className='c-pointer ma-3'
                    size={1}
                  />
                }
                delimiterIcon={
                  <Icon
                    path={mdiEmoticonHappyOutline}
                    className='c-pointer ma-3'
                    size={1}
                  />
                }
              >
                <CarouselItem style={{ background: 'var(--info)' }}>
                  <H3>Slide 1</H3>
                </CarouselItem>
                <CarouselItem style={{ background: 'var(--error)' }}>
                  <H3>Slide 2</H3>
                </CarouselItem>
                <CarouselItem style={{ background: 'var(--success)' }}>
                  <H3>Slide 3</H3>
                </CarouselItem>
                <CarouselItem style={{ background: 'var(--warning)' }}>
                  <H3>Slide 4</H3>
                </CarouselItem>
              </Carousel>
            </Card>
          }
          code={[customCarousel, dark]}
        />
        <Divider dense className='mt-6' />
        <H4 className='mt-12'>
          <a href='#api' name='api'>
            API
          </a>
        </H4>
        <ApiCard entity='Carousel' data={carouselApi(dark)} />
        <div className='mt-12'></div>
        <ApiCard entity='CarouselItem' data={carouselItemApi(dark)} />
      </Card>
    )
  }
}

export default CarouselView
