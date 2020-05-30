import React from 'react'
import { findDOMNode } from 'react-dom'

const withClickOutside = (WrappedComponent) => {
  const componentName =
    WrappedComponent.displayName || WrappedComponent.name || 'Component'
  return class WithClickOutside extends React.Component {
    node = null

    static displayName = `WithClickOutside(${componentName})`

    constructor(props) {
      super(props)
      this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount() {
      document.addEventListener('click', this.handleClick)
    }

    componentWillUnmount() {
      document.removeEventListener('click', this.handleClick)
    }

    handleClick = (e) => {
      let currentNode = e.target
      const parentNode = findDOMNode(this.node)
      try {
        do {
          if (currentNode === parentNode) {
            // click is inside
            return
          }
          currentNode = currentNode.parentNode
        } while (currentNode)
        // click is outside
        this.outsideClickHandler(e)
      } catch (err) {
        throw new Error(err)
      }
    }

    outsideClickHandler(e) {
      if (typeof this.node.props.handleClickOutside === 'function') {
        this.node.props.handleClickOutside(e)
        return
      }

      if (typeof this.node.handleClickOutside === 'function') {
        this.node.handleClickOutside(e)
        return
      }

      throw new Error(
        `${componentName}: needs a handleClickOutside function to handle outside clicks`
      )
    }

    render() {
      return (
        <WrappedComponent ref={(ref) => (this.node = ref)} {...this.props} />
      )
    }
  }
}

export default withClickOutside
