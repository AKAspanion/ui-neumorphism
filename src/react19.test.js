import React, { act, createRef } from 'react'
import { createRoot } from 'react-dom/client'

import {
  H1,
  Body1,
  Card,
  CardContent,
  CardHeader,
  CardAction,
  ListItem,
  ListItemGroup,
  ToggleButtonGroup,
  ToggleButton,
  IconButton,
  Button,
  Avatar,
  Chip,
  Fab,
  TabItems,
  TabItem,
  Tabs,
  Tab,
  ProgressCircular,
  ProgressLinear,
  CarouselItem,
  Carousel,
  Tooltip,
  Divider,
  Spacer,
  Dialog,
  Alert,
  Badge,
  Table,
  Radio,
  RadioGroup,
  TextField,
  TextArea,
  Switch,
  Checkbox,
  Grow,
  Fade,
  Slide,
  withResize,
  withClickOutside,
  getDOMNode
} from '.'

globalThis.IS_REACT_ACT_ENVIRONMENT = true

let container
let root
let consoleError
let consoleWarn

beforeEach(() => {
  consoleError = jest.spyOn(console, 'error')
  consoleWarn = jest.spyOn(console, 'warn')
  container = document.createElement('div')
  document.body.appendChild(container)
  root = createRoot(container)
})

afterEach(() => {
  act(() => root.unmount())
  container.remove()
  // React reports removed APIs and bad refs through console.error/warn
  expect(consoleError).not.toHaveBeenCalled()
  expect(consoleWarn).not.toHaveBeenCalled()
  jest.restoreAllMocks()
})

const render = (ui) => act(() => root.render(ui))
const wait = (ms) => act(() => new Promise((resolve) => setTimeout(resolve, ms)))

describe('domNode', () => {
  const cases = {
    H1: <H1>title</H1>,
    Body1: <Body1>text</Body1>,
    Card: <Card>card</Card>,
    CardContent: <CardContent>content</CardContent>,
    CardHeader: <CardHeader title='title' />,
    CardAction: <CardAction>action</CardAction>,
    ListItem: <ListItem title='item' />,
    ListItemGroup: (
      <ListItemGroup>
        <ListItem title='item' />
      </ListItemGroup>
    ),
    ToggleButtonGroup: (
      <ToggleButtonGroup>
        <ToggleButton value='a'>a</ToggleButton>
      </ToggleButtonGroup>
    ),
    ToggleButton: <ToggleButton>toggle</ToggleButton>,
    IconButton: <IconButton>i</IconButton>,
    Button: <Button>button</Button>,
    Avatar: <Avatar>A</Avatar>,
    Chip: <Chip>chip</Chip>,
    Fab: <Fab>+</Fab>,
    Tab: <Tab>tab</Tab>,
    ProgressCircular: <ProgressCircular value={40} />,
    ProgressLinear: <ProgressLinear value={40} />,
    Divider: <Divider />,
    Spacer: <Spacer />,
    Alert: <Alert>alert</Alert>,
    Badge: <Badge content={1}>badge</Badge>,
    Table: <Table headers={[]} items={[]} />,
    Radio: <Radio value='a' />,
    RadioGroup: (
      <RadioGroup>
        <Radio value='a' />
      </RadioGroup>
    ),
    TextField: <TextField label='name' />,
    TextArea: <TextArea label='name' />,
    Switch: <Switch />,
    Checkbox: <Checkbox />,
    Tooltip: (
      <Tooltip content='tip'>
        <span>trigger</span>
      </Tooltip>
    )
  }

  Object.entries(cases).forEach(([name, element]) => {
    it(`${name} exposes its root DOM node`, () => {
      const ref = createRef()
      render(React.cloneElement(element, { ref }))
      expect(ref.current.domNode).toBe(container.firstElementChild)
      expect(getDOMNode(ref.current)).toBe(container.firstElementChild)
    })
  })

  it('Dialog exposes its portaled root', () => {
    const ref = createRef()
    render(<Dialog ref={ref} visible />)
    expect(ref.current.domNode.getAttribute('role')).toBe('dialog')
    expect(document.body.contains(ref.current.domNode)).toBe(true)
  })

  it('getDOMNode ignores values without a DOM node', () => {
    expect(getDOMNode(null)).toBe(null)
    expect(getDOMNode({})).toBe(null)
    expect(getDOMNode(container)).toBe(container)
    expect(getDOMNode('text')).toBe(null)
    expect(getDOMNode(42)).toBe(null)
  })
})

describe('transitions', () => {
  ;[Grow, Fade, Slide].forEach((Transition) => {
    it(`${Transition.displayName} passes the child node to callbacks and keeps the child ref`, async () => {
      const childRef = createRef()
      const onExited = jest.fn()
      const ui = (visible) => (
        <Transition in={visible} timeout={50} onExited={onExited}>
          <Card ref={childRef}>content</Card>
        </Transition>
      )
      render(ui(true))
      const node = container.firstElementChild
      expect(childRef.current.domNode).toBe(node)

      render(ui(false))
      expect(onExited).not.toHaveBeenCalled()
      await wait(80)
      expect(onExited).toHaveBeenCalledWith(node)
    })
  })

  it('does not warn when unmountOnExit leaves no child', async () => {
    const ui = (visible) => (
      <Grow in={visible} unmountOnExit>
        <div>content</div>
      </Grow>
    )
    render(ui(false))
    expect(container.firstElementChild).toBe(null)
    render(ui(true))
    await wait(10)
    expect(container.textContent).toBe('content')
  })

  it('warns once for a child without a DOM node', () => {
    const NoRef = () => <div>no ref</div>
    render(
      <Fade in>
        <NoRef />
      </Fade>
    )
    expect(consoleWarn).toHaveBeenCalledTimes(1)
    consoleWarn.mockClear()
  })

  it('Grow waits for its exit duration before hiding', async () => {
    const ui = (visible) => (
      <Grow in={visible} duration={100}>
        <div>content</div>
      </Grow>
    )
    render(ui(true))
    await wait(10)
    const node = container.firstElementChild
    render(ui(false))
    await wait(30)
    expect(node.style.visibility).not.toBe('hidden')
    await wait(120)
    expect(node.style.visibility).toBe('hidden')
  })
})

describe('Tooltip', () => {
  it('keeps the ref of its trigger', () => {
    const triggerRef = createRef()
    render(
      <Tooltip content='tip'>
        <Button ref={triggerRef}>trigger</Button>
      </Tooltip>
    )
    expect(triggerRef.current.domNode).toBe(
      container.firstElementChild.firstElementChild
    )
  })
})

describe('Tabs', () => {
  it('measures tabs and switches tab items', async () => {
    const widths = [40, 60, 80]
    jest
      .spyOn(window.HTMLElement.prototype, 'getBoundingClientRect')
      .mockImplementation(function () {
        const i = [...this.parentNode.children].indexOf(this)
        return { width: widths[i] || 0, height: 10, top: 0, left: 0 }
      })
    const tabsRef = createRef()
    const ui = (value) => (
      <div>
        <Tabs ref={tabsRef} value={value}>
          <Tab>one</Tab>
          <Tab>two</Tab>
          <Tab>three</Tab>
        </Tabs>
        <TabItems value={value}>
          <TabItem>first</TabItem>
          <TabItem>second</TabItem>
          <TabItem>third</TabItem>
        </TabItems>
      </div>
    )
    render(ui(0))
    render(ui(2))
    await wait(300)
    const selector = tabsRef.current.domNode.lastElementChild
    expect(selector.style.width).toBe('80px')
    expect(selector.style.left).toBe('100px')
  })
})

describe('Carousel', () => {
  it('renders its items', () => {
    render(
      <Carousel>
        <CarouselItem>one</CarouselItem>
        <CarouselItem>two</CarouselItem>
      </Carousel>
    )
    expect(container.textContent).toContain('one')
  })
})

describe('HOCs', () => {
  it('withResize observes the wrapped DOM node', () => {
    const observe = jest.fn()
    globalThis.ResizeObserver = class {
      observe = observe
      disconnect() {}
    }

    class Box extends React.Component {
      domRef = createRef()

      get domNode() {
        return this.domRef.current
      }

      render() {
        return <div ref={this.domRef}>{this.props.size}</div>
      }
    }
    const ResizableBox = withResize(Box)

    render(<ResizableBox />)
    expect(observe).toHaveBeenCalledWith(container.firstElementChild)
    delete globalThis.ResizeObserver
  })

  it('withClickOutside tells inside and outside clicks apart', () => {
    const handleClickInside = jest.fn()
    const handleClickOutside = jest.fn()
    const Panel = withClickOutside(
      class Panel extends React.Component {
        domRef = createRef()

        get domNode() {
          return this.domRef.current
        }

        render() {
          return (
            <div ref={this.domRef}>
              <span>inside</span>
            </div>
          )
        }
      }
    )

    render(
      <Panel
        handleClickInside={handleClickInside}
        handleClickOutside={handleClickOutside}
      />
    )
    act(() => container.querySelector('span').click())
    expect(handleClickInside).toHaveBeenCalledTimes(1)
    expect(handleClickOutside).not.toHaveBeenCalled()

    act(() => document.body.click())
    expect(handleClickOutside).toHaveBeenCalledTimes(1)
  })
})

describe('TextField', () => {
  it('mirrors the value prop when uncontrolled', () => {
    render(<TextField uncontrolled value='a' />)
    render(<TextField uncontrolled value='b' />)
    expect(container.querySelector('input').value).toBe('b')
  })
})
