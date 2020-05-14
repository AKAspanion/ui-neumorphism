import React from 'react'

import { Body1 } from '../../index'

import styles from './Radio.module.css'
import { uid, getModuleClasses } from '../../util'
import { G_BOOL, G_STRING, SIZE_PROP, G_FUNC } from '../../assets/index'
class Radio extends React.Component {
  static displayName = 'NuRadio'

  static propTypes = {
    id: G_STRING,
    label: G_STRING,
    name: G_STRING,
    checked: G_BOOL,
    required: G_BOOL,
    disabled: G_BOOL,
    color: G_STRING,
    size: SIZE_PROP,
    onChange: G_FUNC
  }

  id = `${uid()}${this.props.value || ''}`

  componentDidMount() {
    const { id, color } = this.props
    const radio = document.getElementById(id || this.id)
    if (radio && color) {
      radio.style.setProperty('--selector-bg', String(color))
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
            nu-radio
            nu-radio--${dark ? 'dark' : 'light'}
            ${disabled ? 'nu-radio--disabled' : ''}
          `
        )
      case 'label':
        return getModuleClasses(
          styles,
          `
            nu-radio-label
            ${disabled ? 'nu-radio-label--disabled' : 'cursor-pointer'}
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
      checked,
      disabled,
      required,
      onClick,
      onChange
    } = this.props

    return (
      <div className={this.getClasses('container')} style={{ ...style }}>
        <input
          type='radio'
          name={name}
          value={value}
          checked={checked}
          onClick={onClick}
          id={id || this.id}
          required={required}
          disabled={disabled}
          className={this.getClasses('input')}
          onChange={() => (onChange ? onChange(value) : null)}
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

export default Radio
