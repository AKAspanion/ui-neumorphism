import PropTypes from 'prop-types'

export const G_FUNC = PropTypes.func
export const G_BOOL = PropTypes.bool
export const G_NODE = PropTypes.node
export const G_ARR = PropTypes.array
export const G_NUM = PropTypes.number
export const G_OBJ = PropTypes.object
export const G_STRING = PropTypes.string

export const DEFAULT_PROPS = {
  className: '',
  style: {}
}

export const DEFAULT_PROPS_TYPE = {
  dark: G_BOOL,
  style: G_OBJ,
  className: G_STRING
}

export const SIZE_PROP = PropTypes.oneOf(['small', 'medium', 'large'])
export const POSITION_PROP = PropTypes.oneOf(['top', 'right', 'bottom', 'left'])
export const SELECTION_CONTROL_TYPES = PropTypes.oneOf(['radio', 'checkbox', 'switch'])
export const BUTTON_ALTERNATE_TYPES = PropTypes.oneOf(['fab', 'icon', 'toggle'])

export const TYPOGRAPHY_PROP_TYPES = {
  dark: G_BOOL,
  disabled: G_BOOL,
  secondary: G_BOOL,
  component: G_STRING,
  ...DEFAULT_PROPS_TYPE
}

export const SELECTION_CONTROL_PROP_TYPES = {
  id: G_STRING,
  label: G_STRING,
  name: G_STRING,
  checked: G_BOOL,
  required: G_BOOL,
  disabled: G_BOOL,
  color: G_STRING,
  onClick: G_FUNC,
  onChange: G_FUNC,
  ...DEFAULT_PROPS_TYPE
}

export const BUTTON_PROP_TYPES = {
  style: G_OBJ,
  dark: G_BOOL,
  text: G_BOOL,
  block: G_BOOL,
  active: G_BOOL,
  rounded: G_BOOL,
  size: SIZE_PROP,
  color: G_STRING,
  outlined: G_BOOL,
  disabled: G_BOOL,
  depressed: G_BOOL,
  onClick: G_FUNC,
  mouseOut: G_FUNC,
  mouseOver: G_FUNC,
  className: G_STRING,
  type: BUTTON_ALTERNATE_TYPES,
  ...DEFAULT_PROPS_TYPE
}

export const BUTTON_GROUP_VALUE = PropTypes.oneOfType([PropTypes.string, PropTypes.array])
