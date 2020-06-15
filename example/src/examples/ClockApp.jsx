import React from 'react'

import Icon from '@mdi/react'
import {
  mdiCog,
  mdiAlarm,
  mdiCameraTimer,
  mdiTimerOutline,
  mdiClockOutline
} from '@mdi/js'

import {
  H4,
  H5,
  Card,
  Body2,
  Spacer,
  Button,
  Switch,
  Caption,
  Subtitle1,
  IconButton,
  withResize,
  ToggleButton,
  ToggleButtonGroup
} from 'ui-neumorphism'
class ClockApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      timerActive: false,
      timerInterval: null,
      timerTime: {
        hour: 1,
        minute: 0,
        second: 0
      }
    }
  }

  get timerCountDown() {
    let { hour, minute, second } = this.state.timerTime
    hour = String(hour)
    minute = String(minute)
    second = String(second)
    hour = hour.length === 1 ? '0' + hour : hour
    minute = minute.length === 1 ? '0' + minute : minute
    second = second.length === 1 ? '0' + second : second
    return `${hour}:${minute}:${second}`
  }

  get date() {
    const today = new Date()
    const h = (today.getHours() % 12) + today.getMinutes() / 59
    const m = today.getMinutes()
    const s = today.getSeconds()

    return { h, m, s }
  }

  clock(hours, minutes, seconds) {
    const { h, m, s } = this.date

    this.rotate(hours, h * 30)
    this.rotate(minutes, m * 6)
    this.rotate(seconds, s * 6)
  }

  rotate(target, val) {
    target.style.transform = `rotate(${val}deg)`
  }

  countDownTimer() {
    let { hour, minute, second } = this.state.timerTime
    second -= 1
    if (second === -1) {
      second = 59
      minute -= 1
    }
    if (minute === -1) {
      minute = 59
      hour -= 1
    }
    if (hour === -1) {
      this.onTimer(false)
    }
    this.setState({ timerTime: { hour, minute, second } })
  }

  topBar(title) {
    return (
      <Card flat className='d-flex align-center'>
        <H4 style={{ fontWeight: '500' }}>{title}</H4>
        <Spacer />
        <IconButton rounded size='small' text={false} color='grey'>
          <Icon path={mdiCog} size={0.8} />
        </IconButton>
      </Card>
    )
  }

  lapCard(val) {
    return (
      <Card
        key={val}
        rounded={false}
        className='mt-6 px-4 py-3 d-flex align-center justify-space-between'
      >
        <Card flat className='d-flex align-center'>
          <Subtitle1 style={{ fontWeight: '700' }}>{val}</Subtitle1>
          <Subtitle1 secondary style={{ fontWeight: '700', color: 'grey' }}>
            &nbsp;Lap
          </Subtitle1>
        </Card>
        <Subtitle1 style={{ fontWeight: '700' }}>00:60:00</Subtitle1>
      </Card>
    )
  }

  toggleGroup(val) {
    return (
      <ToggleButtonGroup
        value={val}
        color='grey'
        rounded={false}
        style={{ width: '252px' }}
        className='mt-4 d-flex justify-space-between clock-app-toggle'
      >
        <ToggleButton value='1' text={false}>
          <Icon path={mdiClockOutline} size={0.9} />
        </ToggleButton>
        <ToggleButton value='2' text={false}>
          <Icon path={mdiAlarm} size={0.8} />
        </ToggleButton>
        <ToggleButton value='3' text={false}>
          <Icon path={mdiTimerOutline} size={0.8} />
        </ToggleButton>
        <ToggleButton value='4' text={false}>
          <Icon path={mdiCameraTimer} size={0.9} />
        </ToggleButton>
      </ToggleButtonGroup>
    )
  }

  onTimer(timerActive) {
    let { timerInterval } = this.state
    if (timerActive && !timerInterval) {
      const timer = setInterval(() => {
        this.countDownTimer()
      }, 1000)
      this.setState({ timerInterval: timer })
    }
    if (!timerActive) {
      clearInterval(timerInterval)
      this.setState({ timerInterval: null })
      this.setState({ timerTime: { hour: 1, minute: 0, second: 0 } })
    }
    this.setState({ timerActive })
  }

  componentDidMount() {
    const hours = document.querySelector('.clock-hours')
    const minutes = document.querySelector('.clock-minutes')
    const seconds = document.querySelector('.clock-seconds')
    setInterval(() => {
      this.clock(hours, minutes, seconds)
    }, 500)
  }

  render() {
    const { dark, size } = this.props
    const { timerActive } = this.state
    return (
      <Card flat dark={dark}>
        <Card
          flat
          className='p-relative d-flex overflow-hidden flex-wrap align-center justify-center'
        >
          <Card
            rounded
            width={300}
            height={600}
            className={`${size === 'xs' ? '' : 'mx-8'} p-relative pa-6 my-4`}
          >
            {this.topBar('Clock')}
            <Card flat className='d-flex justify-center'>
              <Card
                width={208}
                height={208}
                elevation={3}
                style={{ borderRadius: '208px' }}
                className='mt-8 d-flex align-center justify-center p-relative'
              >
                <Card
                  width={100}
                  height={100}
                  elevation={1}
                  style={{ borderRadius: '100px' }}
                  className='p-relative d-flex align-center justify-center'
                >
                  <div className='clock-hand clock-hours'></div>
                  <div className='clock-hand clock-minutes'></div>
                  <div className='clock-hand clock-seconds'></div>
                  <div className='p-absolute clock-point'></div>
                </Card>
                <span className='p-absolute marker--1'></span>
                <span className='p-absolute marker--2'></span>
                <span className='p-absolute marker--3'></span>
                <span className='p-absolute marker--4'></span>
              </Card>
            </Card>
            <Card
              rounded={false}
              className='mt-10 py-1 pl-4 pr-0 d-flex align-center justify-space-between'
            >
              <Card flat className='d-flex align-center'>
                <Subtitle1 style={{ fontWeight: '700' }}>5:00</Subtitle1>
                <Caption secondary style={{ fontWeight: '700', color: 'grey' }}>
                  &nbsp;am
                </Caption>
              </Card>
              <Switch checked />
            </Card>
            <Card
              rounded={false}
              className='mt-6 py-1 pl-4 pr-0 d-flex align-center justify-space-between'
            >
              <Card flat className='d-flex align-center'>
                <Subtitle1 style={{ fontWeight: '700' }}>6:00</Subtitle1>
                <Caption secondary style={{ fontWeight: '700', color: 'grey' }}>
                  &nbsp;am
                </Caption>
              </Card>
              <Switch />
            </Card>

            {this.toggleGroup('2')}
          </Card>
          <Card
            rounded
            width={300}
            height={600}
            className={`${size === 'xs' ? '' : 'mx-8'} p-relative pa-6 my-4`}
          >
            {this.topBar('Timer')}
            <Card flat className='d-flex justify-center'>
              <Card
                width={208}
                height={208}
                elevation={3}
                className='mt-8 d-flex align-center justify-center'
                style={{ borderRadius: '208px' }}
              >
                <Card
                  flat
                  width={196}
                  height={196}
                  style={{ borderRadius: '196px' }}
                  className={`clock-dashed ${
                    timerActive ? 'clock-dashed--animating' : ''
                  }`}
                ></Card>
                <Card flat className='p-absolute'>
                  <H5 style={{ fontWeight: '700' }}>{this.timerCountDown}</H5>
                </Card>
              </Card>
            </Card>
            <Card flat rounded={false} className='d-flex mt-10'>
              <Card flat className='pr-3' style={{ width: '50%' }}>
                <Button block onClick={() => this.onTimer(true)}>
                  Start
                </Button>
              </Card>
              <Card flat className='pl-3' style={{ width: '50%' }}>
                <Button
                  block
                  color='var(--error)'
                  onClick={() => this.onTimer(false)}
                >
                  Reset
                </Button>
              </Card>
            </Card>
            {[1, 2].map((i) => this.lapCard(i))}
            {this.toggleGroup('3')}
          </Card>
        </Card>
        <Body2 className='mt-12 text-center'>
          <span>Clock App by </span>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://dribbble.com/shots/8200836-Skeuomorph-Clock-App?utm_source=Clipboard_Shot&utm_campaign=jatinlathiya&utm_content=Skeuomorph%20Clock%20App&utm_medium=Social_Share'
          >
            Jatin Lathiya
          </a>
          <span>. UI Created using components from this library.</span>
        </Body2>
      </Card>
    )
  }
}

export default withResize(ClockApp)
