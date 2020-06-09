import React from 'react'
import { createApiDoc, defaultApiDoc, eventDoc } from '../index.js'

const sizes = (dark) =>
  createApiDoc(
    dark,
    'size',
    `small | medium | large`,
    'medium',
    'The size of the button.'
  )
const active = (dark) =>
  createApiDoc(
    dark,
    'active',
    'Boolean',
    'false',
    'Renders the button in active state.'
  )
const disabled = (dark) =>
  createApiDoc(
    dark,
    'disabled',
    'Boolean',
    'false',
    'Removes the ability to click or target the button.'
  )
const color = (dark) =>
  createApiDoc(
    dark,
    'color',
    'String',
    <div>
      <div>
        Light:&nbsp;&nbsp;
        <span style={{ color: 'var(--primary-dark)' }}>
          var(--g-text-color-light)
        </span>
      </div>
      <div>
        Dark:&nbsp;&nbsp;
        <span style={{ color: 'var(--primary-dark)' }}>
          var(--g-text-color-dark)
        </span>
      </div>
    </div>,
    'Applies specified color to the button content.'
  )
const bgColor = (dark) =>
  createApiDoc(
    dark,
    'bgColor',
    'String',
    '',
    'Applies specified color to the background.'
  )

export const buttonApi = (dark) => {
  return [
    ...defaultApiDoc(dark),
    createApiDoc(
      dark,
      'text',
      'Boolean',
      'false',
      'Removes the elevation and hover effect.'
    ),
    createApiDoc(
      dark,
      'block',
      'Boolean',
      'false',
      'Expands the button to 100% of available space.'
    ),
    active(dark),
    createApiDoc(
      dark,
      'rounded',
      'Boolean',
      'false',
      'Applies a large border radius on the button.'
    ),
    sizes(dark),
    color(dark),
    bgColor(dark),
    createApiDoc(
      dark,
      'outlined',
      'Boolean',
      'false',
      'Applies a thin border.'
    ),
    disabled(dark),
    createApiDoc(
      dark,
      'depressed',
      'Boolean',
      'false',
      'Lowers elevation to a medium state.'
    ),
    eventDoc(dark, 'Click'),
    eventDoc(dark, 'MouseOut'),
    eventDoc(dark, 'MouseOver')
  ]
}

export const fabButtonApi = (dark) => {
  return [
    ...defaultApiDoc(dark),
    sizes(dark),
    active(dark),
    color(dark),
    bgColor(dark),
    ...['top', 'left', 'right', 'bottom'].map((pos) =>
      createApiDoc(
        dark,
        pos,
        'Boolean',
        'false',
        <div>
          Aligns the button towards the <code>{pos}</code>.
        </div>
      )
    ),
    ...['fixed', 'absolute'].map((pos) =>
      createApiDoc(
        dark,
        pos,
        'Boolean',
        'false',
        <div>
          Applies <code>position: {pos}</code> to the component.
        </div>
      )
    ),
    createApiDoc(
      dark,
      'animation',
      'Boolean',
      'true',
      'Animates button on render.'
    ),
    disabled(dark),
    eventDoc(dark, 'Click'),
    eventDoc(dark, 'MouseOut'),
    eventDoc(dark, 'MouseOver')
  ]
}
