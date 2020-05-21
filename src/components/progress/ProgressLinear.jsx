import React from 'react'

import styles from './Progress.module.css'
import { getModuleClasses, uid, setCSSVariable } from '../../util'
import {
  G_NUM,
  G_BOOL,
  G_STRING,
  DEFAULT_PROPS,
  DEFAULT_PROPS_TYPE
} from '../../assets/index'

class ProgressLinear extends React.Component {
  static displayName = 'NuProgressLinear'

  static defaultProps = {
    value: 0,
    height: 9,
    ...DEFAULT_PROPS
  }

  static propTypes = {
    value: G_NUM,
    height: G_NUM,
    active: G_BOOL,
    color: G_STRING,
    bordered: G_BOOL,
    fillHeight: G_BOOL,
    indeterminate: G_BOOL,
    ...DEFAULT_PROPS_TYPE
  }

  constructor(props) {
    super(props)
    this.state = {
      id: uid()
    }
  }

  componentDidMount() {
    const { color, disabled } = this.props
    const elem = document.getElementById(this.state.id)
    if (!disabled) {
      setCSSVariable(elem, '--selector-bg', color)
    }
  }

  getClass(classType) {
    const { dark, bordered, indeterminate, fillHeight } = this.props
    switch (classType) {
      case 'progress':
        return getModuleClasses(
          styles,
          `
            nu-progress-linear
            nu-progress-linear--${dark ? 'dark' : 'light'}
            ${bordered ? 'nu-progress-linear--bordered' : ''}
          `
        )
      case 'bg':
        return getModuleClasses(
          styles,
          `
            nu-progress-linear--bg
            ${fillHeight ? 'nu-progress-linear--bg-filled' : ''}
            ${indeterminate ? 'nu-progress-linear--indeterminate' : ''}
          `
        )
    }
  }

  getHeightStyle(height) {
    const { active } = this.props
    return {
      height: `${active ? height : 0}px`,
      borderRadius: `${height * 2}px`
    }
  }

  render() {
    const {
      style,
      value,
      height,
      className,
      fillHeight,
      indeterminate
    } = this.props
    const computedValue = value > 100 ? 100 : value < 0 ? 0 : value
    return (
      <div
        aria-valuemin='0'
        role='progressbar'
        aria-valuemax='100'
        aria-valuenow={computedValue}
        style={{ ...style, ...this.getHeightStyle(height) }}
        className={`${this.getClass('progress')} ${className}`}
      >
        <div
          id={this.state.id}
          className={`${this.getClass('bg')}`}
          style={{
            width: `${indeterminate ? 100 : computedValue}%`,
            ...this.getHeightStyle(fillHeight ? height : height - 4)
          }}
        />
      </div>
    )
  }
}

export default ProgressLinear
