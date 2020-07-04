import {
  Home,
  Example,
  FabView,
  TabView,
  ChipView,
  // ListView,
  // MenuView,
  // FormView,
  CardView,
  TableView,
  RadioView,
  BadgeView,
  AlertView,
  DialogView,
  // SelectView,
  // SliderView,
  AvatarView,
  ButtonView,
  SwitchView,
  DividerView,
  TooltipView,
  CarouselView,
  // SnackbarView,
  TextareaView,
  CheckboxView,
  ParallaxView,
  TextFieldView,
  // PaginationView,
  IconButtonView,
  TypographyView,
  ToggleButtonView,
  ProgressLinearView,
  // ExpansionPanelView,
  ProgressCircularView
} from '../pages/index.js'

const routes = [
  {
    id: 1,
    path: '/',
    name: '',
    component: Home
  },
  {
    id: 25,
    path: '/alert',
    name: 'Alert',
    component: AlertView
  },
  {
    id: 22,
    path: '/avatar',
    name: 'Avatar',
    component: AvatarView
  },
  {
    id: 25,
    path: '/badge',
    name: 'Badge',
    component: BadgeView
  },
  {
    id: 4,
    path: '/button',
    name: 'Buttons',
    component: ButtonView
  },
  {
    id: 11,
    path: '/fab',
    name: 'Buttons: Floating Action Button',
    component: FabView
  },
  {
    id: 12,
    path: '/button-icon',
    name: 'Buttons: Icon Button',
    component: IconButtonView
  },
  {
    id: 13,
    path: '/button-toggle',
    name: 'Buttons: Toggle Button',
    component: ToggleButtonView
  },
  {
    id: 3,
    path: '/card',
    name: 'Card',
    component: CardView
  },
  {
    id: 26,
    path: '/carousel',
    name: 'Carousel',
    component: CarouselView
  },
  {
    id: 8,
    path: '/checkbox',
    name: 'Checkbox',
    component: CheckboxView
  },
  {
    id: 23,
    path: '/chip',
    name: 'Chip',
    component: ChipView
  },
  {
    id: 15,
    path: '/dialog',
    name: 'Dialog',
    component: DialogView
  },
  {
    id: 15,
    path: '/divider',
    name: 'Divider',
    component: DividerView
  },
  // {
  //   id: 18,
  //   path: '/expansion-panel',
  //   name: 'Expansion Panel',
  //   component: ExpansionPanelView
  // },
  // {
  //   id: 18,
  //   path: '/form',
  //   name: 'Form',
  //   component: FormView
  // },
  // {
  //   id: 31,
  //   path: '/list',
  //   name: 'List',
  //   component: ListView
  // },
  // {
  //   id: 30,
  //   path: '/menu',
  //   name: 'Menu',
  //   component: MenuView
  // },
  // {
  //   id: 29,
  //   path: '/pagination',
  //   name: 'Pagination',
  //   component: PaginationView
  // },
  {
    id: 37,
    path: '/parallax',
    name: 'Parallax',
    component: ParallaxView
  },
  {
    id: 17,
    path: '/progress-circular',
    name: 'Progress: Circular',
    component: ProgressCircularView
  },
  {
    id: 16,
    path: '/progress-linear',
    name: 'Progress: Linear',
    component: ProgressLinearView
  },
  {
    id: 5,
    path: '/radio',
    name: 'Radio',
    component: RadioView
  },
  // {
  //   id: 21,
  //   path: '/Select',
  //   name: 'Select',
  //   component: SelectView
  // },
  // {
  //   id: 21,
  //   path: '/slider',
  //   name: 'Slider',
  //   component: SliderView
  // },
  // {
  //   id: 7,
  //   path: '/snackbar',
  //   name: 'Snackbar',
  //   component: SnackbarView
  // },
  {
    id: 28,
    path: '/switch',
    name: 'Switch',
    component: SwitchView
  },
  {
    id: 19,
    path: '/table',
    name: 'Table',
    component: TableView
  },
  {
    id: 19,
    path: '/tabs',
    name: 'Tabs',
    component: TabView
  },
  {
    id: 27,
    path: '/text-area',
    name: 'TextArea',
    component: TextareaView
  },
  {
    id: 9,
    path: '/text-field',
    name: 'TextField',
    component: TextFieldView
  },
  {
    id: 22,
    path: '/tooltip',
    name: 'Tooltip',
    component: TooltipView
  },
  {
    id: 10,
    path: '/typography',
    name: '',
    component: TypographyView
  },
  {
    id: 100,
    path: '/examples',
    name: '',
    component: Example
  },
  {
    id: 100,
    path: '*',
    name: '',
    component: Home
  }
]

export default routes
