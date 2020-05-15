import React from 'react'

import Icon from '@mdi/react'
import {
  mdiArmFlex,
  mdiDumbbell,
  mdiRun,
  mdiYoga,
  mdiHome,
  mdiBell,
  mdiTicket,
  mdiAccount,
  mdiChartLine,
  mdiChevronRight
} from '@mdi/js'

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
              flat
              style={{
                width: '32px',
                height: '32px',
                marginBottom: '8px',
                paddingTop: '4px'
              }}
            >
              <Icon path={mdiArmFlex} size={1} color='var(--primary)' />
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
              flat
              style={{
                width: '32px',
                height: '32px',
                marginBottom: '8px',
                paddingTop: '4px'
              }}
            >
              <Icon path={mdiDumbbell} size={1} color='var(--primary)' />
            </Card>
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
              flat
              style={{
                width: '32px',
                height: '32px',
                marginBottom: '8px',
                paddingTop: '4px'
              }}
            >
              <Icon path={mdiRun} size={1} color='var(--primary)' />
            </Card>
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
              flat
              style={{
                width: '32px',
                height: '32px',
                marginBottom: '8px',
                paddingTop: '4px'
              }}
            >
              <Icon path={mdiYoga} size={1} color='var(--primary)' />
            </Card>
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
              outlined
              dark={dark}
              style={{ padding: '4px', width: '46px', height: '46px' }}
            >
              <Icon path={mdiTicket} size={1.5} color='var(--primary)' />
            </Card>
            <Card dark={dark} flat style={{ marginLeft: '12px' }}>
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
                  <Icon
                    path={mdiChevronRight}
                    size={0.7}
                    color='var(--primary)'
                  />
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
          <ButtonToggle active dark={dark}>
            <Icon path={mdiHome} size={0.9} color='var(--primary)' />
          </ButtonToggle>
          <ButtonToggle dark={dark}>
            <Icon
              path={mdiChartLine}
              size={0.8}
              color={dark ? 'var(--white)' : 'var(--black)'}
            />
          </ButtonToggle>
          <ButtonToggle dark={dark}>
            <Icon
              path={mdiBell}
              size={0.8}
              color={dark ? 'var(--white)' : 'var(--black)'}
            />
          </ButtonToggle>
          <ButtonToggle dark={dark}>
            <Icon
              path={mdiAccount}
              size={0.9}
              color={dark ? 'var(--white)' : 'var(--black)'}
            />
          </ButtonToggle>
        </div>
      </Card>
    )
  }
}

export default Example
