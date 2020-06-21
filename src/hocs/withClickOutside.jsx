import React from 'react'
import { findDOMNode } from 'react-dom'

import { findClickInside } from '../util/'

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
      const parentNode = findDOMNode(this.node)
      const isClickInside = findClickInside(e, parentNode)
      if (isClickInside) {
        this.clickHandler(e, 'Inside')
      } else {
        this.clickHandler(e, 'Outside')
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
