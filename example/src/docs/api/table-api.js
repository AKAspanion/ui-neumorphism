import { createApiDoc, defaultApiDoc } from '../index.js'

const headerExample = `{
    text: string
    value: string
    className?: string
    verticalAlign?: 'top' | 'middle' | 'bottom'
    align?: 'inherit' | 'center' | 'left' | 'right' | 'justify'
}`

export const tableApi = (dark) => {
  return [
    ...defaultApiDoc(dark),
    createApiDoc(
      dark,
      'headers',
      'Array',
      '[]',
      'An array of objects that each describe a header column.',
      'Header object definition',
      headerExample
    ),
    createApiDoc(
      dark,
      'items',
      'Array',
      '[]',
      'The array of items to display.'
    ),
    createApiDoc(dark, 'flat', 'Boolean', 'false', 'Removes elevation.'),
    createApiDoc(dark, 'inset', 'Boolean', 'false', 'Reverses elevation.'),
    createApiDoc(
      dark,
      'outlined',
      'Boolean',
      'false',
      'Removes elevation and adds a border.'
    ),
    createApiDoc(
      dark,
      'dense',
      'Boolean',
      'false',
      'Decreases the height of rows, for an alternate style.'
    ),
    createApiDoc(
      dark,
      'noHeaders',
      'Boolean',
      'false',
      'Removes the header of the table.'
    )
  ]
}
