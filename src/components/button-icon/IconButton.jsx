import React from 'react'

import { Button } from '../index'

import { BUTTON_PROP_TYPES, DEFAULT_PROPS } from '../../assets/index'
class IconButton extends React.Component {
  static displayName = 'NuIconButton'

  static defaultProps = {
    text: true,
    ...DEFAULT_PROPS
  }

  static propTypes = BUTTON_PROP_TYPES

  render() {
    const { children, ...otherProps } = this.props
    return (
      <Button {...otherProps} type='icon' block={false} depressed={false}>
        {children}
      </Button>
    )
  }
}

export default IconButton
