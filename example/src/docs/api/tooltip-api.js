import {
  createApiDoc,
  defaultApiDoc,
  cssDimensionsApi,
  positionApi
} from '../index.js'

export const tooltipApi = (dark) => {
  return [
    ...defaultApiDoc(dark),
    ...cssDimensionsApi(dark, 'tooltip'),
    ...positionApi(dark, 'tooltip'),
    createApiDoc(
      dark,
      'inset',
      'Boolean',
      'false',
      "Reverses the tooltip's elevation."
    ),
    createApiDoc(
      dark,
      'content',
      'Node, isRequired',
      '',
      'Content of the tooltip.'
    ),
    createApiDoc(
      dark,
      'transition',
      'Grow | Fade',
      'Grow',
      'Transition style for the tooltip.'
    )
  ]
}
