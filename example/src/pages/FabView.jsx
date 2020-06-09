import React from 'react'

import { Card, H4, H5, H6, Subtitle1, Divider, Fab } from 'ui-neumorphism'

import DocCard from '../containers/DocCard.jsx'
import ApiCard from '../containers/ApiCard.jsx'
import { fabButtons, fabPosButtons, fabButtonApi } from '../docs/'

const url =
  'https://github.com/AKAspanion/ui-neumorphism/blob/master/example/src/pages/FabView.jsx'

class FabView extends React.Component {
  render() {
    const { dark } = this.props
    return (
      <Card flat dark={dark}>
        <H4>
          <a href='#component' name='component'>
            Floating action button
          </a>
        </H4>
        <H6>
          A floating action button (FAB) performs the primary, or most common,
          action on a screen.
        </H6>
        <Subtitle1 className='mt-3'>
          A floating action button appears in front of all screen content,
          typically as a circular shape with an icon in its center.
          <br />
          Only use a FAB if it is the most suitable way to present a screen’s
          primary action.
          <br />
          Only one floating action button is recommended per screen to represent
          the most common action.
        </Subtitle1>
        <DocCard
          url={url}
          content={
            <Card
              flat
              outlined={false}
              className='d-flex justify-center align-center flex-wrap'
            >
              <Fab className='pa-8'>
                <span style={{ fontSize: '30px', margin: '2px 0px 0px 2px' }}>
                  &#43;
                </span>
              </Fab>
              <Fab className='pa-8' color='var(--primary)'>
                <span style={{ fontSize: '24px' }}>&#9733;</span>
              </Fab>
              <Fab className='pa-8' color='#299ae6'>
                &nbsp;<span style={{ fontSize: '24px' }}>&#9729;</span>&nbsp;
                Extended&nbsp;
              </Fab>
              <Fab className='pa-8' disabled>
                <span style={{ fontSize: '24px' }}>&#9762;</span>
              </Fab>
            </Card>
          }
          code={[fabButtons, dark, ['main']]}
        />
        <DocCard
          url={url}
          className='mt-12'
          title={<H5>Sizes</H5>}
          subtitle={
            <Subtitle1>
              Use <code>size</code> property to change button size.
            </Subtitle1>
          }
          content={
            <Card
              flat
              outlined={false}
              className='d-flex justify-center align-center flex-wrap'
            >
              <Fab className='pa-8' size='small'>
                S
              </Fab>
              <Fab className='pa-8' size='medium'>
                M
              </Fab>
              <Fab className='pa-8' size='large'>
                L
              </Fab>
            </Card>
          }
          code={[fabButtons, dark, ['size']]}
        />
        <DocCard
          url={url}
          className='mt-12'
          title={<H5>Position</H5>}
          subtitle={
            <Subtitle1>
              Use the <code>fixed</code> or <code>absolute</code> prop along
              with <code>top</code>, <code>left</code>, <code>right</code>,
              or&nbsp;
              <code>bottom</code>, to postion the button anywhere inside a
              container.
            </Subtitle1>
          }
          content={
            <Card
              flat
              outlined={false}
              style={{ position: 'relative', height: '300px' }}
              className='d-flex fill-width justify-center align-center flex-wrap mx-3'
            >
              <Fab absolute top left>
                A
              </Fab>
              <Fab absolute top right>
                B
              </Fab>
              <Fab absolute bottom left>
                C
              </Fab>
              <Fab absolute bottom right>
                D
              </Fab>
            </Card>
          }
          code={[fabPosButtons, dark, ['size']]}
        />
        <Divider dense className='mt-6' />
        <H4 className='mt-12'>
          <a href='#api' name='api'>
            API
          </a>
        </H4>
        <ApiCard entity='Fab' data={fabButtonApi(dark)} />
      </Card>
    )
  }
}

export default FabView
