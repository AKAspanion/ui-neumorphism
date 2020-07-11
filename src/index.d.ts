declare module 'ui-neumorphism' {
  export import Alert = __UINeumorphism.Alert
  export import Avatar = __UINeumorphism.Avatar
  export import Badge = __UINeumorphism.Badge
  export import Button = __UINeumorphism.Button
  export import Fab = __UINeumorphism.Fab
  export import IconButton = __UINeumorphism.IconButton
  export import ToggleButton = __UINeumorphism.ToggleButton
  export import ToggleButtonGroup = __UINeumorphism.ToggleButtonGroup
}

declare namespace __UINeumorphism {
  type sizes = 'small' | 'medium' | 'large'
  type position = 'top' | 'right' | 'bottom' | 'left'
  type context_color = 'success' | 'info' | 'warning' | 'error'

  export interface AlertProps {
    dark?: Boolean
    style?: Object
    className?: String
    flat?: Boolean
    width?: Number
    color?: String
    height?: Number
    inset?: Boolean
    dense?: Boolean
    border?: position
    minWidth?: Number
    maxWidth?: Number
    rounded?: Boolean
    minHeight?: Number
    outlined?: Boolean
    bordered?: Boolean
    elevation?: Number
    maxHeight?: Number
    closable?: Boolean
    onClick?: Function
    type?: context_color
    icon?: React.ReactNode
    closeIcon?: React.ReactNode
  }
  export class Alert extends React.Component<AlertProps> {}

  export interface AvatarProps {
    dark?: Boolean
    style?: Object
    className?: String
    alt?: String
    src?: String
    size?: sizes
    color?: String
    square?: Boolean
    bgColor?: String
    rounded?: Boolean
  }
  export class Avatar extends React.Component<AvatarProps> {}

  export interface BadgeProps {
    dark?: Boolean
    style?: Object
    className?: String
    max?: Number
    dot?: Boolean
    left?: Boolean
    label?: String
    color?: String
    inline?: Boolean
    bottom?: Boolean
    square?: Boolean
    bgColor?: String
    overlap?: Boolean
    visible?: Boolean
    bordered?: Boolean
    noPadding?: Boolean
    borderColor?: String
    content?: React.ReactNode
  }
  export class Badge extends React.Component<BadgeProps> {}

  export interface ButtonProps {
    dark?: Boolean
    style?: Object
    className?: String
    size?: sizes
    style?: Object
    color?: String
    dark?: Boolean
    text?: Boolean
    block?: Boolean
    bgColor?: String
    active?: Boolean
    rounded?: Boolean
    noPress?: Boolean
    outlined?: Boolean
    bordered?: Boolean
    onClick?: Function
    disabled?: Boolean
    depressed?: Boolean
    onClick?: Function
    onMouseUp?: Function
    onMouseOut?: Function
    onMouseMove?: Function
    onMouseDown?: Function
    onMouseOver?: Function
    onMouseEnter?: Function
    onMouseLeave?: Function
  }
  export class Button extends React.Component<ButtonProps> {}

  export interface FabProps {
    dark?: Boolean
    style?: Object
    className?: String
    size?: sizes
    top?: Boolean
    color?: String
    left?: Boolean
    right?: Boolean
    fixed?: Boolean
    active?: Boolean
    bgColor?: String
    bottom?: Boolean
    rounded?: Boolean
    noPress?: Boolean
    bordered?: Boolean
    disabled?: Boolean
    absolute?: Boolean
    animation?: Boolean
    onClick?: Function
    onMouseUp?: Function
    onMouseOut?: Function
    onMouseMove?: Function
    onMouseDown?: Function
    onMouseOver?: Function
    onMouseEnter?: Function
    onMouseLeave?: Function
  }
  export class Fab extends React.Component<FabProps> {}

  export interface IconButtonProps {
    dark?: Boolean
    style?: Object
    className?: String
    size?: sizes
    style?: Object
    color?: String
    dark?: Boolean
    text?: Boolean
    bgColor?: String
    active?: Boolean
    rounded?: Boolean
    noPress?: Boolean
    outlined?: Boolean
    bordered?: Boolean
    onClick?: Function
    disabled?: Boolean
    onClick?: Function
    onMouseUp?: Function
    onMouseOut?: Function
    onMouseMove?: Function
    onMouseDown?: Function
    onMouseOver?: Function
    onMouseEnter?: Function
    onMouseLeave?: Function
  }
  export class IconButton extends React.Component<IconButtonProps> {}

  export interface ToggleButtonGroupProps {
    dark?: Boolean
    style?: Object
    className?: String
    value?: any
    size?: sizes
    style?: Object
    color?: String
    dark?: Boolean
    text?: Boolean
    bgColor?: String
    active?: Boolean
    rounded?: Boolean
    noPress?: Boolean
    outlined?: Boolean
    bordered?: Boolean
    onClick?: Function
    disabled?: Boolean
    onClick?: Function
    multiple?: Boolean
    mandatory?: Boolean
    onMouseUp?: Function
    onMouseOut?: Function
    onMouseMove?: Function
    onMouseDown?: Function
    onMouseOver?: Function
    onMouseEnter?: Function
    onMouseLeave?: Function
  }
  export class ToggleButtonGroup extends React.Component<
    ToggleButtonGroupProps
  > {}

  export interface ToggleButtonProps {
    dark?: Boolean
    style?: Object
    className?: String
    value?: any
    size?: sizes
    style?: Object
    color?: String
    dark?: Boolean
    text?: Boolean
    bgColor?: String
    active?: Boolean
    selected?: boolean
    rounded?: Boolean
    noPress?: Boolean
    outlined?: Boolean
    bordered?: Boolean
    onClick?: Function
    disabled?: Boolean
    onClick?: Function
    onMouseUp?: Function
    onMouseOut?: Function
    onMouseMove?: Function
    onMouseDown?: Function
    onMouseOver?: Function
    onMouseEnter?: Function
    onMouseLeave?: Function
  }
  export class ToggleButton extends React.Component<ToggleButtonProps> {}
}
