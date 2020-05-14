import React from 'react'

import { Switch } from 'ui-neumorphism'
class Example extends React.Component {
  render() {
    const dark = false
    return (
      <div>
        {/* Examples coming soon... */}
        <div style={{ padding: '20px' }}>
          <Switch color='var(--primary)' dark={dark} checked />
        </div>
        <div style={{ padding: '20px' }}>
          <Switch dark={dark} color='#42aaee' />
        </div>
        <div style={{ padding: '20px' }}>
          <Switch dark={dark} />
        </div>
        <div style={{ padding: '20px' }}>
          <Switch dark={dark} disabled />
        </div>

        <div style={{ padding: '20px' }}>
          <Switch dark={dark} disabled checked />
        </div>
        <div style={{ padding: '20px' }}>
          <Switch dark={dark} checked />
        </div>
      </div>
    )
  }
}

export default Example
