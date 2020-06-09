import React from 'react'

import { Card, Button, H4, H6, H5, Divider, Subtitle1 } from 'ui-neumorphism'

import DocCard from '../containers/DocCard.jsx'
import ApiCard from '../containers/ApiCard.jsx'
import { allButtons, docButtons, blockButton, sizeButtons, buttonApi } from '../docs/'

const url =
  'https://github.com/AKAspanion/ui-neumorphism/blob/master/example/src/pages/ButtonView.jsx'

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
        <Subtitle1 className='mt-3'>
          They are typically placed throughout your UI, in places like:&nbsp;
          <code>forms</code>, <code>cards</code>, etc.
        </Subtitle1>
        <DocCard
          url={url}
          content={
            <Card flat className='d-flex align-center justify-center flex-wrap'>
              <Button className='ma-8'>default</Button>
              <Button className='ma-8' color='var(--primary)'>
                colored
              </Button>
              <Button className='ma-8' color='#ccc' bgColor='var(--primary)'>
                colored
              </Button>
              <Button className='ma-8' disabled>
                disabled
              </Button>
              <Button className='ma-8' rounded>
                rounded
              </Button>
              <Button className='ma-8' depressed>
                depressed
              </Button>
              <Button className='ma-8' outlined>
                outlined
              </Button>
              <Button className='ma-8' text>
                text
              </Button>
            </Card>
          }
          code={[allButtons, dark]}
        />
        <DocCard
          url={url}
          className='mt-12'
          title={<H5>Contained buttons</H5>}
          subtitle={
            <Subtitle1>
              Contained buttons are high-emphasis, distinguished by their use of
              elevation. They contain actions that are primary to your app.
            </Subtitle1>
          }
          content={
            <Card flat className='d-flex align-center justify-center flex-wrap'>
              <Button className='ma-8'>default</Button>
              <Button className='ma-8' color='var(--primary)'>
                colored
              </Button>
              <Button className='ma-8' disabled>
                disabled
              </Button>
            </Card>
          }
          code={[docButtons, dark]}
        />
        <DocCard
          url={url}
          className='mt-12'
          title={<H5>Text buttons</H5>}
          subtitle={
            <Subtitle1>
              Text buttons are typically used for less-pronounced actions, to
              help maintain an emphasis on content.
            </Subtitle1>
          }
          content={
            <Card flat className='d-flex align-center justify-center flex-wrap'>
              <Button className='ma-8' text>
                default
              </Button>
              <Button className='ma-8' text color='var(--primary)'>
                colored
              </Button>
              <Button className='ma-8' text disabled>
                disabled
              </Button>
            </Card>
          }
          code={[docButtons, dark, ['text']]}
        />
        <DocCard
          url={url}
          className='mt-12'
          title={<H5>Outlined buttons</H5>}
          subtitle={
            <Subtitle1>
              Outlined buttons are medium-emphasis buttons. They contain actions
              that are important, but aren’t the primary action in an app.
            </Subtitle1>
          }
          content={
            <Card flat className='d-flex align-center justify-center flex-wrap'>
              <Button className='ma-8' outlined>
                default
              </Button>
              <Button className='ma-8' outlined color='var(--primary)'>
                colored
              </Button>
              <Button className='ma-8' outlined disabled>
                disabled
              </Button>
            </Card>
          }
          code={[docButtons, dark, ['outlined']]}
        />
        <DocCard
          url={url}
          className='mt-12'
          title={<H5>Rounded buttons</H5>}
          subtitle={
            <Subtitle1>
              Rounded buttons are alternate high emphasis buttons with rounded
              corners.
            </Subtitle1>
          }
          content={
            <Card flat className='d-flex align-center justify-center flex-wrap'>
              <Button className='ma-8' rounded>
                default
              </Button>
              <Button className='ma-8' rounded color='var(--primary)'>
                colored
              </Button>
              <Button className='ma-8' rounded disabled>
                disabled
              </Button>
            </Card>
          }
          code={[docButtons, dark, ['rounded']]}
        />
        <DocCard
          url={url}
          className='mt-12'
          title={<H5>Depressed buttons</H5>}
          subtitle={
            <Subtitle1>
              Depressed buttons are alternate buttons with medium elevation for
              slightly lower emphasis.
            </Subtitle1>
          }
          content={
            <Card flat className='d-flex align-center justify-center flex-wrap'>
              <Button className='ma-8' depressed>
                default
              </Button>
              <Button className='ma-8' depressed color='var(--primary)'>
                colored
              </Button>
              <Button className='ma-8' depressed disabled>
                disabled
              </Button>
            </Card>
          }
          code={[docButtons, dark, ['depressed']]}
        />
        <DocCard
          url={url}
          className='mt-12'
          title={<H5>Block button</H5>}
          subtitle={
            <Subtitle1>Block buttons take up entire available space.</Subtitle1>
          }
          content={
            <Card flat className='pa-8 fill-width' sty>
              <Button block>block button</Button>
            </Card>
          }
          code={[blockButton, dark]}
        />
        <DocCard
          url={url}
          className='mt-12'
          title={<H5>Sizes</H5>}
          subtitle={
            <Subtitle1>
              Use <code>size</code> prop to change button size.
            </Subtitle1>
          }
          content={
            <Card flat className='d-flex align-center justify-center flex-wrap'>
              <Button className='ma-8' size='small'>
                small
              </Button>
              <Button className='ma-8' size='medium'>
                medium
              </Button>
              <Button className='ma-8' size='large'>
                large
              </Button>
            </Card>
          }
          code={[sizeButtons, dark]}
        />
        <Divider dense className='mt-6' />
        <H4 className='mt-12'>
          <a href='#api' name='api'>
            API
          </a>
        </H4>
        <ApiCard entity='Button' data={buttonApi(dark)} />
      </Card>
    )
  }
}

export default ButtonView
