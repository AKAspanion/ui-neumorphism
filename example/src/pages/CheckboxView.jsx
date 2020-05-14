import React from 'react'

import { Checkbox } from 'ui-neumorphism'

class CheckboxView extends React.Component {
  render() {
    const { dark } = this.props
    return (
      <div>
        <Checkbox label='normal' dark={dark} />
        <Checkbox label='checked' checked dark={dark} />
        <Checkbox label='disabled' disabled dark={dark} />
        <Checkbox label='color' color='var(--primary)' dark={dark} />
        <Checkbox label='color' color='#42aaee' dark={dark} />
        <Checkbox
          label='color disabled'
          disabled
          color='var(--primary)'
          dark={dark}
        />
        <Checkbox
          label='checked disabled color'
          disabled
          checked
          color='var(--primary)'
          dark={dark}
        />
      </div>
    )
  }
}

export default CheckboxView
