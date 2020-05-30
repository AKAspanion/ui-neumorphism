import React from 'react'

import styles from '../input/Input.module.css'
import {
  DEFAULT_PROPS_TYPE,
  DEFAULT_PROPS,
  G_STRING,
  G_BOOL,
  G_NUM,
  G_ARR
} from '../../assets/index'
import { uid, getModuleClasses, callCallback } from '../../util'

import { Subtitle1, Caption } from '../../index'

class TextField extends React.Component {
  static displayName = 'NuTextField'

  static defaultProps = {
    valid: true,
    type: 'text',
    ...DEFAULT_PROPS
  }

  static propTypes = {
    id: G_STRING,
    rules: G_ARR,
    dense: G_BOOL,
    height: G_NUM,
    type: G_STRING,
    hint: G_STRING,
    label: G_STRING,
    rounded: G_BOOL,
    loading: G_BOOL,
    readonly: G_BOOL,
    disabled: G_BOOL,
    outlined: G_BOOL,
    autofocus: G_BOOL,
    clearable: G_BOOL,
    noValidation: G_BOOL,
    placeholder: G_STRING,
    ...DEFAULT_PROPS_TYPE
  }

  constructor(props) {
    super(props)
    this.state = {
      valid: props.valid,
      errorMessage: 'Error',
      value: props.value || '',
      id: `${props.id || uid()}`
    }
  }

  get canShowLabel() {
    const { value } = this.state
    const { placeholder } = this.props
    return !placeholder && !value
  }

  validate(value) {
    let valid = true
    let errorMessage = 'Error'
    const { rules = [] } = this.props
    const ruleLength = rules.length
    for (let i = 0; i < ruleLength; i++) {
      const isValid = rules[i](value)
      if (isValid !== true) {
        errorMessage = isValid
        valid = false
        break
      }
    }
    this.setState({ valid })
    this.setState({ errorMessage })
  }

  handleChange(event) {
    const { id, valid } = this.state
    const { onChange, noValidation } = this.props
    const value = event.target.value

    if (!noValidation) {
      this.validate(value)
    }

    this.setState({ value })
    callCallback(onChange, { event, id, value, valid })
  }

  handleFocus(event) {
    const { id } = this.state
    const { onFocus } = this.props
    callCallback(onFocus, { event, id })
  }

  handleBlur(event) {
    const { id } = this.state
    const { onBlur } = this.props
    callCallback(onBlur, { event, id })
  }

  getClasses(classType) {
    const { dark, outlined, dense, rounded, readonly, disabled } = this.props
    switch (classType) {
      case 'container':
        return getModuleClasses(
          styles,
          `
            nu-text-field-container 
            ${dense ? 'nu-text-field-container--dense' : ''}
            ${disabled ? 'nu-text-field-container--disabled' : ''}
          `
        )
      case 'text-field':
        return getModuleClasses(
          styles,
          `
            nu-text-field
            ${outlined ? 'nu-text-field--outlined' : ''}
            nu-text-field--${dark ? 'dark' : 'light'}
            ${rounded ? 'nu-text-field--rounded' : ''}
            ${readonly ? 'nu-text-field--readonly' : ''}
            ${disabled ? 'nu-text-field--disabled' : ''}
          `
        )
      case 'label':
        return getModuleClasses(styles, 'nu-text-field-label')
      case 'error':
        return getModuleClasses(styles, 'nu-text-field-error')
      default:
        return ''
    }
  }

  render() {
    const {
      dark,
      type,
      name,
      label,
      style,
      disabled,
      readonly,
      className,
      autofocus,
      placeholder,
      noValidation
    } = this.props
    const { id, valid, value, errorMessage } = this.state
    return (
      <div
        style={style}
        className={`${this.getClasses('container')} ${className}`}
      >
        {this.canShowLabel ? (
          <label htmlFor={id} className={`${this.getClasses('label')}`}>
            <Subtitle1 dark={dark} secondary disabled={disabled}>
              {label}
            </Subtitle1>
          </label>
        ) : null}
        <input
          id={id}
          type={type}
          name={name}
          value={value}
          readOnly={readonly}
          disabled={disabled}
          autoFocus={autofocus}
          placeholder={placeholder}
          tabIndex={disabled ? -1 : undefined}
          onBlur={(e) => this.handleBlur(e)}
          onFocus={(e) => this.handleFocus(e)}
          onChange={(e) => this.handleChange(e)}
          className={`${this.getClasses('text-field')}`}
        />
        {noValidation ? null : (
          <Caption dark={dark} className={`${this.getClasses('error')}`}>
            {!valid ? errorMessage : ''}
          </Caption>
        )}
      </div>
    )
  }
}

export default TextField
