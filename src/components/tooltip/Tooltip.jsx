import React, { cloneElement, Children, createElement } from 'react'
import { createPortal, findDOMNode } from 'react-dom'

import { Card, Grow } from '../../index'

import styles from './Tooltip.module.css'
import {
  getModuleClasses,
  callCallback,
  passDownProp,
  pickKeys,
  uid
} from '../../util'
import {
  TOOLTIP_PROP_TYPES,
  CSS_DIMENSIONS,
  DEFAULT_PROPS
} from '../../assets/index'

class Tooltip extends React.Component {
  node

  static displayName = 'NuTooltip'

  static defaultProps = {
    bottom: true,
    transition: Grow,
    transitionProps: {},
    ...DEFAULT_PROPS
  }

  static propTypes = TOOLTIP_PROP_TYPES

  constructor(props) {
    super(props)
    this.state = {
      id: uid(),
      active: false,
      pos: {
        top: 0,
        left: 0
      }
    }
    this.controlled = props.visible !== undefined
    this.calcPosition = this.calcPosition.bind(this)
    this.handleMouseOnToolTip = this.handleMouseOnToolTip.bind(this)
  }

  get canView() {
    return this.controlled ? this.props.visible : this.state.active
  }

  get origin() {
    const d = ' center'
    const { top, left, bottom, right } = this.props
    if (top) return 'bottom' + d
    if (left) return 'right' + d
    if (right) return 'left' + d
    if (bottom) return 'top' + d
    return 'top' + d
  }

  get styles() {
    const sizeStyles = {}
    const { pos } = this.state

    const pickedStyles = pickKeys(this.props, CSS_DIMENSIONS)
    Object.keys(pickedStyles).map(
      (key) => (sizeStyles[key] = `${pickedStyles[key]}px`)
    )

    return {
      top: `${pos.top}px`,
      left: `${pos.left}px`,
      ...sizeStyles
    }
  }

  get tooltip() {
    const { content, transitionProps, transition: Transition } = this.props
    const pickedProps = pickKeys(this.props, ['dark', 'inset'])
    return createPortal(
      <Transition
        origin={this.origin}
        {...transitionProps}
        in={this.canView}
        appear
      >
        <Card
          {...pickedProps}
          role='tooltip'
          id={this.state.id}
          style={this.styles}
          className={`${this.getClasses('tooltip')}`}
        >
          {content}
        </Card>
      </Transition>,
      document.body
    )
  }

  get tooltipChildren() {
    return Children.map(this.props.children, (child, i) => {
      if (i === 0) {
        const { onMouseLeave, onMouseOver, className: cc } = child.props || {}
        const cls = `${cc || ''} ${this.getClasses('cursor-pointer')}`.trim()
        const newProps = {
          ...child.props,
          className: cls,
          ref: (ref) => (this.node = findDOMNode(ref)),
          onMouseEnter: (e) => this.handleMouseOnToolTip(e, onMouseOver),
          onMouseLeave: (e) => this.handleMouseOnToolTip(e, onMouseLeave)
        }

        return typeof child === 'string'
          ? createElement('span', newProps, child)
          : cloneElement(child, newProps)
      }
    })
  }

  getClasses(type) {
    switch (type) {
      case 'tooltip':
        return getModuleClasses(styles, 'nu-tooltip')
      default:
        return getModuleClasses(styles, type)
    }
  }

  calcPosition() {
    const { top, left, right } = this.props

    const tooltip = document.getElementById(this.state.id)
    const tooltipDimensions = tooltip.getBoundingClientRect()
    const nodeDimension = this.node.getBoundingClientRect()

    const {
      top: nT,
      left: nL,
      right: nR,
      width: nW,
      height: nH,
      bottom: nB
    } = nodeDimension
    const { width: tW, height: tH } = tooltipDimensions

    const pos = { top: 0, left: 0 }

    if (top) {
      pos.top = nT - tH - 16
      pos.left = nL + nW / 2 - tW / 2
    } else if (left) {
      pos.top = nT - tH / 2 + nH / 2
      pos.left = nL - tW - 16
    } else if (right) {
      pos.top = nT - tH / 2 + nH / 2
      pos.left = nR + 16
    } else {
      pos.top = nB + 16
      pos.left = nL + nW / 2 - tW / 2
    }

    this.setState({ pos })
  }

  handleMouseOnToolTip(e, callback) {
    const { onOpen, onClose } = this.props
    const isOver = e.type === 'mouseenter'

    if (!this.controlled) {
      this.setState({ active: isOver })
    }

    callCallback(callback, e)
    callCallback(isOver ? onOpen : onClose, isOver)
  }

  componentDidMount() {
    this.calcPosition()
    document.addEventListener('scroll', this.calcPosition, true)
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.calcPosition, true)
  }

  render() {
    const { style, className } = this.props
    const children = passDownProp(this.tooltipChildren, this.props, ['dark'])
    return (
      <div style={style} className={className}>
        {children}
        {this.tooltip}
      </div>
    )
  }
}

export default Tooltip
