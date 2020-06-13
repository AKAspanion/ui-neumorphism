import React from 'react'

import styles from './Avatar.module.css'

import { getModuleClasses, uid, setCSSVariable } from '../../util'
import {
  DEFAULT_PROPS_TYPE,
  DEFAULT_PROPS,
  SIZE_PROP,
  G_STRING,
  G_BOOL
} from '../../assets/index'

class Avatar extends React.Component {
  image

  static displayName = 'NuAvatar'

  static defaultProps = {
    size: 'medium',
    ...DEFAULT_PROPS
  }

  static propTypes = {
    alt: G_STRING,
    src: G_STRING,
    circle: G_BOOL,
    square: G_BOOL,
    rounded: G_BOOL,
    size: SIZE_PROP,
    color: G_STRING,
    bgColor: G_STRING,
    ...DEFAULT_PROPS_TYPE
  }

  constructor(props) {
    super(props)
    this.state = {
      id: uid(),
      loaded: false
    }
  }

  get size() {
    const s = this.sizeText
    return s === 'small' ? 24 : s === 'medium' ? 40 : s === 'large' ? 56 : 40
  }

  get variant() {
    const { circle, square, rounded } = this.props
    return circle
      ? 'circle'
      : square
      ? 'square'
      : rounded
      ? 'rounded'
      : 'circle'
  }

  get sizeText() {
    const sizes = ['small', 'medium', 'large']
    return sizes.find((s) => s === this.props.size) || 'medium'
  }

  get avatarChildren() {
    const { src, alt, children } = this.props
    const { loaded } = this.state

    if (src && loaded) {
      return <img alt={alt} src={src} width={this.size} height={this.size} />
    } else if (children) {
      return children
    } else if (alt) {
      return alt[0]
    }
  }

  getClasses() {
    return getModuleClasses(
      styles,
      `
        nu-avatar
        nu-avatar--${this.variant}
        nu-avatar--${this.sizeText}
      `
    )
  }

  seeLoaded() {
    const { src } = this.props
    if (!src) {
      return null
    }
    // eslint-disable-next-line no-undef
    this.image = new Image()
    this.image.src = src
    this.image.onload = () => {
      this.setState((state) => ({ ...state, loaded: true }))
    }
    this.image.onerror = () => {
      this.setState((state) => ({ ...state, loaded: false }))
    }
  }

  componentWillMount() {
    this.seeLoaded()
  }

  componentDidMount() {
    const { color, bgColor } = this.props
    const elem = document.getElementById(this.state.id)
    setCSSVariable(elem, '--avatar-bg-color', bgColor)
    setCSSVariable(elem, '--avatar-text-color', color)
  }

  componentDidUpdate({ src }) {
    if (this.props.src !== src) {
      this.seeLoaded()
    }
  }

  componentWillUnmount() {
    if (this.image) {
      this.image.onerror = null
      this.image.onload = null
    }
  }

  render() {
    const { style, className } = this.props
    return (
      <div
        style={style}
        id={this.state.id}
        className={`${this.getClasses('avatar')} ${className}`}
      >
        {this.avatarChildren}
      </div>
    )
  }
}

export default Avatar
