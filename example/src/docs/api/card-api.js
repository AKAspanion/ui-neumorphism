import { createApiDoc, defaultApiDoc } from '../index.js'

const style = (dark, type) =>
  createApiDoc(dark, type, 'Number', '', `Sets the ${type} for the card.`)

const disabled = (dark, type) =>
  createApiDoc(
    dark,
    'disabled',
    'Boolean',
    'false',
    `Removes the ability to click or target the ${type}.`
  )

const rounded = (dark, type) =>
  createApiDoc(
    dark,
    'rounded',
    'Boolean',
    'false',
    `Applies a large border radius on the ${type}.`
  )

export const cardApi = (dark) => {
  return [
    ...defaultApiDoc(dark),
    createApiDoc(
      dark,
      'flat',
      'Boolean',
      'false',
      "Removes the card's elevation"
    ),
    createApiDoc(
      dark,
      'inset',
      'Boolean',
      'false',
      "Reverses the card's elevation"
    ),
    style(dark, 'width'),
    style(dark, 'height'),
    createApiDoc(
      dark,
      'loading',
      'Boolean',
      'false',
      'Displays indeterminate linear progress bar on top to indicate loading state.'
    ),
    rounded(dark, 'card'),
    disabled(dark, 'card'),
    createApiDoc(
      dark,
      'outlined',
      'Boolean',
      'false',
      "Removes the card's elevation and adds a thin border."
    ),
    createApiDoc(
      dark,
      'elevation',
      'Number',
      '1',
      'Designates an elevation applied to the card between 0 and 5.'
    ),
    style(dark, 'minWidth'),
    style(dark, 'maxWidth'),
    style(dark, 'minHeight'),
    style(dark, 'maxHeight')
  ]
}

export const cardHeaderApi = (dark) => {
  return [
    ...defaultApiDoc(dark),
    createApiDoc(
      dark,
      'title',
      'Node',
      '',
      'The title content of the card header.'
    ),
    createApiDoc(dark, 'avatar', 'Node', '', 'The avatar for the card header.'),
    createApiDoc(
      dark,
      'action',
      'Node',
      '',
      'The action to display in the card header.'
    ),
    createApiDoc(
      dark,
      'subtitle',
      'Node',
      '',
      'The subtitle content of the card header.'
    ),
    rounded(dark, 'card header'),
    disabled(dark, 'card header')
  ]
}

export const cardContentApi = (dark) => {
  return [
    ...defaultApiDoc(dark),
    rounded(dark, 'card content'),
    disabled(dark, 'card content')
  ]
}

export const cardMediaApi = (dark) => {
  return [
    ...defaultApiDoc(dark),
    createApiDoc(
      dark,
      'src',
      'String',
      '',
      'The source of the media content.'
    ),
    createApiDoc(
      dark,
      'title',
      'String',
      '',
      'The title of the media content.'
    ),
    createApiDoc(
      dark,
      'height',
      'Number',
      '160',
      'The height of the media content.'
    ),
    rounded(dark, 'card media'),
    disabled(dark, 'card media')
  ]
}

export const cardActionApi = (dark) => {
  return [
    ...defaultApiDoc(dark),
    rounded(dark, 'card action'),
    disabled(dark, 'card action')
  ]
}
