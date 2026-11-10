import React from 'react'
import { findClickInside, getDOMNode, warnNoDOMNode } from '../util/'

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
      if (!this.domNode) warnNoDOMNode(WithClickOutside.displayName)
      document.addEventListener('click', this.handleClick)
    }

    componentWillUnmount() {
      document.removeEventListener('click', this.handleClick)
    }

    handleClick = (e) => {
      const parentNode = getDOMNode(this.node)
      const isClickInside = findClickInside(e, parentNode)
      if (isClickInside) {
        this.clickHandler(e, 'Inside')
      } else {
        this.clickHandler(e, 'Outside')
      }
    }

    get domNode() {
      return getDOMNode(this.node)
    }

    clickHandler(e, type = 'Outside') {
      if (typeof this.props[`handleClick${type}`] === 'function') {
        this.props[`handleClick${type}`](e)
        return
      }

      if (this.node && typeof this.node[`handleClick${type}`] === 'function') {
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
        <WrappedComponent
          ref={(ref) => {
            this.node = ref
          }}
          {...this.props}
        />
      )
    }
  }
}

export default withClickOutside
