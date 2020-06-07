import { createApiDoc, defaultApiDoc, eventDoc } from '../index.js'

export const switchApi = (dark) => {
  return [
    ...defaultApiDoc(dark),
    createApiDoc(dark, 'value', 'any', '', 'The value of the component.'),
    createApiDoc(
      dark,
      'id',
      'String',
      '[auto-generated]',
      'The id of the component.'
    ),
    createApiDoc(dark, 'label', 'String', '', 'The label of the component.'),
    createApiDoc(dark, 'name', 'String', '', 'The name of the component.'),
    createApiDoc(
      dark,
      'checked',
      'Boolean',
      'false',
      'The component is checked, if true.'
    ),
    createApiDoc(
      dark,
      'required',
      'Boolean',
      'false',
      'A value is required or must be check for the form to be submittable.'
    ),
    createApiDoc(
      dark,
      'disabled',
      'Boolean',
      'false',
      'The component will be disabled, if true.'
    ),
    eventDoc(dark, 'Click'),
    eventDoc(dark, 'Change')
  ]
}
