import React, { act } from 'react'
import { createRoot } from 'react-dom/client'
import { MemoryRouter } from 'react-router-dom'
import App from './App'

window.IS_REACT_ACT_ENVIRONMENT = true

beforeAll(() => {
  // jsdom has no ResizeObserver; withResize needs one
  window.ResizeObserver = class {
    observe() {}
    disconnect() {}
  }
})

afterAll(() => {
  delete window.ResizeObserver
})

it('renders without crashing', () => {
  const div = document.createElement('div')
  document.body.appendChild(div)
  const root = createRoot(div)
  act(() =>
    root.render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    )
  )
  expect(div.textContent).toContain('UI-Neumorphism')
  act(() => root.unmount())
  div.remove()
})
