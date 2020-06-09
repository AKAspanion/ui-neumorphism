import React from 'react'
import { createApiDoc, defaultApiDoc, eventDoc } from '../index.js'

export const selectionControlApi = (dark, type) => {
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
    eventDoc(
      dark,
      'Change',
      'Response object definition',
      `{
    id: prop id | [auto-generated],
    event: native change event,
    value: true | false
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
