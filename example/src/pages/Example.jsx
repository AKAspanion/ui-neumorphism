import React from 'react'

import { Card, H3, Divider } from 'ui-neumorphism'
import { FitnessApp, ClockApp } from '../examples/'

class Example extends React.Component {
  render() {
    const { dark } = this.props
    return (
      <Card flat dark={dark} className='py-2'>
        <Card flat className='text-center'>
          <H3 secondary className='mt-10 mb-12'>
            CLOCK APP
          </H3>
          <ClockApp dark={dark} />
        </Card>
        <Divider className='my-12' />
        <Card flat className='mb-12 text-center'>
          <H3 secondary className='mb-12'>
            FITNESS APP
          </H3>
          <FitnessApp dark={dark} />
        </Card>
      </Card>
    )
  }
}

export default Example
