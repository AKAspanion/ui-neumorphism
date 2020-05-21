import React from 'react'

import { H6 } from '../../index'
import styles from './Card.module.css'
import { getModuleClasses } from '../../util'
import {
  DEFAULT_PROPS_TYPE,
  DEFAULT_PROPS,
  G_STRING,
  G_BOOL,
  G_NUM
} from '../../assets/index'

class CardMedia extends React.Component {
  static displayName = 'NuCardMedia'

  static defaultProps = {
    height: 150,
    ...DEFAULT_PROPS
  }

  static propTypes = {
    height: G_NUM,
    src: G_STRING,
    title: G_STRING,
    rounded: G_BOOL,
    ...DEFAULT_PROPS_TYPE
  }

  getClass(classType) {
    const { dark, rounded } = this.props
    switch (classType) {
      case 'media':
        return getModuleClasses(
          styles,
          `
            nu-card-media
            nu-card-media--${dark ? 'dark' : 'light'}
            ${rounded ? 'nu-card-media--rounded' : ''}
          `
        )
      case 'title':
        return getModuleClasses(styles, 'nu-card-media-title')
    }
  }

  render() {
    const { src, dark, title, height, style, className } = this.props
    return (
      <div
        title={title}
        style={{
          ...style,
          height: `${height}px`,
          backgroundImage: `url(${src})`
        }}
        className={`${this.getClass('media')} ${className}`}
      >
        {title ? (
          <H6 dark={dark} className={`${this.getClass('title')}`}>
            {title}
          </H6>
        ) : null}
      </div>
    )
  }
}

export default CardMedia
