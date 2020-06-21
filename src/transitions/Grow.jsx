import React, { cloneElement } from 'react'

import TransitionWrapper from './TransitionWrapper'

class Grow extends React.Component {
  static displayName = 'NuGrow'

  transitionStyles = {
    entering: { transform: 'scale(0)' },
    entered: {
      opacity: 1,
      transform: 'scale(1.0)',
      transition: 'transform 200ms'
    },
    exiting: { opacity: 0 },
    exited: { opacity: 0 }
  }

  constructor(props) {
    super(props)
    this.state = { status: '' }
  }

  render() {
    const { status } = this.state
    const { children: child, ...otherProps } = this.props
    return (
      <TransitionWrapper
        {...otherProps}
        onUpdate={(e) => this.setState({ status: e })}
      >
        {cloneElement(child, {
          style: {
            ...this.transitionStyles[status],
            ...child.props.style
          }
        })}
      </TransitionWrapper>
    )
  }
}

export default Grow
