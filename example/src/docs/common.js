import React from 'react'
import { Caption } from 'ui-neumorphism'
import CodeBlock from '../containers/CodeBlock.jsx'

export const createApiDoc = (
  dark,
  name,
  type,
  initial,
  description,
  codeCaption,
  descriptionCode
) => {
  return {
    name: <span style={{ color: 'var(--primary)' }}>{name}</span>,
    type,
    initial,
    description: (
      <div>
        {description}
        {codeCaption ? (
          <Caption dark={dark} className='mt-3 mb-1'>
            {codeCaption}
          </Caption>
        ) : null}
        {descriptionCode ? (
          <CodeBlock dark={dark} lang='jsx' noCollapse>
            {descriptionCode}
          </CodeBlock>
        ) : null}
      </div>
    )
  }
}

export const defaultApiDoc = (dark) => {
  return [
    createApiDoc(
      dark,
      'dark',
      'Boolean',
      'false',
      'Changes theme to dark when true.'
    ),
    createApiDoc(
      dark,
      'styles',
      'Object',
      '{}',
      'Styles to be applied on component container.'
    ),
    createApiDoc(
      dark,
      'className',
      'String',
      '',
      'Classes to be applied on component container.'
    )
  ]
}
