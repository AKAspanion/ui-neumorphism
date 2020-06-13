import React from 'react'

import { Card, H3, Divider } from 'ui-neumorphism'
import { FitnessApp, ClockApp } from '../examples/'

class Example extends React.Component {
  render() {
    const { dark } = this.props
    return (
      <Card flat dark={dark} className='py-2'>
        <Card flat className='my-12'>
          <H3 secondary className='mb-12 mt-6 text-center'>
            FITNESS APP
          </H3>
          <FitnessApp dark={dark} />
        </Card>
        <Divider dense />
        <Card flat className='my-12'>
          <H3 secondary className='my-12 text-center'>
            CLOCK APP
          </H3>
          <ClockApp dark={dark} />
        </Card>
      </Card>
    )
  }
}

export default Example
