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

class Parallax extends React.Component {
  static displayName = 'NuParallax'

  static defaultProps = {
    speed: 1,
    height: 400,
    ...DEFAULT_PROPS
  }

  static propTypes = {
    speed: G_NUM,
    alt: G_STRING,
    src: G_STRING,
    height: G_NUM,
    containerId: G_STRING,
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
            className={this.getClass('nu-parallax--img')}
            style={{ transform: `translate(-50%, ${parallax}px)` }}
          />
        </div>
      )
    } else {
      return null
    }
  }

  handleScroll(e) {
    const { imageHeight, height, speed } = this.props
    const parallaxDist = imageHeight - height
    let parallax = 0
    let scrollTop = 0
    let windowHeight = 0
    let percentScrolled = 0
    let windowScrollHeight = 1
    if (this.state.container) {
      windowHeight = e.target.offsetHeight
      scrollTop = Math.round(e.target.scrollTop)
      windowScrollHeight = e.target.scrollHeight
      percentScrolled = scrollTop / (windowScrollHeight - windowHeight)
    } else {
      const doc = document.documentElement || document.body
      scrollTop = doc.scrollTop
      windowHeight = doc.clientHeight
      windowScrollHeight = doc.scrollHeight
      percentScrolled = scrollTop / (windowScrollHeight - windowHeight)
    }
    parallax = Math.round(parallaxDist * percentScrolled * speed)
    this.setState({ parallax })
  }

  componentWillUnmount() {
    const { container } = this.state
    if (container) {
      container.removeEventListener('scroll', this.handleScroll)
    } else {
      document.removeEventListener('scroll', this.handleScroll)
    }
  }

  componentDidMount() {
    this.setState((state) => {
      const { containerId } = this.props
      const container = document.getElementById(containerId)
      if (container) {
        container.addEventListener('scroll', this.handleScroll)
      } else {
        document.addEventListener('scroll', this.handleScroll)
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
        className={`${this.getClass('nu-parallax')} ${className}`}
      >
        {this.parallaxImage}
      </div>
    )
  }
}

export default withImage(Parallax)
