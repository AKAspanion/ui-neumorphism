import { createApiDoc, defaultApiDoc } from '../index.js'

export const progressCircularApi = (dark, type = 'card') => {
  return [
    ...defaultApiDoc(dark),
    createApiDoc(
      dark,
      'value',
      'Number',
      '0',
      'The percentage value for current progress.'
    ),
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
      'indeterminate',
      'Boolean',
      'false',
      'Constantly animates, the progress circular.'
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
      'label',
      'String',
      '',
      'Label to show inside the circle.'
    )
  ]
}
