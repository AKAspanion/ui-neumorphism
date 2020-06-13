import React from 'react'

import styles from './Avatar.module.css'

import { getModuleClasses, uid, setCSSVariable } from '../../util'
import {
  SIZE_PROP_WITH_NUM,
  DEFAULT_PROPS_TYPE,
  DEFAULT_PROPS,
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
    square: G_BOOL,
    rounded: G_BOOL,
    color: G_STRING,
    bgColor: G_STRING,
    ...DEFAULT_PROPS_TYPE,
    size: SIZE_PROP_WITH_NUM
  }

  constructor(props) {
    super(props)
    this.state = {
      id: uid(),
      loaded: false
    }
  }

  get initials() {
    const initials = this.props.alt.match(/\b\w/g) || []
    return ((initials.shift() || '') + (initials.pop() || '')).toUpperCase()
  }

  get isSizeNumber() {
    return !isNaN(this.props.size)
  }

  get size() {
    const s = this.sizeText
    if (this.isSizeNumber) return this.props.size
    return s === 'small' ? 24 : s === 'medium' ? 40 : s === 'large' ? 56 : 40
  }

  get variant() {
    const { square, rounded } = this.props
    return square ? 'square' : rounded ? 'rounded' : 'circle'
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
      return this.initials
    }
  }

  getClasses(name) {
    const sizeClass = this.isSizeNumber ? '' : `nu-avatar--${this.sizeText}`
    switch (name) {
      case 'avatar':
        return getModuleClasses(
          styles,
          `
            nu-avatar
            nu-avatar--${this.variant}
            ${sizeClass}
          `
        )
      case 'img':
        return getModuleClasses(styles, 'nu-avatar--img')
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
      this.setState((state) => ({ ...state, loaded: true }))
    }
    this.image.onerror = () => {
      this.setState((state) => ({ ...state, loaded: false }))
    }
  }

  componentWillMount() {
    this.setLoaded()
  }

  componentDidMount() {
    const { color, bgColor } = this.props
    const elem = document.getElementById(this.state.id)
    setCSSVariable(elem, '--avatar-bg-color', bgColor)
    setCSSVariable(elem, '--avatar-text-color', color)
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
    const sizeStyles = {}
    const { style, size, className } = this.props
    if (this.isSizeNumber) {
      sizeStyles.width = `${size}px`
      sizeStyles.height = `${size}px`
    }
    return (
      <div
        id={this.state.id}
        style={{ ...style, ...sizeStyles }}
        className={`${this.getClasses('avatar')} ${className}`}
      >
        {this.avatarChildren}
      </div>
    )
  }
}

export default Avatar
