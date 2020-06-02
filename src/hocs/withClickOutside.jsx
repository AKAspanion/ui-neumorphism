import React from 'react'
import { findDOMNode } from 'react-dom'

const withClickOutside = (WrappedComponent) => {
  const componentName =
    WrappedComponent.displayName || WrappedComponent.name || 'Component'
  return class WithClickOutside extends React.Component {
    static displayName = `WithClickOutside(${componentName})`

    constructor(props) {
      super(props)
      this.node = null
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
            this.clickHandler(e, 'Inside')
            return
          }
          currentNode = currentNode.parentNode
        } while (currentNode)
        // click is outside
        this.clickHandler(e)
      } catch (err) {
        throw new Error(err)
      }
    }

    clickHandler(e, type = 'Outside') {
      if (typeof this.node.props[`handleClick${type}`] === 'function') {
        this.node.props[`handleClick${type}`](e)
        return
      }

      if (typeof this.node[`handleClick${type}`] === 'function') {
        this.node[`handleClick${type}`](e)
        return
      }
      if (type === 'Outside') {
        throw new Error(
          `${componentName}: needs a handleClickOutside function to handle outside clicks`
        )
      }
    }

    render() {
      return (
        <WrappedComponent ref={(ref) => (this.node = ref)} {...this.props} />
      )
    }
  }
}

export default withClickOutside
