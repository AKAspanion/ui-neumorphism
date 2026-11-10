import React, { cloneElement, createRef } from 'react'

import TransitionWrapper from './TransitionWrapper'
import { getDOMNode } from '../util'

import { G_NUM, G_STRING } from '../assets'

class Grow extends React.Component {
  static displayName = 'NuGrow'

  domRef = createRef()

  get domNode() {
    return getDOMNode(this.domRef.current)
  }

  static defaultProps = {
    duration: 200,
    origin: 'center center'
  }

  static propTypes = {
    duration: G_NUM,
    origin: G_STRING
  }

  constructor(props) {
    super(props)
    this.state = { status: '' }
    this.updateStatus = this.updateStatus.bind(this)
  }

  get transition() {
    return { transition: `all ${this.props.duration}ms ease-in-out` }
  }

  get transitionStyles() {
    return {
      entering: { opacity: 1, transform: 'scale(0)', visibility: 'visible' },
      entered: { opacity: 1, transform: 'scale(1.0)', ...this.transition },
      exiting: { opacity: 0, transform: 'scale(0)', ...this.transition },
      exited: { opacity: 0, visibility: 'hidden' }
    }
  }

  updateStatus(status) {
    this.setState({ status })
  }

  render() {
    const { status } = this.state
    const { origin, duration, children: child, ...otherProps } = this.props
    return (
      <TransitionWrapper
        ref={this.domRef}
        onUpdate={this.updateStatus}
        timeout={{ exit: duration }}
        {...otherProps}
      >
        {cloneElement(child, {
          style: {
            opacity: 0,
            transformOrigin: origin,
            ...this.transitionStyles[status],
            ...child.props.style
          }
        })}
      </TransitionWrapper>
    )
  }
}

export default Grow
