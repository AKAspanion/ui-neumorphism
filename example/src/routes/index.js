import {
  Home,
  Example,
  FabView,
  CardView,
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
    id: 2,
    path: "/home",
    name: "Home",
    component: Home,
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
    component: FabView,
  },
  {
    id: 6,
    path: "/radio-group",
    name: "Radio Group",
    component: FabView,
  },
  {
    id: 7,
    path: "/switch",
    name: "Switch",
    component: FabView,
  },
  {
    id: 8,
    path: "/checkbox",
    name: "Checkbox",
    component: FabView,
  },
  {
    id: 9,
    path: "/input",
    name: "Input",
    component: FabView,
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
