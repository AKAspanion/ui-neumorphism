import React from 'react'

import styles from '../input/Input.module.css'
import {
  DEFAULT_PROPS_TYPE,
  DEFAULT_PROPS,
  G_STRING,
  G_BOOL,
  G_ARR,
  G_NUM,
  G_NODE
} from '../../assets/index'
import { uid, getModuleClasses, callCallback } from '../../util'

import { Subtitle1, Caption, ProgressLinear } from '../../index'

class TextField extends React.Component {
  static displayName = 'NuTextField'

  static defaultProps = {
    type: 'text',
    ...DEFAULT_PROPS
  }

  static propTypes = {
    id: G_STRING,
    rules: G_ARR,
    dense: G_BOOL,
    type: G_STRING,
    hint: G_STRING,
    append: G_NODE,
    prepend: G_NODE,
    value: G_STRING,
    label: G_NODE,
    counter: G_NUM,
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
    const { value, id } = props
    this.state = {
      valid: true,
      focused: false,
      errorMessage: '',
      value: value || '',
      id: `${id || uid()}`,
      count: (value || '').length
    }
  }

  get canShowLabel() {
    const { value } = this.state
    const { placeholder } = this.props
    return !placeholder && !value
  }

  get isDisabled() {
    const { loading, disabled } = this.props
    return loading ? true : disabled
  }

  validate(value) {
    let valid = true
    let errorMessage = 'Invalid'
    const { rules = [], counter } = this.props
    const ruleLength = rules.length
    for (let i = 0; i < ruleLength; i++) {
      const isValid = rules[i](value)
      if (isValid !== true) {
        errorMessage = isValid
        valid = false
        break
      }
    }
    if (counter !== undefined && value.length > counter) {
      valid = false
      errorMessage = `Max ${counter} characters`
    }
    this.setState({ valid })
    this.setState({ errorMessage })
  }

  handleChange(event) {
    const { id, valid } = this.state
    const { onChange, noValidation } = this.props
    const value = event.target.value
    const count = value.length

    if (!noValidation) {
      this.validate(value)
    }

    this.setState({ value })
    this.setState({ count })
    callCallback(onChange, { event, id, value, valid })
  }

  handleFocus(event) {
    const { id } = this.state
    const { onFocus } = this.props
    this.setState({ focused: true })
    callCallback(onFocus, { event, id })
  }

  handleBlur(event) {
    const { id } = this.state
    const { onBlur } = this.props
    this.setState({ focused: false })
    callCallback(onBlur, { event, id })
  }

  getClasses(classType, flag) {
    const { dark, outlined, dense, rounded, readonly, disabled } = this.props
    if (classType === 'container') {
      return getModuleClasses(
        styles,
        `
            nu-text-field-container 
            ${dense ? 'nu-text-field-container--dense' : ''}
            ${rounded ? 'nu-text-field-container--rounded' : ''}
            ${disabled ? 'nu-text-field-container--disabled' : ''}
            `
      )
    } else if (classType === 'text-field') {
      return getModuleClasses(
        styles,
        `
            nu-text-field
            ${outlined ? 'nu-text-field--outlined' : ''}
            nu-text-field--${dark ? 'dark' : 'light'}
            ${rounded ? 'nu-text-field--rounded' : ''}
            ${readonly ? 'nu-text-field--readonly' : ''}
            ${this.isDisabled ? 'nu-text-field--disabled' : ''}
            `
      )
    } else if (classType === 'error') {
      return getModuleClasses(
        styles,
        `nu-text-field-${flag ? 'hint' : 'error'}`
      )
    } else {
      return getModuleClasses(styles, `nu-text-field-${classType}`)
    }
  }

  render() {
    const {
      dark,
      type,
      name,
      hint,
      label,
      style,
      append,
      prepend,
      counter,
      loading,
      disabled,
      readonly,
      className,
      autofocus,
      placeholder,
      noValidation
    } = this.props
    const { id, valid, value, count, errorMessage } = this.state
    return (
      <div
        style={style}
        className={`${this.getClasses('wrapper')} ${className}`}
      >
        {prepend ? (
          <div className={`${this.getClasses('prepend')}`}>{prepend}</div>
        ) : null}
        <div className={`${this.getClasses('container')}`}>
          {this.canShowLabel ? (
            <label htmlFor={id} className={`${this.getClasses('label')}`}>
              <Subtitle1
                secondary
                dark={dark}
                component='div'
                disabled={disabled}
              >
                {label}
              </Subtitle1>
            </label>
          ) : null}
          {loading ? (
            <ProgressLinear
              fillHeight
              height={2}
              dark={dark}
              indeterminate
              className={`${this.getClasses('loading')}`}
            />
          ) : null}
          <input
            id={id}
            type={type}
            name={name}
            value={value}
            readOnly={readonly}
            autoFocus={autofocus}
            placeholder={placeholder}
            disabled={this.isDisabled}
            tabIndex={this.isDisabled ? -1 : undefined}
            onBlur={(e) => this.handleBlur(e)}
            onFocus={(e) => this.handleFocus(e)}
            onChange={(e) => this.handleChange(e)}
            className={`${this.getClasses('text-field')}`}
          />
          <div className={`${this.getClasses('caption-wrapper', valid)}`}>
            {noValidation ? (
              hint
            ) : (
              <Caption
                secondary
                dark={dark}
                component='div'
                className={`${this.getClasses('error', valid)}`}
              >
                {valid ? hint : errorMessage}
              </Caption>
            )}
            {counter ? (
              <Caption
                secondary
                dark={dark}
                component='div'
                className={`${this.getClasses('counter')}`}
              >
                {count}/{counter}
              </Caption>
            ) : null}
          </div>
        </div>
        {append ? (
          <div className={`${this.getClasses('append')}`}>{append}</div>
        ) : null}
      </div>
    )
  }
}

export default TextField
