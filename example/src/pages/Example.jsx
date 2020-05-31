import React from 'react'

import { Card } from 'ui-neumorphism'
import { FitnessApp } from '../examples/'

class Example extends React.Component {
  render() {
    const { dark } = this.props
    return (
      <Card flat dark={dark} className='py-2'>
        <FitnessApp dark={dark} />
      </Card>
    )
  }
}

export default Example
