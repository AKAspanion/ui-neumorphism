import React from 'react'
import { findDOMNode } from 'react-dom'

const withWindowResize = (WrappedComponent) => {
  return class WithWindowResize extends React.Component {
    static displayName = `WithWindowResize(${
      WrappedComponent.displayName || WrappedComponent.name || 'Component'
    })`

    constructor(props) {
      super(props)
      this.state = {
        height: null,
        width: null
      }
      this.node = null
      this.resizeObserver = null
      this.updateDimensions = this.updateDimensions.bind(this)
    }

    componentDidMount() {
      // eslint-disable-next-line no-undef
      this.resizeObserver = new ResizeObserver((entries) => {
        const { width: currentWidth, height: currentHeight } = this.state
        entries.forEach((entry) => {
          const { width, height } = (entry && entry.contentRect) || {}
          const isSizeChanged =
            currentWidth !== width || currentHeight !== height

          if (isSizeChanged) {
            this.updateDimensions({ width, height })
          }
        })
      })

      this.resizeObserver.observe(this.node)
    }

    componentWillUnmount() {
      if (this.resizeObserver) {
        this.resizeObserver.disconnect()
      }
    }

    updateDimensions = ({ width, height }) => {
      this.setState({ width, height })
    }

    getCurrentSize() {
      const { width } = this.state
      return width > 1904
        ? 'xl'
        : width > 1264
          ? 'lg'
          : width > 960
            ? 'md'
            : width > 600
              ? 'sm'
              : 'xs'
    }

    render() {
      const { width, height } = this.state
      return (
        <WrappedComponent
          ref={(ref) => (this.node = findDOMNode(ref))}
          dimensions={{ width, height }}
          size={this.getCurrentSize()}
          {...this.props}
        />
      )
    }
  }
}

export default withWindowResize
