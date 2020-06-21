import React from 'react'

import { defaultApiDoc } from '../index.js'
import { createApiDoc } from '../common.js'

const inputAttr = (dark, type, attr, def = '') => {
  return createApiDoc(dark, attr, 'String', def, `Sets ${type}'s ${attr}.`)
}

const inputState = (dark, type, attr) => {
  return createApiDoc(
    dark,
    attr,
    'Boolean',
    'false',
    `Puts ${type} in ${attr} state.`
  )
}

export const inputApi = (dark, type) => {
  return [
    inputAttr(dark, type, 'type', "'text'"),
    inputAttr(dark, type, 'placeholder'),
    inputAttr(dark, type, 'autofocus'),
    inputState(dark, type, 'disabled'),
    inputState(dark, type, 'disabled'),
    inputAttr(dark, type, 'value'),
    inputAttr(dark, type, 'label'),
    inputAttr(dark, type, 'hint'),
    inputAttr(dark, type, 'name'),
    createApiDoc(
      dark,
      'id',
      'String',
      '[auto-generated]',
      `Sets the DOM id on the ${type}.`
    ),
    createApiDoc(
      dark,
      'inputStyles',
      'Object',
      '{}',
      `Styles directly applied to the input.`
    ),
    createApiDoc(
      dark,
      'dense',
      'Boolean',
      'false',
      `Reduces the ${type}'s height tp 32px.`
    ),
    createApiDoc(
      dark,
      'hideExtra',
      'Boolean',
      'false',
      `Hides hint and validation errors.`
    ),
    createApiDoc(
      dark,
      'bordered',
      'Boolean',
      'false',
      `Applies a thin light border to ${type}.`
    ),
    createApiDoc(
      dark,
      'outlined',
      'Boolean',
      'false',
      `Applies a thin border and removes shadow style of ${type}.`
    ),
    createApiDoc(
      dark,
      'loading',
      'Boolean',
      'false',
      `Displays a indeterminate linear progress bar.`
    ),
    createApiDoc(
      dark,
      'counter',
      'Number',
      '',
      `Creates a counter for ${type}'s length.`
    ),
    createApiDoc(
      dark,
      'height',
      'Number',
      '40 | 32',
      `Sets ${type}'s height.`
    ),
    createApiDoc(
      dark,
      'prepend',
      'Node',
      '',
      `Prepends an element to the ${type}.`
    ),
    createApiDoc(
      dark,
      'rounded',
      'boolean',
      'false',
      `Adds a large border radius to the ${type}.`
    ),
    createApiDoc(
      dark,
      'append',
      'Node',
      '',
      `Appends an element to the ${type}.`
    ),
    createApiDoc(
      dark,
      'rules',
      'Array',
      '[]',
      <div>
        An array of functions that take an input value as an argument.
        <br />
        It must return either <code>true</code> / <code>false</code> or a&nbsp;
        <code>string</code> with an error message.
      </div>
    )
  ]
}

export const textFieldApi = (dark, type) => {
  return [...defaultApiDoc(dark), ...inputApi(dark, 'TextField')]
}
