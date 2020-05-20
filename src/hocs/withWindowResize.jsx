import React from 'react'

const withWindowResize = (Component) => {
  return class WithWindowResize extends React.Component {
    static displayName = `WithWindowResize(${
      Component.displayName || Component.name || 'Component'
    })`

    constructor(props) {
      super(props)
      this.state = {
        height: window.innerHeight,
        width: window.innerWidth,
        key: 1
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
      this.setState({ key: this.state.key + 1 })
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
      const { width, height, key } = this.state
      return (
        <Component
          dimensions={{ width, height }}
          size={this.getCurrentSize()}
          {...this.props}
          key={key}
        />
      )
    }
  }
}

export default withWindowResize
