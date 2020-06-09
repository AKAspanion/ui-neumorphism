import { createApiDoc, defaultApiDoc, eventDoc } from '../index.js'

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
    createApiDoc(
      dark,
      'active',
      'Boolean',
      'false',
      'Renders the button in active state.'
    ),
    createApiDoc(
      dark,
      'rounded',
      'Boolean',
      'false',
      'Applies a large border radius on the button.'
    ),
    createApiDoc(
      dark,
      'size',
      `small | medium | large`,
      'medium',
      'The size of the button.'
    ),
    createApiDoc(
      dark,
      'color',
      'String',
      '',
      'Applies specified color to the button text.'
    ),
    createApiDoc(
      dark,
      'bgColor',
      'String',
      '--g-text-color-light/--g-text-color-dark',
      'Applies specified color to the background.'
    ),
    createApiDoc(
      dark,
      'outlined',
      'Boolean',
      'false',
      'Applies a thin border.'
    ),
    createApiDoc(
      dark,
      'disabled',
      'Boolean',
      'false',
      'Removes the ability to click or target the button.'
    ),
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
