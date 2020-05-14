import {
  Home,
  Example,
  FabView,
  CardView,
  InputView,
  RadioView,
  ButtonView,
  TypographyView
} from '../pages/index.js';

const routes = [{
    id: 1,
    path: "/",
    name: "",
    component: Home
  },
  {
    id: 3,
    path: "/card",
    name: "Card",
    component: CardView,
  },
  {
    id: 4,
    path: "/button",
    name: "Buttons",
    component: ButtonView,
  },
  {
    id: 4,
    path: "/fab",
    name: "Buttons: Floating Action Button",
    component: FabView,
  },
  {
    id: 5,
    path: "/radio",
    name: "Radio",
    component: RadioView,
  },
  {
    id: 6,
    path: "/radio-group",
    name: "Radio Group",
    component: InputView,
  },
  {
    id: 7,
    path: "/switch",
    name: "Switch",
    component: InputView,
  },
  {
    id: 8,
    path: "/checkbox",
    name: "Checkbox",
    component: InputView,
  },
  {
    id: 9,
    path: "/input",
    name: "Input",
    component: InputView,
  },
  {
    id: 9,
    path: "/typography",
    name: "",
    component: TypographyView,
  },
  {
    id: 100,
    path: "/examples",
    name: "",
    component: Example,
  },
  {
    id: 100,
    path: "*",
    name: "",
    component: Home,
  }
];

export default routes;
