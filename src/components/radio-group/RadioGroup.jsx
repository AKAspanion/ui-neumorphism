import React, { Children, cloneElement } from 'react'

import { Radio } from '../index/'

import radioStyles from './RadioGroup.module.css'
import { callCallback, getModuleClasses, uid, passDownProp } from '../../util'
import {
  DEFAULT_PROPS_TYPE,
  DEFAULT_PROPS,
  G_STRING,
  G_BOOL,
  G_FUNC,
  G_NODE,
  G_ANY
} from '../../assets/index'
class RadioGroup extends React.Component {
  static displayName = 'NuRadioGroup'

  static defaultProps = {
    vertical: false,
    ...DEFAULT_PROPS
  }

  static propTypes = {
    id: G_ANY,
    value: G_ANY,
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
      id: `${props.id || uid()}`,
      active: this.props.value,
      key: 1
    }
  }

  handleChange({ event, checked, value }, childOnChange) {
    const { id } = this.state
    const { onChange } = this.props
    if (checked) {
      this.setState({ active: value })
      this.setState({ key: this.state.key + 1 })
    }
    callCallback(onChange, { event, id, value })
    callCallback(childOnChange, { event, checked, value })
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
    const { style, children, className } = this.props
    const radios = passDownProp(
      Children.map(children, (child) => {
        if (child.type === Radio) {
          const { value, onChange } = child.props
          return cloneElement(child, {
            checked: this.state.active === value,
            onChange: (e) => this.handleChange(e, onChange)
          })
        }
      }),
      this.props,
      ['dark', 'color', 'disabled']
    )
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
