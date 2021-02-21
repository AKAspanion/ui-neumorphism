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
  export import ProgressCircular = __UINeumorphism.ProgressCircular
  export import ProgressLinear = __UINeumorphism.ProgressLinear
  export import CarouselItem = __UINeumorphism.CarouselItem
  export import Carousel = __UINeumorphism.Carousel
  export import Parallax = __UINeumorphism.Parallax
  export import Tooltip = __UINeumorphism.Tooltip
  export import Divider = __UINeumorphism.Divider
  export import Spacer = __UINeumorphism.Spacer
  export import Dialog = __UINeumorphism.Dialog
  export import Table = __UINeumorphism.Table
  // export import Form = __UINeumorphism.Form
  export import Radio = __UINeumorphism.Radio
  export import RadioGroup = __UINeumorphism.RadioGroup
  export import TextField = __UINeumorphism.TextField
  export import TextArea = __UINeumorphism.TextArea
  export import Switch = __UINeumorphism.Switch
  // export import Slider = __UINeumorphism.Slider
  export import Checkbox = __UINeumorphism.Checkbox
  export import Checkbox = __UINeumorphism.Grow
  export import Checkbox = __UINeumorphism.Fade
  export import Checkbox = __UINeumorphism.Slide
  export import Checkbox = __UINeumorphism.SlideCarousel
  export import overrideThemeVariables = __UINeumorphism.overrideThemeVariables
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

  export interface MouseEvents {
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
      MouseEvents,
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
      MouseEvents,
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
      MouseEvents,
      CommonButtonProps {
    text?: Boolean
    active?: Boolean
    outlined?: Boolean
  }
  export class IconButton extends React.Component<IconButtonProps> {}

  // ToggleButton
  export interface ToggleButtonProps
    extends DefaultProps,
      MouseEvents,
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

  // Progress
  interface CommonProgressProps {
    value?: Number
    color?: String
    indeterminate?: Boolean
  }
  export interface ProgressCircularProps
    extends DefaultProps,
      CommonProgressProps {
    size?: Number
    flat?: Boolean
    width?: Number
    rotate?: Number
    label?: String
    elevated?: Boolean
  }
  export class ProgressCircular extends React.Component<
    ProgressCircularProps
  > {}

  export interface ProgressLinearProps
    extends DefaultProps,
      CommonProgressProps {
    height?: Number
    active?: Boolean
    striped?: Boolean
    bordered?: Boolean
    fillHeight?: Boolean
  }
  export class ProgressLinear extends React.Component<ProgressLinearProps> {}

  //Carousel
  export interface CarouselProps extends DefaultProps {
    value?: Number
    cycle?: Boolean
    height?: Number
    reverse?: Boolean
    interval?: Number
    vertical?: Boolean
    onChange: Function
    showArrows?: Boolean
    continuous?: Boolean
    hideDelimiters?: Boolean
    nextIcon?: React.ReactNode
    prevIcon?: React.ReactNode
    showArrowsOnHover?: Boolean
    delimiterIcon?: React.ReactNode
    activeDelimiterIcon?: React.ReactNode
  }
  export class Carousel extends React.Component<CarouselProps> {}
  export class CarouselItem extends React.Component<DefaultProps> {}

  //Parallax
  export interface ParallaxProps extends DefaultProps {
    alt?: String
    src?: String
    speed?: Number
    height?: Number
    containerId?: String
  }
  export class Parallax extends React.Component<ParallaxProps> {}

  //Tooltip
  export interface TooltipProps extends DefaultProps, DefaultDimensionProps {
    top?: Boolean
    left?: Boolean
    inset?: Boolean
    right?: Boolean
    bottom?: Boolean
    visible?: Boolean
    transitionProps?: Object
    content: React.ReactNode
  }
  export class Tooltip extends React.Component<TooltipProps> {}

  //Divider
  export interface DividerProps extends DefaultProps {
    dense?: Boolean
    elevated?: Boolean
  }
  export class Divider extends React.Component<DividerProps> {}

  //Spacer
  export class Spacer extends React.Component<DefaultProps> {}

  //Dialog
  export interface DialogProps extends DefaultProps, DefaultDimensionProps {
    visible?: Boolean
    onClose?: Function
    persistent?: Boolean
  }
  export class Dialog extends React.Component<DialogProps> {}

  //Table
  export interface TableProps extends DefaultProps {
    flat?: Boolean
    items?: Array
    dense?: Boolean
    headers?: Array
    outlined?: Boolean
    noHeaders?: Boolean
    actions?: React.ReactNode
    description?: React.ReactNode
  }
  export class Table extends React.Component<TableProps> {}

  //SelectionControl
  interface CommonSelectionControlProps {
    value?: any
    id?: String
    color?: String
    disabled?: Boolean
    onChange?: Function
  }

  interface SelectionControlProps
    extends MouseEvents,
      CommonSelectionControlProps {
    name?: String
    label?: String
    checked?: Boolean
    required?: Boolean
  }

  //Radio
  export interface RadioProps extends DefaultProps, SelectionControlProps {}
  export class Radio extends React.Component<RadioProps> {}

  //RadioGroup
  export interface RadioGroupProps
    extends DefaultProps,
      CommonSelectionControlProps {
    vertical?: Boolean
    onChange?: Function
    children: React.ReactNode
  }
  export class RadioGroup extends React.Component<RadioGroupProps> {}

  //Switch
  export interface SwitchProps extends DefaultProps, SelectionControlProps {}
  export class Switch extends React.Component<SwitchProps> {}

  //Checkbox
  export interface CheckboxProps extends DefaultProps, SelectionControlProps {}
  export class Checkbox extends React.Component<CheckboxProps> {}

  //TextField
  export interface TextFieldProps extends DefaultProps {
    id?: String
    name?: String
    type?: String
    hint?: String
    rules?: Array
    value?: String
    width?: Number
    dense?: Boolean
    height?: Number
    counter?: Number
    rounded?: Boolean
    loading?: Boolean
    readonly?: Boolean
    disabled?: Boolean
    outlined?: Boolean
    bordered?: Boolean
    autofocus?: Boolean
    clearable?: Boolean
    hideExtra?: Boolean
    uncontrolled?: Boolean
    placeholder?: String
    onBlur?: Function
    onFocus?: Function
    onInput?: Function
    onKeyUp?: Function
    onChange?: Function
    onKeyDown?: Function
    label?: React.ReactNode
    append?: React.ReactNode
    prepend?: React.ReactNode
    inputStyles?: React.CSSProperties
  }
  export class TextField extends React.Component<TextFieldProps> {}

  //TextArea
  export interface TextAreaProps extends TextFieldProps {
    autoExpand?: Boolean
  }
  export class TextArea extends React.Component<TextAreaProps> {}

  // Transitions
  export interface TransitionProps {
    duration?: Number
  }

  export class Fade extends React.Component<TransitionProps> {}

  export interface GrowProps extends TransitionProps {
    origin?: Number
  }
  export class Grow extends React.Component<GrowProps> {}

  export interface SlideProps extends GrowProps {
    axis?: String
    reverse?: Boolean
  }
  export class Slide extends React.Component<SlideProps> {}

  export class SlideCarousel extends React.Component<SlideProps> {}

  // Functions
  export function overrideThemeVariables(themeObject: Object) {}
}
