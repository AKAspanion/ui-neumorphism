import React from 'react'

import { Card, Subtitle1, Caption } from 'ui-neumorphism'

class RightBar extends React.Component {
  render() {
    const { dark } = this.props
    return (
      <Card flat dark={dark} className='right-bar px-4 py-3'>
        <Subtitle1 className='mb-3'>Contents</Subtitle1>
        <Caption className='my-2'>
          <a href='#component'>Component</a>
        </Caption>
        <Caption className='my-2'>
          <a href='#api'>API</a>
        </Caption>
      </Card>
    )
  }
}

export default RightBar
