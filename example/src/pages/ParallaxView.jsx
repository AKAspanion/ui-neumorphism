import React from 'react'

import { Card, H4, H6, Parallax } from 'ui-neumorphism'

// import { toggle, toggleLabel, switchApi } from '../docs/'

import DocCard from '../containers/DocCard.jsx'
// import ApiCard from '../containers/ApiCard.jsx'

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
          The Parallax component creates a 3d effect that makes an image appear
          to scroll slower than the window.
        </H6>
        <DocCard
          url={url}
          content={
            <Card
              flat
              style={{ width: '100%' }}
              className='ma-6 d-flex align-center justify-center flex-wrap'
            >
              <Parallax
                src='https://cdn.vuetifyjs.com/images/parallax/material.jpg'
                containerId='mainView'
              />
            </Card>
          }
        />
        <DocCard
          url={url}
          content={
            <Card
              flat
              style={{ width: '100%' }}
              className='ma-6 d-flex align-center justify-center flex-wrap'
            >
              <Parallax
                src='https://cdn.vuetifyjs.com/images/parallax/material.jpg'
                containerId='mainView'
                height={700}
              />
            </Card>
          }
        />
        <DocCard
          url={url}
          content={
            <Card
              flat
              style={{ width: '100%' }}
              className='ma-6 d-flex align-center justify-center flex-wrap'
            >
              <Parallax
                src='https://cdn.vuetifyjs.com/images/parallax/material.jpg'
                containerId='mainView'
                height={700}
              />
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

export default ParallaxView
