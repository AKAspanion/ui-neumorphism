import React from 'react'
import { createApiDoc, defaultApiDoc } from '../index.js'

const align = (dark, type) =>
  createApiDoc(
    dark,
    type,
    'Boolean',
    'false',
    `Aligns the badge towards the ${type}.`
  )

export const badgeApi = (dark) => {
  return [
    ...defaultApiDoc(dark),
    createApiDoc(
      dark,
      'dot',
      'Boolean',
      'false',
      'Reduce the size of the badge and hide its contents.'
    ),
    createApiDoc(
      dark,
      'max',
      'Number',
      '',
      'Caps the value of the badge content at this number.'
    ),
    align(dark, 'left'),
    align(dark, 'bottom'),
    createApiDoc(
      dark,
      'color',
      'String',
      <span style={{ color: 'var(--primary-dark)' }}>--white</span>,
      'The css color of the badge.'
    ),
    createApiDoc(
      dark,
      'bgColor',
      'String',
      <span style={{ color: 'var(--primary-dark)' }}>--primary</span>,
      'The css background color of the badge.'
    ),
    createApiDoc(
      dark,
      'borderColor',
      'String',
      <span style={{ color: 'var(--primary-dark)' }}>--white</span>,
      'The css border color of the badge.'
    ),
    createApiDoc(
      dark,
      'content',
      'Node',
      '',
      'Any content you want injected into the badge.'
    ),
    createApiDoc(
      dark,
      'label',
      'String',
      '',
      <span>
        The <code>aria-label</code> used for the badge
      </span>
    ),
    createApiDoc(
      dark,
      'overlap',
      'Boolean',
      'false',
      'Overlaps the given content on top of the component.'
    ),
    createApiDoc(
      dark,
      'square',
      'Boolean',
      'false',
      "Removes the badge's border-radius."
    ),
    createApiDoc(
      dark,
      'visible',
      'Boolean',
      'true',
      'Controls whether the badge is visible or hidden.'
    ),
    createApiDoc(
      dark,
      'inline',
      'Boolean',
      'false',
      <span>
        Moves the badge to be inline with the wrapping element. Supports the
        usage of the <code>left</code> prop.
      </span>
    ),
    createApiDoc(
      dark,
      'bordered',
      'Boolean',
      'false',
      <span>
        Applies a 2px border around the badge . With <code>dot</code> property,
        width is 1.5px.
      </span>
    ),
    createApiDoc(
      dark,
      'noPadding',
      'Boolean',
      'false',
      <span>Removes padding from badge content.</span>
    )
  ]
}
