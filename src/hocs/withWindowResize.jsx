import React from 'react'

const withWindowResize = (WrappedComponent) => {
  return class WithWindowResize extends React.Component {
    static displayName = `WithWindowResize(${
      WrappedComponent.displayName || WrappedComponent.name || 'Component'
    })`

    constructor(props) {
      super(props)
      this.state = {
        height: window.innerHeight,
        width: window.innerWidth
      }
    }

    componentDidMount() {
      window.addEventListener('resize', this.updateDimensions.bind(this))
    }

    componentWillUnmount() {
      window.removeEventListener('resize', this.updateDimensions.bind(this))
    }

    updateDimensions = () => {
      this.setState({ width: window.innerWidth, height: window.innerHeight })
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
          dimensions={{ width, height }}
          size={this.getCurrentSize()}
          {...this.props}
        />
      )
    }
  }
}

export default withWindowResize
