import React, { cloneElement } from 'react'

import TransitionWrapper from './TransitionWrapper'

class Fade extends React.Component {
  static displayName = 'NuFade'

  transitionStyles = {
    entering: { opacity: 1, transition: 'opacity 200ms' },
    entered: { opacity: 1, transition: 'opacity 200ms' },
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

export default Fade
