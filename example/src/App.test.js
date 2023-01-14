import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

it('renders without crashing', () => {
  const container = document.getElementById('app')
  const root = createRoot(container)
  const div = document.createElement('div')
  root.render(<App />, div)
  root.unmount()
})
