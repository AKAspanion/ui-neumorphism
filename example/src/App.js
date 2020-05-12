import React from 'react'

import { Button, Card } from 'ui-neumorphism'
import 'ui-neumorphism/dist/index.css'

const App = () => {
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ width: '50%', background: '#E4EBF5' }}>
        <Card style={{ margin: '32px', width: '50%' }}>Simple Card</Card>
        <Card outlined style={{ margin: '32px', width: '50%' }}>
          Outlined Card
        </Card>
      </div>
      <div style={{ width: '50%', background: '#444444' }}>
        <Card dark style={{ margin: '32px', width: '50%' }}>
          Simple dark theme Card
        </Card>
        <Card dark outlined style={{ margin: '32px', width: '50%' }}>
          Outlined dark theme Card
        </Card>
      </div>
    </div>
  )
}

export default App
