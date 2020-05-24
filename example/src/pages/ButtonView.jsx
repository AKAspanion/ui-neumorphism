import React from 'react'

import { Card, Button, H4, H6, H5, Subtitle1 } from 'ui-neumorphism'
import CodeBlock from '../containers/CodeBlock.jsx'

import { allButtons, docButtons, blockButton, sizeButtons } from '../assets/'
class ButtonView extends React.Component {
  render() {
    const { dark } = this.props
    return (
      <Card flat dark={dark}>
        <H4>Buttons</H4>
        <H6>
          Buttons allow users to take actions, and make choices, with a single
          tap.
        </H6>
        <br />
        <Subtitle1>
          Buttons communicate actions that users can take.
          <br />
          They are typically placed throughout your UI, in places like:&nbsp;
          <code>dialog</code>, <code>forms</code>, <code>cards</code>,etc.
        </Subtitle1>
        <br />
        <Card outlined>
          <Card flat outlined={false} className='btn-doc-card'>
            <Button className='doc-btn'>default</Button>
            <Button className='doc-btn' color='var(--primary)'>
              colored
            </Button>
            <Button className='doc-btn' color='#ccc' bgColor='var(--primary)'>
              colored
            </Button>
            <Button className='doc-btn' disabled>
              disabled
            </Button>
            <Button className='doc-btn' rounded>
              rounded
            </Button>
            <Button className='doc-btn' depressed>
              depressed
            </Button>
            <Button className='doc-btn' outlined>
              outlined
            </Button>
            <Button className='doc-btn' text>
              text
            </Button>
          </Card>
          <CodeBlock lang='html'>{allButtons(dark)}</CodeBlock>
        </Card>
        <br />
        <br />
        <H5 style={{ marginTop: '24px' }}>Contained Buttons</H5>
        <Subtitle1>
          Contained buttons are high-emphasis, distinguished by their use of
          elevation. They contain actions that are primary to your app.
        </Subtitle1>
        <br />
        <Card outlined>
          <Card flat outlined={false} className='btn-doc-card'>
            <Button className='doc-btn'>default</Button>
            <Button className='doc-btn' color='var(--primary)'>
              colored
            </Button>
            <Button className='doc-btn' disabled>
              disabled
            </Button>
          </Card>
          <CodeBlock lang='html'>{docButtons(dark)}</CodeBlock>
        </Card>
        <br />
        <br />
        <H5 style={{ marginTop: '24px' }}>Text Buttons</H5>
        <Subtitle1 style={{ marginBottom: '4px' }}>
          Text buttons are typically used for less-pronounced actions, to help
          maintain an emphasis on content.
        </Subtitle1>
        <Subtitle1 style={{ marginBottom: '16px' }}>
          For.eg. <code>dialog</code>, <code>cards</code>
        </Subtitle1>
        <Card outlined>
          <Card flat outlined={false} className='btn-doc-card'>
            <Button className='doc-btn' text>
              default
            </Button>
            <Button className='doc-btn' text color='var(--primary)'>
              colored
            </Button>
            <Button className='doc-btn' text disabled>
              disabled
            </Button>
          </Card>
          <CodeBlock lang='html'>{docButtons(dark, 'text')}</CodeBlock>
        </Card>
        <br />
        <br />
        <H5 style={{ marginTop: '24px' }}>Outlined Buttons</H5>
        <Subtitle1 style={{ marginBottom: '16px' }}>
          Outlined buttons are medium-emphasis buttons. They contain actions
          that are important, but aren’t the primary action in an app.
        </Subtitle1>
        <Card outlined>
          <Card flat outlined={false} className='btn-doc-card'>
            <Button className='doc-btn' outlined>
              default
            </Button>
            <Button className='doc-btn' outlined color='var(--primary)'>
              colored
            </Button>
            <Button className='doc-btn' outlined disabled>
              disabled
            </Button>
          </Card>
          <CodeBlock lang='html'>{docButtons(dark, 'outlined')}</CodeBlock>
        </Card>
        <br />
        <br />
        <H5 style={{ marginTop: '24px' }}>Rounded Buttons</H5>
        <Subtitle1 style={{ marginBottom: '16px' }}>
          Rounded buttons are alternate high emphasis buttons with rounded
          corners.
        </Subtitle1>
        <Card outlined>
          <Card flat outlined={false} className='btn-doc-card'>
            <Button className='doc-btn' rounded>
              default
            </Button>
            <Button className='doc-btn' rounded color='var(--primary)'>
              colored
            </Button>
            <Button className='doc-btn' rounded disabled>
              disabled
            </Button>
          </Card>
          <CodeBlock lang='html'>{docButtons(dark, 'rounded')}</CodeBlock>
        </Card>
        <br />
        <br />
        <H5 style={{ marginTop: '24px' }}>Depressed Buttons</H5>
        <Subtitle1 style={{ marginBottom: '16px' }}>
          Depressed buttons are alternate buttons with higher elevation removed
          for slightly lower emphasis.
        </Subtitle1>
        <Card outlined>
          <Card flat outlined={false} className='btn-doc-card'>
            <Button className='doc-btn' depressed>
              default
            </Button>
            <Button className='doc-btn' depressed color='var(--primary)'>
              colored
            </Button>
            <Button className='doc-btn' depressed disabled>
              disabled
            </Button>
          </Card>
          <CodeBlock lang='html'>{docButtons(dark, 'depressed')}</CodeBlock>
        </Card>
        <br />
        <br />
        <H5 style={{ marginTop: '24px' }}>Block Buttons</H5>
        <Subtitle1 style={{ marginBottom: '16px' }}>
          Block buttons take up entire available space.
        </Subtitle1>
        <Card outlined>
          <div
            style={{
              padding: '32px'
            }}
          >
            <Button dark={dark} className='doc-btn' block>
              block button
            </Button>
          </div>
          <CodeBlock lang='html'>{blockButton(dark)}</CodeBlock>
        </Card>
        <br />
        <br />
        <H5 style={{ marginTop: '24px' }}>Sizes</H5>
        <Subtitle1 style={{ marginBottom: '16px' }}>
          Use <code>size</code> property to change button size.
        </Subtitle1>
        <Card outlined>
          <Card flat outlined={false} className='btn-doc-card'>
            <Button className='doc-btn' size='small'>
              small
            </Button>
            <Button className='doc-btn' size='medium'>
              medium
            </Button>
            <Button className='doc-btn' size='large'>
              large
            </Button>
          </Card>
          <CodeBlock lang='html'>{sizeButtons(dark)}</CodeBlock>
        </Card>
        <br />
        <br />
        <H5>API</H5>
        <Subtitle1>Coming soon..</Subtitle1>
      </Card>
    )
  }
}

export default ButtonView
