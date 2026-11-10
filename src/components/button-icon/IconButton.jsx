import React, { createRef } from 'react'

import { Button } from '../index'

import { BUTTON_PROP_TYPES, DEFAULT_PROPS } from '../../assets/index'
import { getDOMNode } from '../../util'
class IconButton extends React.Component {
  static displayName = 'NuIconButton'

  domRef = createRef()

  get domNode() {
    return getDOMNode(this.domRef.current)
  }

  static defaultProps = {
    text: true,
    ...DEFAULT_PROPS
  }

  static propTypes = BUTTON_PROP_TYPES

  render() {
    const { children, ...otherProps } = this.props
    return (
      <Button
        ref={this.domRef}
        {...otherProps}
        type='icon'
        block={false}
        depressed={false}
      >
        {children}
      </Button>
    )
  }
}

export default IconButton
