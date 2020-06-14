import React from 'react'
import { createApiDoc, defaultApiDoc } from '../index.js'

const attribute = (dark, attr) =>
  createApiDoc(
    dark,
    attr,
    'String',
    '',
    `The ${attr} attribute for the img element.`
  )

const variant = (dark, type) =>
  createApiDoc(
    dark,
    type,
    'Boolean',
    'false',
    `Renders ${type} variant of avatar.`
  )

export const avatarApi = (dark) => {
  return [
    ...defaultApiDoc(dark, true),
    attribute(dark, 'alt'),
    attribute(dark, 'src'),
    createApiDoc(
      dark,
      'size',
      `'small' | 'medium' | 'large' | Number`,
      'medium',
      'The css color of the avatar.'
    ),
    createApiDoc(
      dark,
      'color',
      'String',
      <span style={{ color: 'var(--primary-dark)' }}>--white</span>,
      'The css color of the avatar.'
    ),
    createApiDoc(
      dark,
      'bgColor',
      'String',
      <span style={{ color: 'var(--primary-dark)' }}>--primary</span>,
      'The css background color of the avatar.'
    ),
    variant(dark, 'square'),
    variant(dark, 'rounded')
  ]
}
