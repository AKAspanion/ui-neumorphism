import PropTypes from 'prop-types'

export const G_FUNC = PropTypes.func
export const G_BOOL = PropTypes.bool
export const G_NUM = PropTypes.number
export const G_STRING = PropTypes.string
export const SIZE_PROP = PropTypes.oneOf(['small', 'medium', 'large'])
export const POSITION_PROP = PropTypes.oneOf(['top', 'right', 'bottom', 'left'])

export const TYPOGRAPHY_PROP_TYPES = {
  dark: G_BOOL,
  type: G_STRING,
  disabled: G_BOOL,
  secondary: G_BOOL
}
