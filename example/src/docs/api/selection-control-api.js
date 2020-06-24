import React from 'react'
import { createApiDoc, defaultApiDoc, eventDoc } from '../index.js'

export const selectionControlApi = (dark, type, valueKey = 'value') => {
  return [
    ...defaultApiDoc(dark),
    createApiDoc(
      dark,
      'id',
      'String',
      '[auto-generated]',
      `The id of the ${type}.`
    ),
    ...['name', 'label'].map((p) =>
      createApiDoc(dark, p, 'String', '', `The ${p} of the ${type}.`)
    ),
    createApiDoc(dark, 'value', 'any', '', `The value of the ${type}.`),
    createApiDoc(
      dark,
      'checked',
      'Boolean',
      'false',
      <div>
        The {type} is checked, if <code>true</code>.
      </div>
    ),
    createApiDoc(
      dark,
      'required',
      'Boolean',
      'false',
      'A value is required in a form to be submittable.'
    ),
    createApiDoc(
      dark,
      'disabled',
      'Boolean',
      'false',
      `Renders the ${type} disabled.`
    ),
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
      `Applies specified color to the ${type}.`
    ),
    eventDoc(
      dark,
      'Change',
      'Response object definition',
      `{
    id: prop id | [auto-generated],
    event: native change event,
    ${valueKey}: true | false
}`
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

export const switchApi = (dark) => {
  return selectionControlApi(dark, 'Switch')
}

export const checkboxApi = (dark) => {
  return selectionControlApi(dark, 'Checkbox')
}

export const radioApi = (dark) => {
  return [...selectionControlApi(dark, 'Radio', 'checked')]
}

export const radioGroupApi = (dark) => {
  return [
    ...defaultApiDoc(dark),
    createApiDoc(
      dark,
      'id',
      'String',
      '[auto-generated]',
      `Gives an id to the group.`
    ),
    createApiDoc(
      dark,
      'value',
      'any',
      '',
      'The currently selected value within the group.'
    ),
    createApiDoc(
      dark,
      'disabled',
      'Boolean',
      'false',
      'Removes the ability to click or target the group.'
    ),
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
      'Applies specified color to the group radios.'
    ),
    eventDoc(
      dark,
      'Change',
      'Response object definition',
      `{ 
    id: prop id | [auto-generated],
    value: selected Radio's value,
    event: Radio's \`onChange\` event,
}`
    ),
    createApiDoc(
      dark,
      'vertical',
      'Boolean',
      'false',
      'Changes orientation of radios inside group to vertical.'
    )
  ]
}
