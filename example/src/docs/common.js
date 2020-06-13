import React from 'react'
import { Body2, Caption, Subtitle2 } from 'ui-neumorphism'
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
    type: (
      <Subtitle2 dark={dark} component='div'>
        {type}
      </Subtitle2>
    ),
    initial: (
      <Body2 dark={dark} component='div'>
        {initial}
      </Body2>
    ),
    description: (
      <div>
        <Body2 dark={dark} secondary component='div'>
          {description}
        </Body2>
        {codeCaption ? (
          <Caption dark={dark} component='div' className='mt-3 mb-1'>
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

export const defaultApiDoc = (dark, nodark) => {
  const data = [
    createApiDoc(
      dark,
      'style',
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
  if (!nodark) {
    data.unshift(
      createApiDoc(
        dark,
        'dark',
        'Boolean',
        'false',
        <div>
          Changes theme to dark when <code>true</code>.
        </div>
      )
    )
  }
  return data
}

export const eventDoc = (dark, type, caption, code) => {
  return createApiDoc(
    dark,
    `on${type}`,
    'Function',
    '',
    <div>
      Callback for <code>{type.toLowerCase()}</code> event.
    </div>,
    caption,
    code
  )
}
