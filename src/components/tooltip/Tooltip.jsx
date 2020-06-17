import React, { cloneElement, Children, createElement } from 'react'
import { createPortal, findDOMNode } from 'react-dom'

import { Card } from '../../index'

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
    this.controlled = props.open !== undefined
    this.handleMouseOnToolTip = this.handleMouseOnToolTip.bind(this)
  }

  get styles() {
    const sizeStyles = {}
    const { open } = this.props
    const { pos, active } = this.state
    const canView = this.controlled ? open : active

    const pickedStyles = pickKeys(this.props, CSS_DIMENSIONS)
    Object.keys(pickedStyles).map(
      (key) => (sizeStyles[key] = `${pickedStyles[key]}px`)
    )

    return {
      top: `${pos.top}px`,
      left: `${pos.left}px`,
      visibility: canView ? 'visible' : 'hidden',
      ...sizeStyles
    }
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

    this.calcPosition()

    callCallback(callback, e)
    callCallback(isOver ? onOpen : onClose, isOver)
  }

  componentDidMount() {
    this.calcPosition()
  }

  render() {
    const { title, style, className } = this.props
    const children = passDownProp(this.tooltipChildren, this.props, ['dark'])
    const pickedProps = pickKeys(this.props, ['dark', 'inset'])
    return (
      <div style={style} className={className}>
        {children}
        {createPortal(
          <Card
            {...pickedProps}
            role='tooltip'
            id={this.state.id}
            style={this.styles}
            className={`${this.getClasses('tooltip')}`}
          >
            {title}
          </Card>,
          document.body
        )}
      </div>
    )
  }
}

export default Tooltip
