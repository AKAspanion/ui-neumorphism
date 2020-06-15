import React from 'react'

import { withImage } from '../../index'

import styles from '../parallax/Parallax.module.css'
import { getModuleClasses } from '../../util'
import {
  DEFAULT_PROPS,
  DEFAULT_PROPS_TYPE,
  G_STRING,
  G_NUM
} from '../../assets/index'
import { findDOMNode } from 'react-dom'

class Parallax extends React.Component {
  box

  static displayName = 'NuParallax'

  static defaultProps = {
    height: 300,
    ...DEFAULT_PROPS
  }

  static propTypes = {
    alt: G_STRING,
    src: G_STRING,
    height: G_NUM,
    ...DEFAULT_PROPS_TYPE
  }

  constructor(props) {
    super(props)
    this.state = {
      parallax: 0
    }
    this.handleScroll = this.handleScroll.bind(this)
  }

  get parallaxImage() {
    const { parallax } = this.state
    const { src, alt, loaded } = this.props

    if (src && loaded) {
      return (
        <div className={this.getClass('nu-parallax--img-container')}>
          <img
            alt={alt}
            src={src}
            style={{ transform: `translate(-50%, ${parallax}px)` }}
            className={this.getClass('nu-parallax--img')}
          />
        </div>
      )
    } else {
      return null
    }
  }

  handleScroll(e) {
    if (this.state.container) {
      const windowHeight = e.target.offsetHeight
      const scrollTop = Math.round(e.target.scrollTop)
      const windowScrollHeight = e.target.scrollHeight
      const parallaxDist = this.props.imageHeight - this.props.height
      const percentScrolled = scrollTop / (windowScrollHeight - windowHeight)
      const parallax = Math.round(parallaxDist * percentScrolled)
      this.setState({ parallax })
    } else {
      // TODO
    }
  }

  componentWillUnmount() {
    const { container } = this.state
    if (container) {
      container.removeEventListener('scroll', this.handleScroll)
    } else {
      window.removeEventListener('scroll', this.handleScroll)
    }
  }

  componentDidMount() {
    this.setState((state) => {
      const { containerId } = this.props
      const container = document.getElementById(containerId)
      if (container) {
        container.addEventListener('scroll', this.handleScroll)
      } else {
        window.addEventListener('scroll', this.handleScroll)
      }
      return {
        ...state,
        container
      }
    })
  }

  getClass(type) {
    return getModuleClasses(styles, type)
  }

  render() {
    const { style, height, className } = this.props
    return (
      <div
        style={{ ...style, height: `${height}px` }}
        ref={(ref) => (this.box = findDOMNode(ref))}
        className={`${this.getClass('nu-parallax')} ${className}`}
      >
        {this.parallaxImage}
      </div>
    )
  }
}

export default withImage(Parallax)
