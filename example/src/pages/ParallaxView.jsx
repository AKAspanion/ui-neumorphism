import React from 'react'

import { Card, H4, H5, H6, Parallax, Subtitle1, Divider } from 'ui-neumorphism'

import { parallaxApi, simpleParallax } from '../docs/'

import DocCard from '../containers/DocCard.jsx'
import ApiCard from '../containers/ApiCard.jsx'

const url =
  'https://github.com/AKAspanion/ui-neumorphism/blob/master/example/src/pages/ParallaxView.jsx'
class ParallaxView extends React.Component {
  render() {
    const { dark } = this.props
    return (
      <Card flat dark={dark}>
        <H4>
          <a href='#component' name='component'>
            Parallax
          </a>
        </H4>
        <H6>
          The Parallax component creates a 3D effect that makes an image appear
          to scroll slower than the window.
        </H6>
        <Subtitle1 className='mt-3'>
          A parallax causes a shift in a background image when the user scrolls
          the page.
        </Subtitle1>
        <DocCard
          url={url + '#L47'}
          className='mt-12'
          title={<H5>Simple parallax</H5>}
          subtitle={
            <Subtitle1>
              Parallax component finds the component in DOM having id of
              name&nbsp;<code>containerId</code>, if found hooks the scroll
              event to it, or else uses the document scroll event.
            </Subtitle1>
          }
          content={
            <Card
              flat
              style={{ width: '100%' }}
              className='ma-6 d-flex align-center justify-center flex-wrap'
            >
              <Parallax src='images/dessert-night.jpg' containerId='mainView' />
            </Card>
          }
          code={[simpleParallax, dark]}
        />
        <DocCard
          className='mt-12'
          url={url + '#L71-L75'}
          title={<H5>Parallax speed</H5>}
          subtitle={
            <Subtitle1>
              You can specify a parallax <code>speed</code> multiplier to
              specify how fast image scrolls past.
              <br />
              Keep in mind this can break the parallax if speed is too high or
              low.
            </Subtitle1>
          }
          content={
            <Card
              flat
              style={{ width: '100%' }}
              className='ma-6 d-flex align-center justify-center flex-wrap'
            >
              <Parallax
                src='images/dessert-night.jpg'
                containerId='mainView'
                speed={0.25}
              />
            </Card>
          }
          code={[simpleParallax, dark, ['speed={0.25}']]}
        />
        <DocCard
          className='mt-12'
          url={url + '#L98-L102'}
          title={<H5>Custom height</H5>}
          subtitle={
            <Subtitle1>
              You can specify a custom height on a parallax.
              <br />
              Keep in mind this can break the parallax if your image is not
              sized properly.
            </Subtitle1>
          }
          content={
            <Card
              flat
              style={{ width: '100%' }}
              className='ma-6 d-flex align-center justify-center flex-wrap'
            >
              <Parallax
                src='images/dessert-night.jpg'
                containerId='mainView'
                height={700}
              />
            </Card>
          }
          code={[simpleParallax, dark, ['height={700}']]}
        />
        <Divider dense className='mt-6' />
        <H4 className='mt-12'>
          <a href='#api' name='api'>
            API
          </a>
        </H4>
        <ApiCard entity='Parallax' data={parallaxApi(dark)} />
      </Card>
    )
  }
}

export default ParallaxView
