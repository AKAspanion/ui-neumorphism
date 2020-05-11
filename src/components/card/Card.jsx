import React from 'react'
import PropTypes from 'prop-types'
import styles from './Card.module.css'
import { getModuleClasses } from '../../util'

class Card extends React.Component {
  static displayName = 'NuCard'
  static propTypes = {
    dark: PropTypes.bool,
    bordered: PropTypes.bool,
    radius: PropTypes.number,
    elevation: PropTypes.string
  }

  getClass() {
    const { dark, elevation, rounded } = this.props
    return getModuleClasses(
      styles,
      `
        nu-card
        elevation-${elevation || 1}
        nu-card--${dark ? 'dark' : 'light'}
        ${rounded ? 'nu-card--rounded' : ''}
      `
    )
  }

  render() {
    const { children, style } = this.props
    return (
      <div style={{ ...style }} className={this.getClass()}>
        {children || 'card'}
      </div>
    )
  }
}

export default Card
