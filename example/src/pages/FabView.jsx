import React from 'react'

import { Card, H4, H5, H6, Subtitle1, Fab } from 'ui-neumorphism'
import CodeBlock from '../containers/CodeBlock.jsx'
import { fabButtons } from '../assets/'
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
        <br />
        <Card outlined className='d-flex justify-center'>
          <Card flat outlined={false} className='py-12'>
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
        </Card>
        <CodeBlock lang='html'>{fabButtons(dark, 'main')}</CodeBlock>
        <br />
        <br />
        <H5 className='mt-6'>Sizes</H5>
        <Subtitle1 className='mb-1'>
          Use <code>size</code> property to change button size.
        </Subtitle1>
        <br />
        <Card outlined className='d-flex justify-center'>
          <Card flat outlined={false} className='py-12'>
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
        </Card>
        <CodeBlock lang='html'>{fabButtons(dark, 'size')}</CodeBlock>
        <br />
        <br />
        <H5>API</H5>
        <Subtitle1>Coming soon..</Subtitle1>
      </Card>
    )
  }
}

export default FabView
