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
import CodeBlock from '../containers/CodeBlock.jsx'
import { toggleButtons } from '../assets/'

class ToggleButtonView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      mandatoryActive: '1',
      multipleActive: [],
      active: ['1'],
      key: 1
    }
  }

  mandatoryGroupChange(e) {
    this.setState({ mandatoryActive: e.active })
  }

  multipleGroupChange(e) {
    this.setState({ multipleActive: e.active })
  }

  handleChange(e) {
    this.setState({ active: e.active })
    this.setState({ key: this.state.key + 1 })
  }

  render() {
    const { dark } = this.props
    const { key, active } = this.state

    const sizeDoc = `${toggleButtons(
      dark,
      'multiple',
      `value={active} size='small'`
    )}

${toggleButtons(dark, 'multiple', `value={active} size='medium'`)}

${toggleButtons(dark, 'multiple', `value={active} size='large'`)}
`
    return (
      <Card flat dark={dark} key={key}>
        <H4>Toggle Buttons</H4>
        <H6>Toggle buttons can be used to group related options.</H6>
        <br />
        <Subtitle1 className='mb-1'>
          To emphasize groups of related Toggle buttons, a group should share a
          common container.
        </Subtitle1>
        <Subtitle1>
          The <code>ToggleButtonGroup</code> controls the selected state of its
          child buttons when given its own value prop.
        </Subtitle1>
        <br />
        <br />
        <H5>Mandatory selection</H5>
        <Subtitle1>
          Mandatory <code>ToggleButtonGroup</code> always has a value.
        </Subtitle1>
        <br />
        <Card outlined>
          <Card flat outlined={false} className='py-12'>
            <Card
              flat
              outlined={false}
              className='d-flex flex-wrap align-center justify-center'
            >
              <ToggleButtonGroup
                value='1'
                mandatory
                onChange={this.mandatoryGroupChange.bind(this)}
              >
                {[
                  mdiFormatAlignLeft,
                  mdiFormatAlignCenter,
                  mdiFormatAlignRight,
                  mdiFormatAlignJustify
                ].map((icon, i) => (
                  <ToggleButton
                    disabled={i === 3}
                    value={`${i + 1}`}
                    color='var(--primary)'
                  >
                    <Icon path={icon} size={0.9} />
                  </ToggleButton>
                ))}
              </ToggleButtonGroup>
            </Card>
            <div className='text-center mx-auto pt-6'>
              {`{ active: ${JSON.stringify(this.state.mandatoryActive)} }`}
            </div>
          </Card>
          <CodeBlock lang='html'>{toggleButtons(dark, 'mandatory')}</CodeBlock>
        </Card>
        <br />
        <br />
        <H5 className='mt-6'>Multiple selection</H5>
        <Subtitle1>
          Multiple <code>ToggleButtonGroup</code> allows user to select multiple
          values and returns all value as an array.
        </Subtitle1>
        <br />
        <Card outlined>
          <Card flat outlined={false} className='py-12'>
            <Card
              flat
              outlined={false}
              className='d-flex flex-wrap align-center justify-center'
            >
              <ToggleButtonGroup
                multiple
                onChange={this.multipleGroupChange.bind(this)}
              >
                {[mdiFormatBold, mdiFormatItalic, mdiFormatUnderline].map(
                  (icon, i) => (
                    <ToggleButton value={`${i + 1}`} color='var(--primary)'>
                      <Icon path={icon} size={0.9} />
                    </ToggleButton>
                  )
                )}
              </ToggleButtonGroup>
            </Card>
            <div className='text-center mx-auto pt-6'>
              {`{ active: ${JSON.stringify(this.state.multipleActive)} }`}
            </div>
          </Card>
          <CodeBlock lang='html'>{toggleButtons(dark, 'multiple')}</CodeBlock>
        </Card>
        <br />
        <br />
        <H5 className='mt-6'>Sizes</H5>
        <Subtitle1 style={{ marginBottom: '4px' }}>
          Use <code>size</code> property to change button size.
        </Subtitle1>
        <br />
        <Card outlined>
          <Card flat outlined={false} className='py-12'>
            {['small', 'medium', 'large'].map((s, i) => {
              return (
                <Card
                  flat
                  outlined={false}
                  className='d-flex flex-wrap align-center justify-center'
                >
                  <ToggleButtonGroup
                    key={i}
                    size={s}
                    multiple
                    dark={dark}
                    value={active}
                    className='mt-4'
                    onChange={(e) => this.handleChange(e)}
                  >
                    {[mdiFormatBold, mdiFormatItalic, mdiFormatUnderline].map(
                      (icon, i) => (
                        <ToggleButton value={`${i + 1}`} color='var(--primary)'>
                          <Icon path={icon} size={0.9} />
                        </ToggleButton>
                      )
                    )}
                  </ToggleButtonGroup>
                </Card>
              )
            })}
            <div className='text-center mx-auto pt-6'>
              {`{ active: ${JSON.stringify(this.state.active)} }`}
            </div>
          </Card>
          <CodeBlock lang='html'>{sizeDoc}</CodeBlock>
        </Card>
        <br />
        <br />
        <H5>API</H5>
        <Subtitle1>Coming soon..</Subtitle1>
      </Card>
    )
  }
}

export default ToggleButtonView
