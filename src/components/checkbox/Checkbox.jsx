import React from 'react'
import { Body1 } from '../../index'

import styles from './Checkbox.module.css'
import { uid, getModuleClasses, setCSSVariable } from '../../util'
import { G_BOOL, G_STRING, SIZE_PROP, G_FUNC } from '../../assets/index'
class Checkbox extends React.Component {
  static displayName = 'NuCheckbox'

  static propTypes = {
    id: G_STRING,
    name: G_STRING,
    label: G_STRING,
    checked: G_BOOL,
    required: G_BOOL,
    disabled: G_BOOL,
    color: G_STRING,
    size: SIZE_PROP,
    onChange: G_FUNC
  }

  constructor(props) {
    super(props)
    this.state = {
      isChecked: props.checked || false
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
      setCSSVariable(id || this.id, '--selector-bg', color)
    }
  }

  getClasses(type) {
    const { dark, disabled } = this.props
    switch (type) {
      case 'container':
        return getModuleClasses({}, 'selection-control-container')
      case 'input':
        return getModuleClasses(
          styles,
          `
            nu-checkbox
            nu-checkbox--${dark ? 'dark' : 'light'}
            ${disabled ? 'nu-checkbox--disabled' : ''}
          `
        )
      case 'label':
        return getModuleClasses(
          styles,
          `
            nu-checkbox-label
            ${disabled ? 'nu-checkbox-label--disabled' : 'cursor-pointer'}
          `
        )
      default:
        break
    }
  }

  id = `${uid()}${this.props.value || ''}`

  render() {
    const {
      id,
      dark,
      name,
      value,
      style,
      label,
      required,
      disabled,
      onClick
    } = this.props
    const { isChecked } = this.state
    return (
      <div className={this.getClasses('container')} style={{ ...style }}>
        <input
          name={name}
          value={value}
          type='checkbox'
          onClick={onClick}
          id={id || this.id}
          required={required}
          disabled={disabled}
          checked={isChecked}
          className={this.getClasses('input')}
          onChange={(e) => this.handleChange(e)}
        />
        <label htmlFor={id || this.id} className={this.getClasses('label')}>
          <Body1 dark={dark} disabled={disabled}>
            {label}
          </Body1>
        </label>
      </div>
    )
  }
}
export default Checkbox
