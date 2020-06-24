import { createApiDoc, defaultApiDoc } from '../index.js'

export const chipApi = (dark) => {
  return [
    ...defaultApiDoc(dark),
    createApiDoc(
      dark,
      'label',
      'Boolean',
      'false',
      'Removes the large border radius.'
    ),
    createApiDoc(dark, 'bordered', 'Boolean', 'false', 'Adds a thin border.'),
    createApiDoc(
      dark,
      'outlined',
      'Boolean',
      'false',
      `Removes the chip's elevation and adds a thin border.`
    ),
    createApiDoc(
      dark,
      'closable',
      'Boolean',
      'false',
      'Adds a close icon at the end of chip.'
    ),
    createApiDoc(
      dark,
      'bordered',
      'Boolean',
      'false',
      'Adds a close icon at the end of chip.'
    ),
    createApiDoc(
      dark,
      'closable',
      'Boolean',
      'false',
      'Adds a close icon at the end of chip.'
    ),
    createApiDoc(
      dark,
      'action',
      'Node',
      '',
      'Designates a specific Node for action icon, can be anything from icon to text.'
    ),
    createApiDoc(
      dark,
      'prepend',
      'Node',
      '',
      'Adds a specific Node before chip content, can be anything from icon to text.'
    ),
    createApiDoc(
      dark,
      'append',
      'Node',
      '',
      'Adds a specific Node after chip content, can be anything from icon to text.'
    ),
    createApiDoc(
      dark,
      'closeIcon',
      'Node',
      '',
      'Override the default icon used for closable chips.'
    ),
    createApiDoc(
      dark,
      'type',
      'String',
      "'success' | 'info' | 'warning' | 'error'",
      'Specify a success, info, warning or error chip color.'
    ),
    createApiDoc(
      dark,
      'color',
      'String',
      '',
      'Applies specified color to the chip component.'
    ),
    createApiDoc(
      dark,
      'link',
      'String',
      '',
      'Wraps the chip in <a/> tag and sets its href to the given link value.'
    ),
    createApiDoc(
      dark,
      'active',
      'Boolean',
      'false',
      'Controls whether the chip is in active state.'
    ),
    createApiDoc(dark, 'flat', 'Boolean', 'false', 'Removes elevation.'),
    createApiDoc(
      dark,
      'onAction',
      'Function',
      '',
      'Called when action is clicked.'
    )
  ]
}
