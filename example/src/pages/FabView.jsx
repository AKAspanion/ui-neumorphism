import React from 'react'

import { Card, H4, H5, H6, Subtitle1, Fab } from 'ui-neumorphism'
class FabView extends React.Component {
  render() {
    const { dark: darkTheme } = this.props
    return (
      <Card flat dark={darkTheme}>
        <H4>Floating action button</H4>
        <H6>
          A floating action button (FAB) performs the primary, or most common,
          action on a screen..
        </H6>
        <br />
        <Subtitle1 style={{ marginBottom: '4px' }}>
          A floating action button appears in front of all screen content,
          typically as a circular shape with an icon in its center.
        </Subtitle1>
        <Subtitle1 style={{ marginBottom: '4px' }}>
          Only use a FAB if it is the most suitable way to present a screen’s
          primary action.
        </Subtitle1>
        <Subtitle1 style={{ marginBottom: '4px' }}>
          Only one floating action button is recommended per screen to represent
          the most common action.
        </Subtitle1>
        <br />
        <Card outlined dark={darkTheme}>
          <div
            style={{
              padding: '64px 32px',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <div style={{ padding: '32px' }}>
              <Fab dark={darkTheme}>
                <div style={{ fontSize: '30px', marginBottom: '4px' }}>
                  &#43;
                </div>
              </Fab>
            </div>
            <div style={{ padding: '32px' }}>
              <Fab dark={darkTheme} color='var(--primary)'>
                <span style={{ fontSize: '24px' }}>&#9733;</span>
              </Fab>
            </div>
            <div style={{ padding: '32px' }}>
              <Fab dark={darkTheme} color='#42aaee'>
                <span style={{ fontSize: '24px' }}>&#9729;</span>
              </Fab>
            </div>

            <div style={{ padding: '32px' }}>
              <Fab dark={darkTheme} disabled>
                <span style={{ fontSize: '24px' }}>&#9762;</span>
              </Fab>
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
        <Card outlined dark={darkTheme}>
          <div
            style={{
              padding: '64px 32px',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <div style={{ padding: '32px' }}>
              <Fab dark={darkTheme} size='small'>
                S
              </Fab>
            </div>
            <div style={{ padding: '32px' }}>
              <Fab dark={darkTheme} size='medium'>
                M
              </Fab>
            </div>
            <div style={{ padding: '32px' }}>
              <Fab dark={darkTheme} size='large'>
                L
              </Fab>
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

export default FabView
