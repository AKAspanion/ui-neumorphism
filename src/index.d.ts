declare module 'ui-neumorphism' {
  export import Avatar = __UINeumorphism.Avatar
  export import Alert = __UINeumorphism.Alert
  export import Badge = __UINeumorphism.Badge
  export import Fab = __UINeumorphism.Fab
  export import Button = __UINeumorphism.Button
  export import IconButton = __UINeumorphism.IconButton
  export import ToggleButton = __UINeumorphism.ToggleButton
  export import ToggleButtonGroup = __UINeumorphism.ToggleButtonGroup
  export import Typography = __UINeumorphism.Typography
  export import Subtitle2 = __UINeumorphism.Subtitle2
  export import Subtitle1 = __UINeumorphism.Subtitle1
  export import Overline = __UINeumorphism.Overline
  export import Caption = __UINeumorphism.Caption
  export import Body2 = __UINeumorphism.Body2
  export import Body1 = __UINeumorphism.Body1
  export import H6 = __UINeumorphism.H6
  export import H5 = __UINeumorphism.H5
  export import H4 = __UINeumorphism.H4
  export import H3 = __UINeumorphism.H3
  export import H2 = __UINeumorphism.H2
  export import H1 = __UINeumorphism.H1
  export import CardContent = __UINeumorphism.CardContent
  export import CardHeader = __UINeumorphism.CardHeader
  export import CardAction = __UINeumorphism.CardAction
  export import CardMedia = __UINeumorphism.CardMedia
  export import Card = __UINeumorphism.Card
  // export import List = __UINeumorphism.List
  // export import ListItem = __UINeumorphism.ListItem
  // export import ListItemGroup = __UINeumorphism.ListItemGroup
  export import Chip = __UINeumorphism.Chip
  export import TabItems = __UINeumorphism.TabItems
  export import TabItem = __UINeumorphism.TabItem
  export import Tabs = __UINeumorphism.Tabs
  export import Tab = __UINeumorphism.Tab
  // export import ProgressCircular = __UINeumorphism.ProgressCircular
  // export import ProgressLinear = __UINeumorphism.ProgressLinear
  // export import CarouselItem = __UINeumorphism.CarouselItem
  // export import Carousel = __UINeumorphism.Carousel
  // export import Parallax = __UINeumorphism.Parallax
  // export import Tooltip = __UINeumorphism.Tooltip
  // export import Divider = __UINeumorphism.Divider
  // export import Spacer = __UINeumorphism.Spacer
  // export import Dialog = __UINeumorphism.Dialog
  // export import Table = __UINeumorphism.Table
  // export import Form = __UINeumorphism.Form
  // export import Radio = __UINeumorphism.Radio
  // export import RadioGroup = __UINeumorphism.RadioGroup
  // export import TextField = __UINeumorphism.TextField
  // export import TextArea = __UINeumorphism.TextArea
  // export import Switch = __UINeumorphism.Switch
  // export import Slider = __UINeumorphism.Slider
  // export import Checkbox = __UINeumorphism.Checkbox
}

declare namespace __UINeumorphism {
  namespace propTypes {
    type sizes = 'small' | 'medium' | 'large'
    type position = 'top' | 'right' | 'bottom' | 'left'
    type context_color = 'success' | 'info' | 'warning' | 'error'
  }

  export interface DefaultProps {
    dark?: Boolean
    className?: String
    style?: React.CSSProperties
  }

  export interface DefaultDimensionProps {
    width?: Number
    height?: Number
    minWidth?: Number
    maxWidth?: Number
    minHeight?: Number
    maxHeight?: Number
  }

  export interface ButtonEvents {
    onClick?: Function
    onMouseUp?: Function
    onMouseOut?: Function
    onMouseMove?: Function
    onMouseDown?: Function
    onMouseOver?: Function
    onMouseEnter?: Function
    onMouseLeave?: Function
  }

  // Typography
  export interface TypographyTypeProps extends DefaultProps {
    component?: String
    disabled?: Boolean
    secondary?: Boolean
  }
  export interface TypographyProps extends TypographyTypeProps {
    type?: String
  }

  export class Typography extends React.Component<TypographyProps> {}

  export class Subtitle2 extends React.Component<TypographyTypeProps> {}
  export class Subtitle1 extends React.Component<TypographyTypeProps> {}
  export class Overline extends React.Component<TypographyTypeProps> {}
  export class Caption extends React.Component<TypographyTypeProps> {}
  export class Body2 extends React.Component<TypographyTypeProps> {}
  export class Body1 extends React.Component<TypographyTypeProps> {}
  export class H6 extends React.Component<TypographyTypeProps> {}
  export class H5 extends React.Component<TypographyTypeProps> {}
  export class H4 extends React.Component<TypographyTypeProps> {}
  export class H3 extends React.Component<TypographyTypeProps> {}
  export class H2 extends React.Component<TypographyTypeProps> {}
  export class H1 extends React.Component<TypographyTypeProps> {}

  //Card
  interface CommonCardProps extends DefaultDimensionProps {
    flat?: Boolean
    inset?: Boolean
    rounded?: Boolean
    outlined?: Boolean
    bordered?: Boolean
    elevation?: Number
  }
  export interface CardProps extends DefaultProps, CommonCardProps {
    loading?: Boolean
    disabled?: Boolean
  }
  export class Card extends React.Component<CardProps> {}

  interface CardContentCommonProps {
    rounded?: Boolean
    disabled?: Boolean
  }

  export interface CardHeaderProps
    extends DefaultProps,
      CardContentCommonProps {
    title?: React.ReactNode
    avatar?: React.ReactNode
    action?: React.ReactNode
    subtitle?: React.ReactNode
  }
  export class CardHeader extends React.Component<CardHeaderProps> {}

  export interface CardMediaProps extends DefaultProps, CardContentCommonProps {
    src?: String
    title?: String
    height?: Number
  }
  export class CardMedia extends React.Component<CardMediaProps> {}

  export interface CardContentProps
    extends DefaultProps,
      CardContentCommonProps {}

  export class CardContent extends React.Component<CardContentProps> {}
  export class CardAction extends React.Component<CardContentProps> {}

  // Chip
  export interface ChipProps extends DefaultProps {
    link?: String
    color?: String
    flat?: Boolean
    label?: Boolean
    active?: Boolean
    closable?: Boolean
    outlined?: Boolean
    bordered?: Boolean
    onAction?: Function
    size?: propTypes.sizes
    append?: React.ReactNode
    action?: React.ReactNode
    prepend?: React.ReactNode
    closeIcon?: React.ReactNode
    type?: propTypes.context_color
  }
  export class Chip extends React.Component<ChipProps> {}

  // Alert
  export interface AlertProps extends DefaultProps, CommonCardProps {
    dense?: Boolean
    color?: String
    closable?: Boolean
    icon?: React.ReactNode
    closeIcon?: React.ReactNode
    border?: propTypes.position
    type?: propTypes.context_color
  }
  export class Alert extends React.Component<AlertProps> {}

  // Avatar
  export interface AvatarProps extends DefaultProps {
    alt?: String
    src?: String
    color?: String
    square?: Boolean
    bgColor?: String
    rounded?: Boolean
    size?: propTypes.sizes | Number
  }
  export class Avatar extends React.Component<AvatarProps> {}

  // Badge
  export interface BadgeProps extends DefaultProps {
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

  // Button
  interface CommonButtonProps {
    color?: String
    bgColor?: String
    rounded?: Boolean
    noPress?: Boolean
    bordered?: Boolean
    disabled?: Boolean
    size?: propTypes.sizes
  }

  export interface ButtonProps
    extends DefaultProps,
      ButtonEvents,
      CommonButtonProps {
    text?: Boolean
    block?: Boolean
    active?: Boolean
    outlined?: Boolean
    depressed?: Boolean
  }
  export class Button extends React.Component<ButtonProps> {}

  // Fab
  export interface FabProps
    extends DefaultProps,
      ButtonEvents,
      CommonButtonProps {
    top?: Boolean
    left?: Boolean
    right?: Boolean
    fixed?: Boolean
    bottom?: Boolean
    absolute?: Boolean
    animation?: Boolean
  }
  export class Fab extends React.Component<FabProps> {}

  // IconButton
  export interface IconButtonProps
    extends DefaultProps,
      ButtonEvents,
      CommonButtonProps {
    text?: Boolean
    active?: Boolean
    outlined?: Boolean
  }
  export class IconButton extends React.Component<IconButtonProps> {}

  // ToggleButton
  export interface ToggleButtonProps
    extends DefaultProps,
      ButtonEvents,
      CommonButtonProps {
    value?: any
    text?: Boolean
    outlined?: Boolean
    selected?: Boolean
  }
  export class ToggleButton extends React.Component<ToggleButtonProps> {}

  export interface ToggleButtonGroupProps extends DefaultProps {
    value?: any
    multiple?: Boolean
    mandatory?: Boolean
  }
  export class ToggleButtonGroup extends React.Component<
    ToggleButtonGroupProps
  > {}

  // Tabs
  export interface TabsProps extends DefaultProps {
    value?: Number
    color?: String
    rounded?: Boolean
    disabled?: Boolean
    outlined?: Boolean
    onClick?: Function
    onChange?: Function
    underlined?: Boolean
  }
  export class Tabs extends React.Component<TabsProps> {}

  export interface TabProps extends DefaultProps {
    onClick?: Function
    onMouseOut?: Function
    onMouseOver?: Function
  }
  export class Tab extends React.Component<TabProps> {}

  export interface TabItemsProps extends DefaultProps {
    value?: Number
    height?: Number
    reverse?: Boolean
    onChange?: Function
  }
  export class TabItems extends React.Component<TabItemsProps> {}
  
  export class TabItem extends React.Component<DefaultProps> {}
}
