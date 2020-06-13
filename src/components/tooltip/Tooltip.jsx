import React, { cloneElement, Fragment, Children } from 'react'
import { createPortal, findDOMNode } from 'react-dom'

import { uid, callCallback } from '../../util'
import {
  DEFAULT_PROPS,
  DEFAULT_PROPS_TYPE,
  G_NODE,
  G_BOOL
} from '../../assets/index'

class Tooltip extends React.Component {
  node

  static defaultProps = {
    bottom: true,
    ...DEFAULT_PROPS
  }

  static propTypes = {
    top: G_BOOL,
    left: G_BOOL,
    right: G_BOOL,
    bottom: G_BOOL,
    title: G_NODE.isRequired,
    ...DEFAULT_PROPS_TYPE
  }

  constructor(props) {
    super(props)
    this.state = {
      tooltipId: uid(),
      active: false,
      wrapper: null,
      pos: {
        top: 0,
        left: 0
      }
    }
    this.handleMouseOnToolTip = this.handleMouseOnToolTip.bind(this)
  }

  handleMouseOnToolTip(e, callback) {
    const isOver = e.type === 'mouseenter'
    this.setState({ active: isOver })

    callCallback(callback, e)
  }

  componentDidMount() {
    const { top, left } = this.node.getBoundingClientRect()
    this.setState({ pos: { top, left } })
  }

  render() {
    const { title, children = [] } = this.props
    const { tooltipId, pos, active } = this.state

    const tooltipChildren = Children.map(children, (child, i) => {
      if (i === 0) {
        const { onMouseLeave, onMouseOver } = child.props
        return cloneElement(child, {
          ...child.props,
          ref: (ref) => (this.node = findDOMNode(ref)),
          onMouseOver: (e) => this.handleMouseOnToolTip(e, onMouseOver),
          onMouseLeave: (e) => this.handleMouseOnToolTip(e, onMouseLeave)
        })
      }
    })

    return (
      <Fragment>
        {tooltipChildren}
        {createPortal(
          <div
            role='tooltip'
            id={tooltipId}
            style={{
              top: `${pos.top}px`,
              left: `${pos.left}px`,
              position: 'absolute'
            }}
          >
            {title}
          </div>,
          document.body
        )}
      </Fragment>
    )
  }
}

export default Tooltip
