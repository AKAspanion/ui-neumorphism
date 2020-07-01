import React, { Children } from 'react'

import { SlideCarousel } from '../../index'

import styles from './Carousel.module.css'
import { getModuleClasses, callCallback, passDownProp } from '../../util'
import { CAROUSEL_PROP_TYPES, CAROUSEL_DEFAULT_PROPS } from '../../assets/index'

class Carousel extends React.Component {
  timer
  disabledTimeout

  static displayName = 'NuCarousel'

  static defaultProps = CAROUSEL_DEFAULT_PROPS

  static propTypes = CAROUSEL_PROP_TYPES

  constructor(props) {
    super(props)
    this.state = {
      prevActive: 0,
      disabled: false,
      active: props.value || 0
    }
  }

  get axis() {
    const { vertical } = this.props
    return vertical ? 'Y' : 'X'
  }

  get styles() {
    const { height } = this.props
    return { height }
  }

  get carouselItems() {
    const { active, prevActive } = this.state
    const { children, reverse: reverseProp, continuous } = this.props

    let reverse = prevActive < active
    if (continuous) {
      const lastIndex = children.length - 1
      if (active === 0 && prevActive === lastIndex) reverse = true
      if (prevActive === 0 && active === lastIndex) reverse = false
    }

    reverse = reverseProp ? !reverse : reverse

    return passDownProp(
      Children.map(children, (child, index) => {
        return (
          <SlideCarousel
            appear
            axis={this.axis}
            reverse={reverse}
            in={index === active}
          >
            {child}
          </SlideCarousel>
        )
      }),
      this.props,
      ['dark']
    )
  }

  get nextIcon() {
    const { nextIcon, showArrows, showArrowsOnHover } = this.props
    if (!showArrows) return null

    const classes = `${this.getClasses(
      'nu-carousel-arrow nu-carousel-arrow--next'
    )} ${
      !showArrowsOnHover ? this.getClasses('nu-carousel-arrow--always') : ''
    }`
    const icon = (
      <div className={classes} onClick={() => this.handleIconClick('next')}>
        {nextIcon || <span>&rsaquo;</span>}
      </div>
    )
    return icon
  }

  get prevIcon() {
    const { prevIcon, showArrows, showArrowsOnHover } = this.props
    if (!showArrows) return null

    const classes = `${this.getClasses(
      'nu-carousel-arrow nu-carousel-arrow--prev'
    )} ${
      !showArrowsOnHover ? this.getClasses('nu-carousel-arrow--always') : ''
    }`
    const icon = (
      <div className={classes} onClick={() => this.handleIconClick('prev')}>
        {prevIcon || <span>&rsaquo;</span>}
      </div>
    )
    return icon
  }

  getDelimiters(items) {
    const { active } = this.state
    const { delimiterIcon, activeDelimiterIcon } = this.props
    return items.map((item, index) => {
      return (
        <div
          key={index}
          className={`${
            !delimiterIcon ? this.getClasses('nu-carousel-delimiter') : ''
          } ${
            active === index && !delimiterIcon
              ? this.getClasses('nu-carousel-delimiter--active')
              : ''
          }`}
          onClick={(e) => this.handleDelimiterClick(e, index)}
        >
          {active === index
            ? activeDelimiterIcon || delimiterIcon
            : delimiterIcon}
        </div>
      )
    })
  }

  getClasses(type) {
    const { dark } = this.props
    switch (type) {
      case 'main':
        return getModuleClasses(
          styles,
          `
            nu-carousel
            nu-carousel--${dark ? 'dark' : 'light'}
          `
        )
      default:
        return getModuleClasses(styles, type)
    }
  }

  nextSlide() {
    const { children } = this.props
    const itemsLength = children.length
    const { active, disabled } = this.state
    if (itemsLength && !disabled) {
      const next = active + 1 >= itemsLength ? 0 : active + 1
      this.updateActiveState(next, active)
    }
  }

  prevSlide() {
    const { children } = this.props
    const itemsLength = children.length
    const { active, disabled } = this.state
    if (itemsLength && !disabled) {
      const next = active - 1 < 0 ? itemsLength - 1 : active - 1
      this.updateActiveState(next, active)
    }
  }

  startTimer() {
    if (this.props.cycle) {
      this.timer = setInterval(() => {
        this.stopTimeout()
        this.nextSlide()
        this.startTimeout()
      }, this.props.interval)
    }
  }

  stopTimer() {
    if (this.props.cycle) {
      clearInterval(this.timer)
    }
  }

  startTimeout() {
    this.setState({ disabled: true })
    this.disabledTimeout = setTimeout(() => {
      this.setState({ disabled: false })
    }, 300)
  }

  stopTimeout() {
    clearTimeout(this.disabledTimeout)
  }

  toggleClocks(action = 'stop') {
    this[`${action}Timer`]()
    this[`${action}Timeout`]()
  }

  updateActiveState(active, prevActive) {
    this.setState({ active })
    this.setState({ prevActive })
  }

  handleIconClick(direction) {
    this.toggleClocks()
    this[`${direction}Slide`]()
    this.toggleClocks('start')
  }

  handleDelimiterClick(e, active) {
    const { onDelimiterClick } = this.props

    this.toggleClocks()
    this.updateActiveState(active, this.state.active)
    this.toggleClocks('start')

    callCallback(onDelimiterClick, e)
  }

  componentDidMount() {
    if (this.props.cycle) {
      this.startTimer()
    }
  }

  componentDidUpdate(props, state) {
    const { active } = this.state
    if (JSON.stringify(state.active) !== JSON.stringify(active)) {
      callCallback(props.onChange, { active })
    }
  }

  componentWillUnmount() {
    this.stopTimer()
    this.stopTimeout()
  }

  render() {
    const items = this.carouselItems
    const { style, className, hideDelimiters } = this.props
    return (
      <div
        style={{ ...this.styles, ...style }}
        className={`${this.getClasses('main')} ${className}`}
      >
        <div className={this.getClasses('nu-carousel-container')}>{items}</div>
        {hideDelimiters ? null : (
          <div className={this.getClasses('nu-carousel-controls')}>
            {this.getDelimiters(items)}
          </div>
        )}
        {this.nextIcon}
        {this.prevIcon}
      </div>
    )
  }
}

export default Carousel
