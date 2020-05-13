import React from 'react'

import { Card, Button, H4, H6, H5, Subtitle1 } from 'ui-neumorphism'
class ButtonView extends React.Component {
  render() {
    const { dark: darkTheme } = this.props
    return (
      <Card flat dark={darkTheme}>
        <H4>Buttons</H4>
        <H6>
          Buttons allow users to take actions, and make choices, with a single
          tap.
        </H6>
        <br />
        <Subtitle1>
          Buttons communicate actions that users can take.
          <br />
          They are typically placed throughout your UI, in places like:{' '}
          <code>dialog</code>, <code>forms</code>, <code>cards</code>,etc.
        </Subtitle1>
        <br />
        <Card outlined>
          <div
            style={{
              padding: '64px 32px',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-around'
            }}
          >
            <div style={{ padding: '20px' }}>
              <Button dark={darkTheme}>default</Button>
            </div>
            <div style={{ padding: '20px' }}>
              <Button dark={darkTheme} color='var(--primary)'>
                colored
              </Button>
            </div>
            <div style={{ padding: '20px' }}>
              <Button dark={darkTheme} color='#ccc' bgColor='var(--primary)'>
                colored
              </Button>
            </div>
            <div style={{ padding: '20px' }}>
              <Button
                disabled
                color='#ccc'
                dark={darkTheme}
                bgColor='var(--primary)'
              >
                disabled
              </Button>
            </div>

            <div style={{ padding: '20px' }}>
              <Button dark={darkTheme} rounded>
                rounded
              </Button>
            </div>
            <div style={{ padding: '20px' }}>
              <Button dark={darkTheme} depressed>
                depressed
              </Button>
            </div>
            <div style={{ padding: '20px' }}>
              <Button dark={darkTheme} outlined>
                outlined
              </Button>
            </div>
            <div style={{ padding: '20px' }}>
              <Button dark={darkTheme} text>
                text
              </Button>
            </div>
          </div>
        </Card>
        <br />
        <br />
        <br />
        <br />
        <H5 style={{ marginTop: '24px' }}>Contained Buttons</H5>
        <Subtitle1>
          Contained buttons are high-emphasis, distinguished by their use of
          elevation and fill. They contain actions that are primary to your app.
        </Subtitle1>
        <br />
        <Card outlined>
          <div
            style={{
              padding: '32px',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-around'
            }}
          >
            <div style={{ padding: '20px' }}>
              <Button dark={darkTheme}>default</Button>
            </div>
            <div style={{ padding: '20px' }}>
              <Button dark={darkTheme} color='var(--primary)'>
                colored
              </Button>
            </div>
            <div style={{ padding: '20px' }}>
              <Button dark={darkTheme} disabled>
                disabled
              </Button>
            </div>
          </div>
        </Card>
        <br />
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
        <Subtitle1>
          Set <code>text</code> flag to render text button.
        </Subtitle1>
        <br />
        <Card outlined>
          <div
            style={{
              padding: '32px',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-around'
            }}
          >
            <div style={{ padding: '20px' }}>
              <Button dark={darkTheme} text>
                default
              </Button>
            </div>
            <div style={{ padding: '20px' }}>
              <Button dark={darkTheme} text color='var(--primary)'>
                colored
              </Button>
            </div>
            <div style={{ padding: '20px' }}>
              <Button dark={darkTheme} text disabled>
                disabled
              </Button>
            </div>
          </div>
        </Card>
        <br />
        <br />
        <br />
        <H5 style={{ marginTop: '24px' }}>Outlined Buttons</H5>
        <Subtitle1 style={{ marginBottom: '4px' }}>
          Outlined buttons are medium-emphasis buttons. They contain actions
          that are important, but aren’t the primary action in an app.
        </Subtitle1>
        <Subtitle1>
          Set <code>outlined</code> flag to render outlined button.
        </Subtitle1>
        <br />
        <Card outlined>
          <div
            style={{
              padding: '32px',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-around'
            }}
          >
            <div style={{ padding: '20px' }}>
              <Button dark={darkTheme} outlined>
                default
              </Button>
            </div>
            <div style={{ padding: '20px' }}>
              <Button dark={darkTheme} outlined color='var(--primary)'>
                colored
              </Button>
            </div>
            <div style={{ padding: '20px' }}>
              <Button dark={darkTheme} outlined disabled>
                disabled
              </Button>
            </div>
          </div>
        </Card>
        <br />
        <br />
        <br />
        <H5 style={{ marginTop: '24px' }}>Rounded Buttons</H5>
        <Subtitle1 style={{ marginBottom: '4px' }}>
          Rounded buttons are alternate high emphasis buttons with rounded
          corners.
        </Subtitle1>
        <Subtitle1>
          Set <code>rounded</code> flag to render rounded button.
        </Subtitle1>
        <br />
        <Card outlined>
          <div
            style={{
              padding: '32px',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-around'
            }}
          >
            <div style={{ padding: '20px' }}>
              <Button dark={darkTheme} rounded>
                default
              </Button>
            </div>
            <div style={{ padding: '20px' }}>
              <Button dark={darkTheme} rounded color='var(--primary)'>
                colored
              </Button>
            </div>
            <div style={{ padding: '20px' }}>
              <Button dark={darkTheme} rounded disabled>
                disabled
              </Button>
            </div>
          </div>
        </Card>
        <br />
        <br />
        <br />
        <H5 style={{ marginTop: '24px' }}>Depressed Buttons</H5>
        <Subtitle1 style={{ marginBottom: '4px' }}>
          Depressed buttons are alternate buttons with higher elevation removed
          for slightly lower emphasis.
        </Subtitle1>
        <Subtitle1>
          Set <code>depressed</code> flag to render depressed button.
        </Subtitle1>
        <br />
        <Card outlined>
          <div
            style={{
              padding: '32px',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-around'
            }}
          >
            <div style={{ padding: '20px' }}>
              <Button dark={darkTheme} depressed>
                default
              </Button>
            </div>
            <div style={{ padding: '20px' }}>
              <Button dark={darkTheme} depressed color='var(--primary)'>
                colored
              </Button>
            </div>
            <div style={{ padding: '20px' }}>
              <Button dark={darkTheme} depressed disabled>
                disabled
              </Button>
            </div>
          </div>
        </Card>
        <br />
        <br />
        <br />
        <H5 style={{ marginTop: '24px' }}>Sizes</H5>
        <Subtitle1 style={{ marginBottom: '4px' }}>
          Use <code>size</code> property to change button size.
        </Subtitle1>
        <br />
        <Card outlined>
          <div
            style={{
              padding: '32px',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-around'
            }}
          >
            <div style={{ padding: '20px' }}>
              <Button dark={darkTheme} size='small'>
                small
              </Button>
            </div>
            <div style={{ padding: '20px' }}>
              <Button dark={darkTheme} size='medium'>
                medium
              </Button>
            </div>
            <div style={{ padding: '20px' }}>
              <Button dark={darkTheme} size='large'>
                large
              </Button>
            </div>
          </div>
        </Card>
        <br />
        <br />
        <br />
        <H5>API</H5>
        <Subtitle1>Coming soon..</Subtitle1>
      </Card>
    )
  }
}

export default ButtonView
