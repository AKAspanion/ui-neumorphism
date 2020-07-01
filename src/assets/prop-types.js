import PropTypes from 'prop-types'
import {
  SIZES,
  POSITIONS,
  CONTEXT_COLORS,
  ALTERNATE_BUTONS,
  SELECTION_CONTROLS
} from './types'

export const G_ANY = PropTypes.any
export const G_FUNC = PropTypes.func
export const G_BOOL = PropTypes.bool
export const G_NODE = PropTypes.node
export const G_ARR = PropTypes.array
export const G_NUM = PropTypes.number
export const G_OBJ = PropTypes.object
export const G_STRING = PropTypes.string

export const DEFAULT_PROPS = {
  style: {},
  className: ''
}

export const DEFAULT_PROPS_TYPE = {
  dark: G_BOOL,
  style: G_OBJ,
  className: G_STRING
}

export const SIZE_PROP = PropTypes.oneOf(SIZES)
export const POSITION_PROP = PropTypes.oneOf(POSITIONS)
export const CONTEXT_COLOR_TYPES = PropTypes.oneOf(CONTEXT_COLORS)
export const BUTTON_ALTERNATE_TYPES = PropTypes.oneOf(ALTERNATE_BUTONS)
export const SIZE_PROP_WITH_NUM = PropTypes.oneOfType([SIZE_PROP, G_NUM])
export const SELECTION_CONTROL_TYPES = PropTypes.oneOf(SELECTION_CONTROLS)

export const TYPOGRAPHY_PROP_TYPES = {
  dark: G_BOOL,
  disabled: G_BOOL,
  secondary: G_BOOL,
  component: G_STRING,
  ...DEFAULT_PROPS_TYPE
}

export const SELECTION_CONTROL_PROP_TYPES = {
  value: G_ANY,
  id: G_STRING,
  name: G_STRING,
  label: G_STRING,
  checked: G_BOOL,
  color: G_STRING,
  onClick: G_FUNC,
  required: G_BOOL,
  disabled: G_BOOL,
  onChange: G_FUNC,
  ...DEFAULT_PROPS_TYPE
}

export const COMMON_CARD_DEFAULT_PROPS = {
  flat: false,
  inset: false,
  rounded: false,
  outlined: false,
  bordered: false
}

export const CSS_DIMENSION_DEFAULT_PROPS = {
  width: G_NUM,
  height: G_NUM,
  minWidth: G_NUM,
  maxWidth: G_NUM,
  minHeight: G_NUM,
  maxHeight: G_NUM
}

export const COMMON_CARD_PROPS = {
  flat: G_BOOL,
  inset: G_BOOL,
  rounded: G_BOOL,
  outlined: G_BOOL,
  bordered: G_BOOL,
  elevation: G_NUM,
  ...CSS_DIMENSION_DEFAULT_PROPS
}

export const ALERT_PROP_TYPES = {
  icon: G_NODE,
  dense: G_BOOL,
  color: G_STRING,
  closable: G_BOOL,
  closeIcon: G_NODE,
  ...COMMON_CARD_PROPS,
  ...DEFAULT_PROPS_TYPE,
  border: POSITION_PROP,
  type: CONTEXT_COLOR_TYPES
}

export const CARD_PROP_TYPES = {
  loading: G_BOOL,
  disabled: G_BOOL,
  ...COMMON_CARD_PROPS,
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
  onClick: G_FUNC,
  outlined: G_BOOL,
  bordered: G_BOOL,
  disabled: G_BOOL,
  onMouseOut: G_FUNC,
  bgColor: G_STRING,
  depressed: G_BOOL,
  onMouseOver: G_FUNC,
  className: G_STRING,
  ...DEFAULT_PROPS_TYPE,
  type: BUTTON_ALTERNATE_TYPES
}

export const FAB_BUTTON_PROP_TYPES = {
  top: G_BOOL,
  left: G_BOOL,
  right: G_BOOL,
  fixed: G_BOOL,
  bottom: G_BOOL,
  absolute: G_BOOL,
  animation: G_BOOL,
  ...BUTTON_PROP_TYPES
}

export const TEXT_FIELD_PROP_TYPES = {
  id: G_STRING,
  rules: G_ARR,
  width: G_NUM,
  dense: G_BOOL,
  label: G_NODE,
  height: G_NUM,
  name: G_STRING,
  type: G_STRING,
  hint: G_STRING,
  counter: G_NUM,
  append: G_NODE,
  prepend: G_NODE,
  rounded: G_BOOL,
  value: G_STRING,
  loading: G_BOOL,
  readonly: G_BOOL,
  disabled: G_BOOL,
  outlined: G_BOOL,
  bordered: G_BOOL,
  autofocus: G_BOOL,
  clearable: G_BOOL,
  hideExtra: G_BOOL,
  placeholder: G_STRING
}

export const BUTTON_GROUP_VALUE = PropTypes.oneOfType([
  PropTypes.array,
  PropTypes.string
])

const COMMON_PROGRESS_TYPES = {
  value: G_NUM,
  color: G_STRING,
  indeterminate: G_BOOL
}

export const PROGRESS_LINEAR_DEFAULT_PROPS = {
  value: 0,
  height: 9,
  active: true,
  ...DEFAULT_PROPS
}

export const PROGRESS_LINEAR_PROP_TYPES = {
  height: G_NUM,
  active: G_BOOL,
  striped: G_BOOL,
  bordered: G_BOOL,
  fillHeight: G_BOOL,
  ...DEFAULT_PROPS_TYPE,
  ...COMMON_PROGRESS_TYPES
}

export const PROGRESS_CIRCULAR_DEFAULT_PROPS = {
  size: 36,
  width: 2,
  value: 0,
  rotate: 0,
  ...DEFAULT_PROPS
}

export const PROGRESS_CIRCULAR_PROP_TYPES = {
  size: G_NUM,
  flat: G_BOOL,
  width: G_NUM,
  rotate: G_NUM,
  label: G_STRING,
  elevated: G_BOOL,
  ...DEFAULT_PROPS_TYPE,
  ...COMMON_PROGRESS_TYPES
}

export const TOOLTIP_PROP_TYPES = {
  top: G_BOOL,
  left: G_BOOL,
  inset: G_BOOL,
  right: G_BOOL,
  bottom: G_BOOL,
  visible: G_BOOL,
  ...DEFAULT_PROPS_TYPE,
  transitionProps: G_OBJ,
  content: G_NODE.isRequired,
  ...CSS_DIMENSION_DEFAULT_PROPS
}

export const CHIP_PROP_TYPES = {
  flat: G_BOOL,
  label: G_BOOL,
  active: G_BOOL,
  link: G_STRING,
  append: G_NODE,
  action: G_NODE,
  prepend: G_NODE,
  color: G_STRING,
  size: SIZE_PROP,
  closable: G_BOOL,
  outlined: G_BOOL,
  bordered: G_BOOL,
  onAction: G_FUNC,
  closeIcon: G_NODE,
  ...DEFAULT_PROPS_TYPE,
  type: CONTEXT_COLOR_TYPES
}

export const CAROUSEL_DEFAULT_PROPS = {
  height: 400,
  interval: 5000,
  continuous: true,
  ...DEFAULT_PROPS
}

export const CAROUSEL_PROP_TYPES = {
  value: G_NUM,
  cycle: G_BOOL,
  height: G_NUM,
  reverse: G_BOOL,
  interval: G_NUM,
  nextIcon: G_NODE,
  prevIcon: G_NODE,
  vertical: G_BOOL,
  onChange: G_FUNC,
  showArrows: G_BOOL,
  continuous: G_BOOL,
  delimiterIcon: G_NODE,
  ...DEFAULT_PROPS_TYPE,
  hideDelimiters: G_BOOL,
  showArrowsOnHover: G_BOOL,
  activeDelimiterIcon: G_NODE
}
