import React from 'react'

import { Card, Radio, RadioGroup, H4, H6, H5, Subtitle1 } from 'ui-neumorphism'

class RadioView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedValue: '4',
      key: 1
    }
  }

  onSelect = ({ value: selectedValue }) => {
    this.setState({ selectedValue })
    this.setState({ key: this.state.key + 1 })
  }

  render() {
    const { dark } = this.props
    const { selectedValue } = this.state
    return (
      <Card flat dark={dark}>
        <H4>Radio</H4>
        <H6>Radio buttons allow the user to select one option from a set.</H6>
        <br />
        <Subtitle1>
          Use radio buttons when the user needs to see all available options.
          <br />
          Radio buttons should have the most commonly used option selected by
          default.
        </Subtitle1>
        <br />
        <br />
        <H5 style={{ marginTop: '24px' }}>RadioGroup</H5>
        <Subtitle1>
          RadioGroup is a wrapper used to group Radio components that provides
          an easier API.
        </Subtitle1>
        <br />
        <Card outlined>
          <div
            style={{
              padding: '32px',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-around'
            }}
          >
            <RadioGroup value='1' dark={dark} color='var(--primary)'>
              <Radio value='1' label='Female' />
              <Radio value='2' label='Male' />
              <Radio value='3' label='Other' disabled />
            </RadioGroup>
          </div>
        </Card>
        <br />
        <br />
        <H5 style={{ marginTop: '24px' }}>Standalone radio buttons</H5>
        <Subtitle1>
          Radio can also be used standalone, without the RadioGroup wrapper.
        </Subtitle1>
        <br />
        <Card outlined>
          <div
            style={{
              padding: '32px',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-around'
            }}
          >
            <Card flat dark={dark} key={this.state.key}>
              <Radio
                value='1'
                color='#42aaee'
                onChange={this.onSelect}
                checked={selectedValue === '1'}
              />
              <Radio
                value='2'
                color='red'
                onChange={this.onSelect}
                checked={selectedValue === '2'}
              />
              <Radio
                value='3'
                color='green'
                onChange={this.onSelect}
                checked={selectedValue === '3'}
              />
              <Radio
                value='4'
                onChange={this.onSelect}
                checked={selectedValue === '4'}
              />
              <Radio
                value='5'
                disabled
                color='#42aaee'
                onChange={this.onSelect}
                checked={selectedValue === '5'}
              />
            </Card>
          </div>
        </Card>
        <br />
        <br />
        <H5 style={{ marginTop: '24px' }}>Orientation</H5>
        <Subtitle1>
          RadioGroup wrapper can be used with <code>vertical</code> flag to
          stack them vertically.
        </Subtitle1>
        <br />
        <Card outlined>
          <div
            style={{
              padding: '32px',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-around'
            }}
          >
            <RadioGroup vertical value='1' dark={dark} color='var(--primary)'>
              <Radio value='1' label='Female' />
              <Radio value='2' label='Male' />
              <Radio value='3' label='Other' disabled />
            </RadioGroup>
          </div>
        </Card>
        <br />
        <br />
        <H5>API</H5>
        <Subtitle1>Coming soon..</Subtitle1>
      </Card>
    )
  }
}

export default RadioView
