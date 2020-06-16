import React from 'react'
import { createApiDoc, defaultApiDoc, eventDoc } from '../index.js'

const sizes = (dark, desc) =>
  createApiDoc(
    dark,
    'size',
    `small | medium | large`,
    'medium',
    desc || 'The size of the button.'
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
          --g-text-color-light
        </span>
      </div>
      <div>
        Dark:&nbsp;&nbsp;
        <span style={{ color: 'var(--primary-dark)' }}>
          --g-text-color-dark
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

const rounded = (dark) =>
  createApiDoc(
    dark,
    'rounded',
    'Boolean',
    'false',
    'Applies a large border radius on the button.'
  )

const bordered = (dark) =>
  createApiDoc(dark, 'bordered', 'Boolean', 'false', 'Applies a thin border.')

const outlined = (dark) =>
  createApiDoc(
    dark,
    'outlined',
    'Boolean',
    'false',
    'Applies a border and removes elevation.'
  )

const trueText = (dark) =>
  createApiDoc(
    dark,
    'text',
    'Boolean',
    'true',
    'Removes the elevation and hover effect.'
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
    sizes(dark),
    color(dark),
    bgColor(dark),
    active(dark),
    rounded(dark),
    outlined(dark),
    bordered(dark),
    disabled(dark),
    createApiDoc(
      dark,
      'depressed',
      'Boolean',
      'false',
      'Lowers elevation to a medium state.'
    ),
    eventDoc(dark, 'Click'),
    eventDoc(dark, 'MouseUp'),
    eventDoc(dark, 'MouseOut'),
    eventDoc(dark, 'MouseMove'),
    eventDoc(dark, 'MouseDown'),
    eventDoc(dark, 'MouseOver'),
    eventDoc(dark, 'MouseEnter'),
    eventDoc(dark, 'MouseLeave')
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
    bordered(dark),
    disabled(dark),
    eventDoc(dark, 'Click'),
    eventDoc(dark, 'MouseUp'),
    eventDoc(dark, 'MouseOut'),
    eventDoc(dark, 'MouseMove'),
    eventDoc(dark, 'MouseDown'),
    eventDoc(dark, 'MouseOver'),
    eventDoc(dark, 'MouseEnter'),
    eventDoc(dark, 'MouseLeave')
  ]
}

export const iconButtonApi = (dark) => {
  return [
    ...defaultApiDoc(dark),
    trueText(dark),
    sizes(dark),
    color(dark),
    bgColor(dark),
    active(dark),
    rounded(dark),
    outlined(dark),
    bordered(dark),
    disabled(dark),
    eventDoc(dark, 'Click'),
    eventDoc(dark, 'MouseUp'),
    eventDoc(dark, 'MouseOut'),
    eventDoc(dark, 'MouseMove'),
    eventDoc(dark, 'MouseDown'),
    eventDoc(dark, 'MouseOver'),
    eventDoc(dark, 'MouseEnter'),
    eventDoc(dark, 'MouseLeave')
  ]
}

export const toggleButtonApi = (dark) => {
  return [
    ...defaultApiDoc(dark),
    createApiDoc(
      dark,
      'value',
      'any',
      '',
      <div>
        Assigned value for the toggle button. Useful with&nbsp;
        <code>ToggleButtonGroup</code>
      </div>
    ),
    createApiDoc(
      dark,
      'selected',
      'Boolean',
      'false',
      <div>
        Sets the state of Button to be active when
        <code>true</code>
      </div>
    ),
    trueText(dark),
    sizes(dark),
    color(dark),
    rounded(dark),
    outlined(dark),
    bordered(dark),
    disabled(dark),
    eventDoc(
      dark,
      'Click',
      'Response object definition',
      `{
    value: prop value
    event: native event,
}`
    ),
    eventDoc(
      dark,
      'Change',
      'Response object definition',
      `{ 
    value: prop value
    event: native event,
    selected: true | false,
}`
    ),
    eventDoc(dark, 'MouseUp'),
    eventDoc(dark, 'MouseOut'),
    eventDoc(dark, 'MouseMove'),
    eventDoc(dark, 'MouseDown'),
    eventDoc(dark, 'MouseOver'),
    eventDoc(dark, 'MouseEnter'),
    eventDoc(dark, 'MouseLeave')
  ]
}

export const toggleButtonGroupApi = (dark) => {
  return [
    ...defaultApiDoc(dark),
    sizes(
      dark,
      'Sets the specified size of all toggle buttons inside the group.'
    ),
    color(dark),
    createApiDoc(
      dark,
      'value',
      'any',
      '',
      'The currently selected value within the group or an array of selected values.'
    ),
    rounded(dark),
    outlined(dark),
    bordered(dark),
    disabled(dark),
    createApiDoc(
      dark,
      'multiple',
      'Boolean',
      'false',
      'Allows multiple values to be selected.'
    ),
    createApiDoc(
      dark,
      'mandatory',
      'Boolean',
      'false',
      'At least one selection is always required in group.'
    ),
    eventDoc(
      dark,
      'Click',
      'Response object definition',
      `{ 
    active: value array | value,
    event: ToggleButton \`onChange\` event
}`
    ),
    eventDoc(
      dark,
      'Change',
      'Response object definition',
      `{ 
    active: value array | value
}`
    )
  ]
}
