import React from 'react'

import { Card, H4, H5, H6, Subtitle1, Fab } from 'ui-neumorphism'

import DocCard from '../containers/DocCard.jsx'
import { fabButtons } from '../assets/'

const url =
  'https://github.com/AKAspanion/ui-neumorphism/blob/master/example/src/pages/FabView.jsx'

class FabView extends React.Component {
  render() {
    const { dark } = this.props
    return (
      <Card flat dark={dark}>
        <H4>Floating action button</H4>
        <H6>
          A floating action button (FAB) performs the primary, or most common,
          action on a screen.
        </H6>
        <br />
        <Subtitle1 className='mb-1'>
          A floating action button appears in front of all screen content,
          typically as a circular shape with an icon in its center.
        </Subtitle1>
        <Subtitle1 className='mb-1'>
          Only use a FAB if it is the most suitable way to present a screen’s
          primary action.
        </Subtitle1>
        <Subtitle1 className='mb-1'>
          Only one floating action button is recommended per screen to represent
          the most common action.
        </Subtitle1>
        <DocCard
          url={url}
          content={
            <Card flat outlined={false}>
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
            <Card flat outlined={false}>
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
        <br />
        <br />
        <H5>API</H5>
        <Subtitle1>Coming soon..</Subtitle1>
      </Card>
    )
  }
}

export default FabView
