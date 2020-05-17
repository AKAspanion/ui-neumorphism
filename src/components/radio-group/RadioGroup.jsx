import React, { Children, cloneElement } from 'react'
import PropTypes from 'prop-types'

import './RadioGroup.css'
import { Radio } from 'components'

class RadioGroup extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activeRadio: ''
    }
  }

  static propTypes = {
    dark: PropTypes.bool,
    name: PropTypes.string,
    onChange: PropTypes.func,
    selectedValue: PropTypes.string,
    children: PropTypes.node.isRequired
  }

  componentDidMount() {
    this.setState({
      activeRadio: this.props.selectedValue
    })
  }

  render() {
    const {
      children,
      vertical,
      dark: parentDark,
      onChange: parentChange
    } = this.props
    const radios = Children.map(children, (child) => {
      if (child.type === Radio) {
        const { value, dark } = child.props
        return cloneElement(child, {
          dark: dark || parentDark,
          checked: this.state.activeRadio === value,
          onChange: (activeRadio) => {
            this.setState({ activeRadio })
            if (parentChange && typeof parentChange === 'function') {
              parentChange(activeRadio)
            }
          }
        })
      }
    })
    return (
      <div
        className={`nu-radio-group ${
          !vertical ? 'nu-radio-group--vertical' : ''
        }`}
      >
        {radios}
      </div>
    )
  }
}

export default RadioGroup
