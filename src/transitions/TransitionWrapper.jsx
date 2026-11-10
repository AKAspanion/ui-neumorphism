import React, { Children, cloneElement } from 'react'
import { Transition } from 'react-transition-group'

import { callCallback, getDOMNode, warnNoDOMNode } from '../util'

const TRANSITION_CALLBACKS = [
  'onEnter',
  'onEntering',
  'onEntered',
  'onExit',
  'onExiting',
  'onExited'
]

class TransitionWrapper extends React.Component {
  static displayName = 'NuTransitionWrapper'

  static defaultProps = {
    timeout: 0
  }

  child = null

  // react-transition-group falls back to the removed ReactDOM.findDOMNode
  // unless it gets a nodeRef, so resolve the child's DOM node ourselves.
  nodeRef = {
    get current() {
      return this.owner.domNode
    },
    owner: this
  }

  constructor(props) {
    super(props)
    this.state = { updated: 0 }
    this.handleExit = this.handleExit.bind(this)
    this.handleEnter = this.handleEnter.bind(this)
    this.handleExited = this.handleExited.bind(this)
    this.handleExiting = this.handleExiting.bind(this)
    this.handleEntered = this.handleEntered.bind(this)
    this.handleEntering = this.handleEntering.bind(this)
    this.handleAddEndListener = this.handleAddEndListener.bind(this)
  }

  get domNode() {
    return getDOMNode(this.child)
  }

  update(data, callbackName, args) {
    callCallback(this.props.onUpdate, data)

    // with a nodeRef, react-transition-group no longer passes the node to
    // callbacks; keep the (node, ...args) signature for consumers.
    const callback = this.props[callbackName]
    if (typeof callback === 'function') {
      callback(this.domNode, ...args)
    }
  }

  handleExit() {
    this.update('exit', 'onExit', [])
  }

  handleEnter(isAppearing) {
    this.update('enter', 'onEnter', [isAppearing])
  }

  handleExited() {
    this.update('exited', 'onExited', [])
  }

  handleExiting() {
    this.update('exiting', 'onExiting', [])
  }

  handleEntered(isAppearing) {
    this.update('entered', 'onEntered', [isAppearing])
  }

  handleEntering(isAppearing) {
    this.update('entering', 'onEntering', [isAppearing])
  }

  handleAddEndListener(done) {
    const { addEndListener } = this.props
    if (typeof addEndListener === 'function') {
      addEndListener(this.domNode, done)
    }
  }

  // Attach our ref to the child while keeping any ref it already has
  getChildRef(childRef) {
    if (this.childRef !== childRef || !this.mergedRef) {
      this.childRef = childRef
      this.mergedRef = (node) => {
        this.child = node
        let cleanup
        if (typeof childRef === 'function') {
          cleanup = childRef(node)
        } else if (childRef) {
          childRef.current = node
        }
        return () => {
          this.child = null
          if (typeof cleanup === 'function') {
            cleanup()
          } else if (typeof childRef === 'function') {
            childRef(null)
          } else if (childRef) {
            childRef.current = null
          }
        }
      }
    }
    return this.mergedRef
  }

  // While `in` is true the child is always rendered, so a missing node means
  // it can't be resolved (with `in` false, unmountOnExit may leave no child)
  checkDOMNode() {
    if (this.props.in && !this.domNode) {
      warnNoDOMNode(TransitionWrapper.displayName)
    }
  }

  componentDidMount() {
    this.checkDOMNode()
    this.setState({ updated: 1 })
  }

  componentDidUpdate() {
    this.checkDOMNode()
  }

  render() {
    const { children, onUpdate, addEndListener, ...otherProps } = this.props
    TRANSITION_CALLBACKS.forEach((name) => delete otherProps[name])

    const child = Children.only(children)
    return (
      <Transition
        {...otherProps}
        nodeRef={this.nodeRef}
        onExit={this.handleExit}
        onEnter={this.handleEnter}
        onExited={this.handleExited}
        onEntered={this.handleEntered}
        onExiting={this.handleExiting}
        onEntering={this.handleEntering}
        addEndListener={addEndListener ? this.handleAddEndListener : undefined}
      >
        {cloneElement(child, { ref: this.getChildRef(child.props.ref) })}
      </Transition>
    )
  }
}

export default TransitionWrapper
