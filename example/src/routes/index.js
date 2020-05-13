import {
  Home,
  Example,
  FabView,
  CardView,
  ButtonView
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
    name: "Button",
    component: ButtonView,
  },
  {
    id: 5,
    path: "/fab",
    name: "Floating Action Buttons",
    component: FabView,
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
