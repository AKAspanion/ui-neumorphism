import React from 'react'

import { Form, Checkbox, RadioGroup, Radio } from 'ui-neumorphism'

class FormView extends React.Component {
  render() {
    return (
      <div>
        <Form>
          <Checkbox value='milk' label='Milk' color='var(--primary)' />
          <Checkbox value='sugar' label='Sugar' color='var(--primary)' />
          <RadioGroup color='var(--primary)'>
            <Radio value='male' label='Male' />
            <Radio value='female' label='Female' />
            <Radio value='none' label='None' />
          </RadioGroup>
        </Form>
      </div>
    )
  }
}

export default FormView
