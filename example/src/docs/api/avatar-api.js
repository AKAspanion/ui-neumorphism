import React from 'react'
import { createApiDoc, defaultApiDoc } from '../index.js'

const attribute = (attr) =>
  createApiDoc(
    false,
    attr,
    'String',
    '',
    `The ${attr} attribute for the img element.`
  )

const variant = (type) =>
  createApiDoc(
    false,
    type,
    'Boolean',
    'false',
    `Renders ${type} variant of avatar.`
  )

export const avatarApi = () => {
  return [
    ...defaultApiDoc(false, true),
    attribute('alt'),
    attribute('src'),
    createApiDoc(
      false,
      'size',
      `'small' | 'medium' | 'large' | Number`,
      'medium',
      'The css color of the avatar.'
    ),
    createApiDoc(
      false,
      'color',
      'String',
      <span style={{ color: 'var(--primary-dark)' }}>--white</span>,
      'The css color of the avatar.'
    ),
    createApiDoc(
      false,
      'bgColor',
      'String',
      <span style={{ color: 'var(--primary-dark)' }}>--primary</span>,
      'The css background color of the avatar.'
    ),
    variant('square'),
    variant('rounded')
  ]
}
