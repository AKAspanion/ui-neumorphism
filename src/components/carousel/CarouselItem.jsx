import React, { createRef } from 'react'

import styles from './Carousel.module.css'
import { getModuleClasses, passDownProp, getDOMNode } from '../../util'
import { DEFAULT_PROPS, DEFAULT_PROPS_TYPE } from '../../assets/index'

class CarouselItem extends React.Component {
  static displayName = 'NuCarouselItem'

  domRef = createRef()

  get domNode() {
    return getDOMNode(this.domRef.current)
  }

  static defaultProps = DEFAULT_PROPS

  static propTypes = DEFAULT_PROPS_TYPE

  getClasses(type) {
    return getModuleClasses(styles, type)
  }

  render() {
    const { style, className, children } = this.props
    return (
      <div
        ref={this.domRef}
        style={style}
        className={`${this.getClasses('nu-carousel-item')} ${className}`}
      >
        {passDownProp(children, this.props, ['dark'])}
      </div>
    )
  }
}

export default CarouselItem
