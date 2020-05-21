import React, { Children, cloneElement } from 'react'

import { Radio } from '../index/'

import radioStyles from '../radio/Radio.module.css'
import { callCallback, getModuleClasses } from '../../util'
import {
  DEFAULT_PROPS_TYPE,
  DEFAULT_PROPS,
  G_STRING,
  G_BOOL,
  G_FUNC,
  G_NODE
} from '../../assets/index'
class RadioGroup extends React.Component {
  static displayName = 'NuRadioGroup'

  static defaultProps = {
    vertical: false,
    ...DEFAULT_PROPS
  }

  static propTypes = {
    name: G_STRING,
    value: G_STRING,
    color: G_STRING,
    disabled: G_BOOL,
    vertical: G_BOOL,
    onChange: G_FUNC,
    children: G_NODE.isRequired,
    ...DEFAULT_PROPS_TYPE
  }

  constructor(props) {
    super(props)
    this.state = {
      active: this.props.value,
      key: 1
    }
  }

  handleChange({ event, checked, value }) {
    const { onChange } = this.props
    if (checked) {
      this.setState({ active: value })
      this.setState({ key: this.state.key + 1 })
    }
    callCallback(onChange, { event, active: value })
  }

  getClasses() {
    return getModuleClasses(
      radioStyles,
      `
        nu-radio-group
        ${this.props.vertical ? 'nu-radio-group--vertical' : ''}
      `
    )
  }

  render() {
    const {
      style,
      children,
      className,
      dark: parentDark,
      color: parentColor,
      disabled: parentDisabled
    } = this.props
    const radios = Children.map(children, (child) => {
      if (child.type === Radio) {
        const { value, dark, color, disabled } = child.props
        return cloneElement(child, {
          dark: dark || parentDark,
          color: color || parentColor,
          disabled: disabled || parentDisabled,
          checked: this.state.active === value,
          onChange: (e) => this.handleChange(e)
        })
      }
    })
    return (
      <div
        style={style}
        key={this.state.key}
        className={`${this.getClasses()} ${className}`}
      >
        {radios}
      </div>
    )
  }
}

export default RadioGroup
