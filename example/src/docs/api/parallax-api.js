import { createApiDoc, defaultApiDoc } from '../index.js'

const attribute = (dark, attr) =>
  createApiDoc(
    dark,
    attr,
    'String',
    '',
    `The ${attr} attribute for the img element.`
  )

export const parallaxApi = (dark) => {
  return [
    ...defaultApiDoc(dark),
    attribute(dark, 'alt'),
    attribute(dark, 'src'),
    createApiDoc(
      dark,
      'height',
      'Number',
      '400',
      'Sets the height for the parallax component.'
    ),
    createApiDoc(
      dark,
      'speed',
      'Number',
      '1.0',
      'Sets the speed of the parallax.'
    ),
    createApiDoc(
      dark,
      'containerId',
      'String',
      '',
      'Id of the wrapping container(if scrolling inside a container).'
    )
  ]
}
