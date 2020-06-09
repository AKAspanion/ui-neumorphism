import React from 'react'

import { Body1 } from '../../index'

import radioStyles from '../radio/Radio.module.css'
import checkboxStyles from '../checkbox/Checkbox.module.css'
import switchStyles from '../switch/Switch.module.css'

import {
  uid,
  getModuleClasses,
  callCallback,
  setCSSVariable,
  pickKeys
} from '../../util'
import {
  DEFAULT_PROPS,
  SELECTION_CONTROL_TYPES,
  SELECTION_CONTROL_PROP_TYPES
} from '../../assets/index'

class SelectionControl extends React.Component {
  static displayName = 'NuSelectionControl'

  static defaultProps = DEFAULT_PROPS

  static propTypes = {
    ...SELECTION_CONTROL_PROP_TYPES,
    type: SELECTION_CONTROL_TYPES.isRequired
  }

  constructor(props) {
    super(props)
    this.state = {
      type: props.type,
      id: `${props.id || uid()}`,
      isChecked: props.checked || false,
      styles: {
        radioStyles,
        switchStyles,
        checkboxStyles
      }
    }
  }

  componentDidMount() {
    const { color, disabled } = this.props
    const elem = document.getElementById(this.state.id)
    if (!disabled) {
      setCSSVariable(elem, '--selector-bg', color)
    }
  }

  handleChange(event) {
    const isChecked = event.target.checked
    this.setState({ isChecked })

    const { id } = this.state
    const { onChange } = this.props
    callCallback(onChange, { event, id, checked: isChecked })
  }

  getInputType(type) {
    return ['radio', 'checkbox', 'switch'].find((i) => i === type) || 'checkbox'
  }

  getClasses(elem) {
    const { dark, disabled } = this.props
    const { type: inputType, styles } = this.state
    const type = this.getInputType(inputType)
    const style = styles[`${type}Styles`]
    const disabledInputClass = disabled ? `nu-${type}--disabled` : ''
    const disabledLabelClass = disabled
      ? `nu-${type}-label--disabled`
      : 'cursor-pointer'

    switch (elem) {
      case 'container':
        return getModuleClasses({}, 'selection-control-container')
      case 'input':
        return getModuleClasses(
          style,
          `
            nu-${type}
            ${disabledInputClass}
            nu-${type}--${dark ? 'dark' : 'light'}
          `
        )
      case 'label':
        return getModuleClasses(
          style,
          `
            nu-${type}-label
            ${disabledLabelClass}
          `
        )
      default:
        break
    }
  }

  render() {
    const { dark, style, label, disabled, className } = this.props
    const { id: stateId, type, isChecked } = this.state
    const inputType = this.getInputType(type)
    const attrs = pickKeys(this.props, [
      'name',
      'value',
      'required',
      'disabled'
    ])
    const events = pickKeys(this.props, [
      'onClick',
      'onMouseUp',
      'onMouseOut',
      'onMouseMove',
      'onMouseDown',
      'onMouseOver',
      'onMouseEnter',
      'onMouseLeave'
    ])
    return (
      <div
        style={style}
        className={`${this.getClasses('container')} ${className}`}
      >
        <input
          {...attrs}
          {...events}
          id={stateId}
          checked={isChecked}
          className={this.getClasses('input')}
          onChange={(e) => this.handleChange(e)}
          type={inputType === 'switch' ? 'checkbox' : inputType}
        />
        <label htmlFor={stateId} className={this.getClasses('label')}>
          <Body1 dark={dark} disabled={disabled}>
            {label}
          </Body1>
        </label>
      </div>
    )
  }
}

export default SelectionControl
