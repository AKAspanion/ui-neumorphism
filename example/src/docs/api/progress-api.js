import { createApiDoc, defaultApiDoc } from '../index.js'

const defaultApi = (dark) => {
  return [
    createApiDoc(
      dark,
      'value',
      'Number',
      '0',
      'The percentage value for current progress.'
    ),
    createApiDoc(
      dark,
      'color',
      'String',
      'var(--primary)',
      "Set's the color of the stroke."
    ),
    createApiDoc(
      dark,
      'indeterminate',
      'Boolean',
      'false',
      'Constantly animates the progress.'
    )
  ]
}

export const progressCircularApi = (dark, type = 'card') => {
  return [
    ...defaultApiDoc(dark),
    ...defaultApi(dark),
    createApiDoc(
      dark,
      'size',
      'Number',
      '36',
      'Sets the diameter/size of the circle.'
    ),
    createApiDoc(
      dark,
      'width',
      'Number',
      '2',
      'Sets the stroke width of the circle .'
    ),
    createApiDoc(
      dark,
      'rotate',
      'Number',
      '0',
      'Rotates the circle start point in deg.'
    ),
    createApiDoc(dark, 'flat', 'Boolean', 'false', 'Removes all box-shadows.'),
    createApiDoc(
      dark,
      'elevated',
      'Boolean',
      'false',
      'Adds an alternate elevation style.'
    ),
    createApiDoc(
      dark,
      'label',
      'String',
      '',
      'Label to show inside the circle.'
    )
  ]
}

export const progressLinearApi = (dark) => {
  return [
    ...defaultApiDoc(dark),
    ...defaultApi(dark),
    createApiDoc(
      dark,
      'height',
      'Number',
      '9',
      'Sets the height for the component.'
    ),
    createApiDoc(
      dark,
      'active',
      'Boolean',
      'true',
      'Hides the component when not true.'
    ),
    createApiDoc(
      dark,
      'striped',
      'Boolean',
      'false',
      'Adds a stripe background to the stroke.'
    ),
    createApiDoc(
      dark,
      'fillHeight',
      'Boolean',
      'false',
      'Fills the entire height when true.'
    )
  ]
}
