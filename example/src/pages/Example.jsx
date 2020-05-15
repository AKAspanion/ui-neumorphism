import React from 'react'

import Icon from '@mdi/react'
import { mdiAccount } from '@mdi/js'

import { Subtitle2, H4, H6, Caption, Card, ButtonToggle } from 'ui-neumorphism'
class Example extends React.Component {
  render() {
    const { dark } = this.props
    console.log(dark)
    return (
      <Card
        rounded
        dark={dark}
        style={{
          overflow: 'hidden',
          width: '300px',
          height: '600px',
          padding: '24px'
        }}
      >
        <H4 style={{ fontWeight: '500', marginTop: '8px' }}>Program</H4>
        <div
          style={{
            display: 'flex',
            marginTop: '8px',
            justifyContent: 'space-between'
          }}
        >
          <Card
            elevation='2'
            dark={dark}
            style={{ padding: '16px', width: '116px', margin: '16px 0px' }}
          >
            <Card
              outlined
              style={{ width: '32px', height: '32px', marginBottom: '8px' }}
            >
              <Icon
                path={mdiAccount}
                size={1}
                horizontal
                vertical
                rotate={90}
                color='red'
              />
            </Card>
            <Subtitle2>Arm</Subtitle2>
            <Subtitle2 style={{ marginBottom: '8px' }}>training</Subtitle2>
            <Caption secondary>In progress..</Caption>
          </Card>
          <Card
            elevation='2'
            dark={dark}
            style={{ padding: '16px', width: '116px', margin: '16px 0px' }}
          >
            <Card
              outlined
              style={{ width: '32px', height: '32px', marginBottom: '8px' }}
            ></Card>
            <Subtitle2>Weight</Subtitle2>
            <Subtitle2 style={{ marginBottom: '8px' }}>training</Subtitle2>
            <Caption secondary>Have finished</Caption>
          </Card>
        </div>
        <div
          style={{
            display: 'flex',
            marginTop: '4px',
            justifyContent: 'space-between'
          }}
        >
          <Card
            elevation='2'
            dark={dark}
            style={{ padding: '16px', width: '116px', margin: '0px' }}
          >
            <Card
              outlined
              style={{ width: '32px', height: '32px', marginBottom: '8px' }}
            ></Card>
            <Subtitle2>Run</Subtitle2>
            <Subtitle2 style={{ marginBottom: '8px' }}>training</Subtitle2>
            <Caption secondary>In progress..</Caption>
          </Card>
          <Card
            elevation='2'
            dark={dark}
            style={{ padding: '16px', width: '116px', margin: '0px' }}
          >
            <Card
              outlined
              style={{ width: '32px', height: '32px', marginBottom: '8px' }}
            ></Card>
            <Subtitle2>Yoga</Subtitle2>
            <Subtitle2 style={{ marginBottom: '8px' }}>training</Subtitle2>
            <Caption secondary>No task</Caption>
          </Card>
        </div>
        <H6 style={{ margin: '32px 0px 16px 0px' }}>Courses Collection</H6>
        <Card rounded={false} elevation='2' style={{ padding: '16px' }}>
          <div
            style={{
              display: 'flex'
            }}
          >
            <Card
              dark={dark}
              outlined
              style={{ width: '42px', height: '42px' }}
            ></Card>
            <Card dark={dark} flat style={{ marginLeft: '16px' }}>
              <Subtitle2 style={{ margin: '0px 0px' }}>
                Courses I attended
              </Subtitle2>
              <Caption secondary>
                11 courses in total
                <ButtonToggle
                  style={{ marginLeft: '24px' }}
                  rounded={true}
                  dark={dark}
                  size='small'
                >
                  >
                </ButtonToggle>
              </Caption>
            </Card>
          </div>
        </Card>
        <div
          style={{
            display: 'flex',
            width: '300px',
            padding: '16px 24px',
            margin: '8px 0px',
            position: 'relative',
            left: '-24px',
            background: 'var(--bg-color)',
            justifyContent: 'space-between'
          }}
        >
          <ButtonToggle dark={dark}>A</ButtonToggle>
          <ButtonToggle dark={dark}>B</ButtonToggle>
          <ButtonToggle dark={dark}>C</ButtonToggle>
          <ButtonToggle dark={dark}>D</ButtonToggle>
        </div>
      </Card>
    )
  }
}

export default Example
