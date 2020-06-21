import { createApiDoc, defaultApiDoc, cssDimensionsApi } from '../index.js'

export const dialogApi = (dark) => {
  return [
    ...defaultApiDoc(dark),
    ...cssDimensionsApi(dark, 'dialog'),
    createApiDoc(
      dark,
      'visible',
      'Boolean',
      'false',
      'Controls whether the dialog is visible or hidden.'
    ),
    createApiDoc(
      dark,
      'persistent',
      'Boolean',
      'false',
      'Clicking outside of the children will not call the onClose callback.'
    )
  ]
}
