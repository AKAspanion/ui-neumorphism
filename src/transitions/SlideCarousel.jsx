import React, { cloneElement } from 'react'

import TransitionWrapper from './TransitionWrapper'
import { G_NUM, G_BOOL, G_STRING } from '../assets'
import { callCallback } from '../util'

class SlideCarousel extends React.Component {
  static displayName = 'NuSlideCarousel'

  static defaultProps = {
    axis: 'Y',
    duration: 300,
    reverse: false,
    origin: 'center center'
  }

  static propTypes = {
    axis: G_STRING,
    reverse: G_BOOL,
    duration: G_NUM,
    origin: G_STRING
  }

  slideTransition = {
    transition: `transform ${this.props.duration}ms ease-in-out`
  }

  transitionStyles = {
    enteringX: { transform: 'translateX(-100%)' },
    enteringXR: { transform: 'translateX(100%)' },
    enteringY: { transform: 'translateY(-100%)' },
    enteringYR: { transform: 'translateY(100%)' },
    entered: {
      transform: 'translate(0px)',
      ...this.slideTransition
    },
    exitingX: {
      ...this.slideTransition,
      transform: 'translateX(100%)'
    },
    exitingXR: {
      ...this.slideTransition,
      transform: 'translateX(-100%)'
    },
    exitingY: {
      ...this.slideTransition,
      transform: 'translateY(100%)'
    },
    exitingYR: {
      ...this.slideTransition,
      transform: 'translateY(-100%)'
    }
  }

  constructor(props) {
    super(props)
    this.state = { status: '' }
    this.updateStatus = this.updateStatus.bind(this)
  }

  get type() {
    const { axis, reverse } = this.props
    return `${axis.toUpperCase()}${reverse ? 'R' : ''}`
  }

  getStatus(status) {
    return status === 'entering' || status === 'exiting'
      ? `${status}${this.type}`
      : status
  }

  updateStatus(status) {
    this.setState({ status })

    callCallback(this.props.onUpdate, status)
  }

  render() {
    const { status } = this.state
    const { origin, duration, children: child, ...otherProps } = this.props
    const display = status ? (status === 'exited' ? 'none' : undefined) : 'none'
    return (
      <TransitionWrapper
        {...otherProps}
        timeout={{ exit: duration }}
        onUpdate={this.updateStatus}
      >
        {cloneElement(child, {
          style: {
            display,
            top: '0',
            position: 'absolute',
            transformOrigin: origin,
            ...this.transitionStyles[this.getStatus(status)],
            ...child.props.style
          }
        })}
      </TransitionWrapper>
    )
  }
}

export default SlideCarousel
