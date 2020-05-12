import React from 'react'

import { Button, Card, Fab } from 'ui-neumorphism'
import 'ui-neumorphism/dist/index.css'

const App = () => {
  return (
    <div style={{ display: 'flex' }}>
      <div
        style={{ width: '50%', background: 'var(--light-bg)', padding: '32px' }}
      >
        <Card style={{ width: '50%' }}>
          Simple Card
          <div className='d-dummy'></div>
          <Button text />
          <div className='d-dummy'></div>
          <Button outlined />
        </Card>
        <div className='d-dummy'></div>
        <Card outlined style={{ width: '50%' }}>
          Outlined Card
          <div className='d-dummy'></div>
          <Button depressed />
          <div className='d-dummy'></div>
          <Button />
          <div className='d-dummy'></div>
          <Button rounded />
        </Card>
      </div>
      <div
        style={{ width: '50%', background: 'var(--dark-bg)', padding: '32px' }}
      >
        <Card dark  style={{ width: '50%' }}>
          Simple Card
          <div className='d-dummy'></div>
          <Button text />
          <div className='d-dummy'></div>
          <Button outlined />
          <Fab color='red' absolute right top>
            A
          </Fab>
        </Card>
        <div className='d-dummy'></div>
        <Card dark outlined style={{ width: '50%' }}>
          Outlined Card
          <div className='d-dummy'></div>
          <Button depressed />
          <div className='d-dummy'></div>
          <Button />
          <div className='d-dummy'></div>
          <Button rounded />
        </Card>
      </div>
    </div>
  )
}

export default App
