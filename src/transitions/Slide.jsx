import React, { cloneElement } from 'react'

import TransitionWrapper from './TransitionWrapper'
import { G_NUM, G_BOOL, G_STRING } from '../assets'

class Slide extends React.Component {
  static displayName = 'NuSlide'

  static defaultProps = {
    axis: 'Y',
    duration: 200,
    reverse: false,
    origin: 'center center'
  }

  static propTypes = {
    axis: G_STRING,
    reverse: G_BOOL,
    duration: G_NUM,
    origin: G_STRING
  }

  defaultStyle = {
    transition: `all ${this.props.duration}ms ease-in-out`
  }

  transitionStyles = {
    enteringX: {
      opacity: 0,
      transform: 'translateX(-50%)'
    },
    enteringXR: {
      opacity: 0,
      transform: 'translateX(50%)'
    },
    enteringY: {
      opacity: 0,
      transform: 'translateY(-50%)'
    },
    enteringYR: {
      opacity: 0,
      transform: 'translateY(50%)'
    },
    entered: {
      opacity: 1,
      ...this.defaultStyle,
      transform: 'translate(0)'
    },
    exiting: { opacity: 0 },
    exited: { opacity: 0 }
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
    return status === 'entering' ? `${status}${this.type}` : status
  }

  updateStatus(status) {
    this.setState({ status })
  }

  render() {
    const { status } = this.state
    const { origin, children: child, ...otherProps } = this.props
    return (
      <TransitionWrapper {...otherProps} onUpdate={this.updateStatus}>
        {cloneElement(child, {
          style: {
            opacity: 0,
            transformOrigin: origin,
            ...this.transitionStyles[this.getStatus(status)],
            ...child.props.style
          }
        })}
      </TransitionWrapper>
    )
  }
}

export default Slide
