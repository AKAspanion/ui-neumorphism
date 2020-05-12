import React from 'react'

import { Button, Card, Fab } from 'ui-neumorphism'
import 'ui-neumorphism/dist/index.css'

const App = () => {
  return (
    <div style={{ display: 'flex' }}>
      <div
        style={{ width: '50%', background: 'var(--light-bg)', padding: '32px' }}
      >
        <Card style={{ width: '50%' }}>Simple Card</Card>
        <div className='d-dummy'></div>
        <Card outlined style={{ width: '50%' }}>
          Outlined Card
        </Card>
        <div className='d-dummy'></div>
        <Button text />
        <div className='d-dummy'></div>
        <Button outlined />
        <div className='d-dummy'></div>
        <Button depressed />
        <div className='d-dummy'></div>
        <Button />
        <div className='d-dummy'></div>
        <Button rounded />
        <div className='d-dummy'></div>
        <Fab size='small' fixed top left>A</Fab>
        <div className='d-dummy' ></div>
        <Fab color='red' fixed bottom left>
          A
        </Fab>
      </div>
      <div
        style={{ width: '50%', background: 'var(--dark-bg)', padding: '32px' }}
      >
        <Card dark style={{ width: '50%' }}>
          Simple dark theme Card
        </Card>
        <div className='d-dummy'></div>
        <Card dark outlined style={{ width: '50%' }}>
          Outlined dark theme Card
        </Card>
        <div className='d-dummy'></div>
        <Button dark text />
        <div className='d-dummy'></div>
        <Button dark outlined />
        <div className='d-dummy'></div>
        <Button dark depressed />
        <div className='d-dummy'></div>
        <Button dark />
        <div className='d-dummy'></div>
        <Button dark rounded />
        <div className='d-dummy'></div>
        <Fab dark size='small' absolute right top>
          A
        </Fab>
        <div className='d-dummy'></div>
        <Fab dark color='red' absolute right bottom>
          A
        </Fab>
      </div>
    </div>
  )
}

export default App
