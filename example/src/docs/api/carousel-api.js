import { createApiDoc, defaultApiDoc, eventDoc } from '../index.js'

const icon = (dark, type) =>
  createApiDoc(
    dark,
    `${type}Icon`,
    'Node',
    '',
    `Icon to replace default "${type}" icon.`
  )

export const carouselApi = (dark) => {
  return [
    ...defaultApiDoc(dark),
    eventDoc(dark, 'Change'),
    createApiDoc(
      dark,
      'value',
      'Number',
      '',
      'Index of the item to be displayed.'
    ),
    createApiDoc(
      dark,
      'height',
      'Number',
      '400',
      'Sets the height for the Carousel.'
    ),
    createApiDoc(
      dark,
      'interval',
      'Number',
      '5000',
      'The duration between item cycles. Works when cycle prop is used.'
    ),
    icon(dark, 'next'),
    icon(dark, 'prev'),
    icon(dark, 'delimiter'),
    createApiDoc(
      dark,
      'vertical',
      'Boolean',
      'false',
      'Uses a vertical transition when changing slides.'
    ),
    createApiDoc(
      dark,
      'hideDelimiters',
      'Boolean',
      'false',
      "Hides the carousel's bottom delimiters."
    ),
    createApiDoc(
      dark,
      'showArrows',
      'Boolean',
      'true',
      'Display the "next" and "prev" icon buttons.'
    ),
    createApiDoc(
      dark,
      'showArrowsOnHover',
      'Boolean',
      'false',
      'Display the "next" and "prev" icon buttons on hover.'
    ),
    createApiDoc(
      dark,
      'continuous',
      'Boolean',
      'true',
      'Slides will "wrap around" from the last item to the first, and from the first item to the last, when true.'
    ),
    createApiDoc(
      dark,
      'cycle',
      'Boolean',
      'false',
      'The Carousel cycles through items at specific intervals.'
    ),
    createApiDoc(
      dark,
      'reverse',
      'Boolean',
      'false',
      'Reverse the transition direction.'
    )
  ]
}

export const carouselItemApi = (dark) => {
  return [...defaultApiDoc(dark)]
}
