import React from 'react'

import { Button, Card } from 'ui-neumorphism'
import 'ui-neumorphism/dist/index.css'

const App = () => {
  return (
    <Card style={{ margin: '100px', padding: '32px' }}>
      <Button hoverable text='NuButton 😄' />
    </Card>
  )
}

export default App
