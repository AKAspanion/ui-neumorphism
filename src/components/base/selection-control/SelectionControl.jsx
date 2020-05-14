import React from 'react'

import { Body1 } from '../../index'

import radioStyles from '../radio/Radio.module.css'
import checkboxStyles from '../checkbox/Checkbox.module.css'

import { uid, getModuleClasses, setCSSVariable } from '../../util'
import {
  SELECTION_CONTROL_TYPES,
  SELECTION_CONTROL_PROP_TYPES
} from '../../assets/index'

class SelectionControl extends React.Component {
  static displayName = 'NuSelectionControl'

  static propTypes = {
    ...SELECTION_CONTROL_PROP_TYPES,
    type: SELECTION_CONTROL_TYPES.isRequired
  }

  constructor(props) {
    super(props)
    this.state = {
      id: `${uid()}${this.props.value || ''}`,
      isChecked: props.checked || false,
      type: props.type,
      styles: {
        radioStyles,
        checkboxStyles,
        switchStyles: checkboxStyles
      }
    }
  }

  handleChange(event) {
    const isChecked = event.target.checked
    this.setState({ isChecked })

    const { onChange } = this.props
    if (onChange) {
      onChange({ event, checked: isChecked })
    }
  }

  componentDidMount() {
    const { id, color, disabled } = this.props
    if (!disabled) {
      setCSSVariable(id || this.state.id, '--selector-bg', color)
    }
  }

  getClasses(elem) {
    const { dark, disabled } = this.props
    const { type, styles } = this.state

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
    const {
      id,
      dark,
      name,
      value,
      style,
      label,
      disabled,
      required,
      onClick
    } = this.props
    const { id: stateId, type, isChecked } = this.state
    const inputType =
      ['radio', 'checkbox', 'switch'].find((i) => i === type) || 'checkbox'
    return (
      <div className={this.getClasses('container')} style={{ ...style }}>
        <input
          name={name}
          value={value}
          onClick={onClick}
          id={id || stateId}
          required={required}
          disabled={disabled}
          checked={isChecked}
          className={this.getClasses('input')}
          onChange={(e) => this.handleChange(e)}
          type={inputType === 'switch' ? 'checkbox' : inputType}
        />
        <label htmlFor={id || stateId} className={this.getClasses('label')}>
          <Body1 dark={dark} disabled={disabled}>
            {label}
          </Body1>
        </label>
      </div>
    )
  }
}

export default SelectionControl
