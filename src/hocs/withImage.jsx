import React from 'react'

const withImage = (WrappedComponent, config = {}) => {
  return class withImage extends React.Component {
    image

    static displayName = `WithImage(${
      WrappedComponent.displayName || WrappedComponent.name || 'Component'
    })`

    constructor(props) {
      super(props)
      this.state = {
        loaded: false,
        height: 0,
        width: 0
      }
    }

    setLoaded() {
      const { src } = this.props
      if (!src) {
        return null
      }
      // eslint-disable-next-line no-undef
      this.image = new Image()
      this.image.src = src
      this.image.onload = () => {
        const { width, height } = this.image
        this.setState((state) => ({ ...state, width, height, loaded: true }))
      }
      this.image.onerror = () => {
        this.setState((state) => ({
          ...state,
          width: 0,
          height: 0,
          loaded: false
        }))
      }
    }

    componentWillMount() {
      this.setLoaded()
    }

    componentDidUpdate({ src }) {
      if (this.props.src !== src) {
        this.setLoaded()
      }
    }

    componentWillUnmount() {
      if (this.image) {
        this.image.onerror = null
        this.image.onload = null
      }
    }

    render() {
      const { loaded, width, height } = this.state
      return (
        <WrappedComponent
          {...this.props}
          loaded={loaded}
          imageWidth={width}
          imageHeight={height}
        />
      )
    }
  }
}

export default withImage
