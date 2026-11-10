import React, { cloneElement, createRef } from 'react'

import TransitionWrapper from './TransitionWrapper'
import { getDOMNode } from '../util'

import { G_NUM } from '../assets'

class Fade extends React.Component {
  static displayName = 'NuFade'

  domRef = createRef()

  get domNode() {
    return getDOMNode(this.domRef.current)
  }

  static defaultProps = {
    duration: 200
  }

  static propTypes = {
    duration: G_NUM
  }

  defaultStyle = {
    opacity: 0,
    transition: `opacity ${this.props.duration}ms ease-in-out`
  }

  transitionStyles = {
    entering: { opacity: 1 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 }
  }

  constructor(props) {
    super(props)
    this.state = { status: '' }
    this.updateStatus = this.updateStatus.bind(this)
  }

  updateStatus(status) {
    this.setState({ status })
  }

  render() {
    const { status } = this.state
    const { children: child, ...otherProps } = this.props
    return (
      <TransitionWrapper
        ref={this.domRef}
        {...otherProps}
        onUpdate={this.updateStatus}
      >
        {cloneElement(child, {
          style: {
            ...this.defaultStyle,
            ...this.transitionStyles[status],
            ...child.props.style
          }
        })}
      </TransitionWrapper>
    )
  }
}

export default Fade
