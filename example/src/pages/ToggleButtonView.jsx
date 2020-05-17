import React from 'react'

import Icon from '@mdi/react'
import {
  mdiFormatBold,
  mdiFormatItalic,
  mdiFormatUnderline,
  mdiFormatAlignLeft,
  mdiFormatAlignRight,
  mdiFormatAlignCenter,
  mdiFormatAlignJustify
} from '@mdi/js'

import {
  H4,
  H6,
  H5,
  Card,
  Subtitle1,
  ToggleButton,
  ToggleButtonGroup
} from 'ui-neumorphism'

class ToggleButtonView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: '1',
      key: 1
    }
  }
  handleChange(e) {
    this.setState({ active: e.active })
    this.setState({ key: this.state.key + 1 })
  }
  render() {
    const { dark } = this.props
    const { key, active } = this.state
    return (
      <Card flat dark={dark} key={key}>
        <H4>Toggle Buttons</H4>
        <H6>Toggle buttons can be used to group related options.</H6>
        <br />
        <Subtitle1>
          To emphasize groups of related Toggle buttons, a group should share a
          common container. The <code>ToggleButtonGroup</code> controls the
          selected state of its child buttons when given its own value prop.
        </Subtitle1>
        <br />
        <br />
        <H5 style={{ marginTop: '24px' }}>Mandatory selection</H5>
        <Subtitle1>
          Mandatory <code>ToggleButtonGroup</code> always has a value.
        </Subtitle1>
        <br />
        <Card outlined>
          <div
            style={{
              padding: '64px',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-around'
            }}
          >
            <ToggleButtonGroup value='1' outlined mandatory dark={dark}>
              <ToggleButton value='1' color='var(--primary)'>
                <Icon path={mdiFormatAlignLeft} size={0.9} />
              </ToggleButton>
              <ToggleButton value='2' color='var(--primary)'>
                <Icon path={mdiFormatAlignCenter} size={0.9} />
              </ToggleButton>
              <ToggleButton value='3' color='var(--primary)'>
                <Icon path={mdiFormatAlignRight} size={0.9} />
              </ToggleButton>
              <ToggleButton disabled value='4' color='var(--primary)'>
                <Icon path={mdiFormatAlignJustify} size={0.9} />
              </ToggleButton>
            </ToggleButtonGroup>
          </div>
        </Card>
        <br />
        <br />
        <H5 style={{ marginTop: '24px' }}>Multiple selection</H5>
        <Subtitle1>
          Multiple <code>ToggleButtonGroup</code> allows user to select multiple
          variants and returns value as an array.
        </Subtitle1>
        <br />
        <Card outlined>
          <div
            style={{
              padding: '64px',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-around'
            }}
          >
            <ToggleButtonGroup multiple dark={dark}>
              <ToggleButton value='1' color='var(--primary)'>
                <Icon path={mdiFormatBold} size={0.9} />
              </ToggleButton>
              <ToggleButton value='2' color='var(--primary)'>
                <Icon path={mdiFormatItalic} size={0.9} />
              </ToggleButton>
              <ToggleButton value='3' color='var(--primary)'>
                <Icon path={mdiFormatUnderline} size={0.9} />
              </ToggleButton>
            </ToggleButtonGroup>
          </div>
        </Card>
        <br />
        <br />
        <H5 style={{ marginTop: '24px' }}>Sizes</H5>
        <Subtitle1 style={{ marginBottom: '4px' }}>
          Use <code>size</code> property to change button size.
        </Subtitle1>
        <br />
        <Card
          outlined
          style={{
            padding: '32px',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-around'
          }}
        >
          <div>
            {['small', 'medium', 'large'].map((s, i) => {
              return (
                <ToggleButtonGroup
                  key={i}
                  size={s}
                  multiple
                  dark={dark}
                  value={active}
                  style={{ margin: '16px' }}
                  onChange={(e) => this.handleChange(e)}
                >
                  <ToggleButton value='1' color='var(--primary)'>
                    <Icon path={mdiFormatBold} size={0.9} />
                  </ToggleButton>
                  <ToggleButton value='2' color='var(--primary)'>
                    <Icon path={mdiFormatItalic} size={0.9} />
                  </ToggleButton>
                  <ToggleButton value='3' color='var(--primary)'>
                    <Icon path={mdiFormatUnderline} size={0.9} />
                  </ToggleButton>
                </ToggleButtonGroup>
              )
            })}
          </div>
        </Card>
      </Card>
    )
  }
}

export default ToggleButtonView
