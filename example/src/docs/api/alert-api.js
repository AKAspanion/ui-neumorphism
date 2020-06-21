import { cardApi } from '../index'
import { createApiDoc } from '../index.js'

export const alertApi = (dark) => {
  return [
    ...cardApi(dark, 'alert').filter(
      (d) => !'disabledloading'.includes(d.title.toLowerCase())
    ),
    createApiDoc(
      dark,
      'dense',
      'Boolean',
      'false',
      "Hides the alert icon and decreases alerts's height."
    ),
    createApiDoc(
      dark,
      'closable',
      'Boolean',
      'false',
      'Adds a close icon that can hide the alert.'
    ),
    createApiDoc(
      dark,
      'icon',
      'Node',
      '',
      'Designates a specific icon to the alert.'
    ),
    createApiDoc(
      dark,
      'closeIcon',
      'Node',
      '',
      'Override the default icon used for closable alerts.'
    ),
    createApiDoc(
      dark,
      'type',
      'String',
      "'success' | 'info' | 'warning' | 'error'",
      'Specify a success, info, warning or error alert.'
    ),
    createApiDoc(
      dark,
      'color',
      'String',
      '',
      'Applies specified color to the alert component.'
    ),
    createApiDoc(
      dark,
      'visible',
      'Boolean',
      'false',
      'Controls whether the alert is visible or hidden.'
    )
  ]
}
