import React from 'react'

import { Card, Radio } from 'ui-neumorphism'

class RadioView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedValue: '1'
    }
  }

  onSelect = (selectedValue) => {
    this.setState({ selectedValue })
  }

  render() {
    const { dark: darkTheme } = this.props
    const { selectedValue } = this.state
    return (
      <Card flat dark={darkTheme}>
        <Radio
          label='Radio 1'
          value='1'
          onChange={this.onSelect}
          checked={selectedValue === '1'}
        />
        <Radio
          label='Radio 2'
          value='2'
          color='#42aaee'
          onChange={this.onSelect}
          checked={selectedValue === '2'}
        />
        <Radio
          label='Radio 2'
          value='3'
          onChange={this.onSelect}
          checked={selectedValue === '3'}
        />
        <Radio
          label='Radio 2'
          value='4'
          disabled
          onChange={this.onSelect}
          checked={selectedValue === '4'}
        />
        <Radio
          label='Radio 2'
          value='4'
          disabled
          onChange={this.onSelect}
          checked
        />
      </Card>
    )
  }
}

export default RadioView
