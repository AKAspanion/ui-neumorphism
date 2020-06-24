import { createApiDoc, defaultApiDoc } from '../index.js'

export const dividerApi = (dark) => {
  return [
    ...defaultApiDoc(dark),
    createApiDoc(
      dark,
      'dense',
      'Boolean',
      'false',
      'Reduces height of the divider.'
    ),
    createApiDoc(
      dark,
      'elevated',
      'Boolean',
      'false',
      'Gives an elevation for alternate style.'
    )
  ]
}
