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
  Divider,
  Subtitle1,
  ToggleButton,
  ToggleButtonGroup
} from 'ui-neumorphism'

import DocCard from '../containers/DocCard.jsx'
import ApiCard from '../containers/ApiCard.jsx'
import {
  toggleSizes,
  toggleButtons,
  toggleButtonApi,
  toggleStandalone,
  toggleButtonGroupApi
} from '../docs/'

const url =
  'https://github.com/AKAspanion/ui-neumorphism/blob/master/example/src/pages/ToggleButtonView.jsx'

class ToggleButtonView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      standaloneActive: 1,
      mandatoryActive: '1',
      multipleActive: [],
      active: ['1'],
      key: 1
    }
  }

  handleStandaloneChange(e) {
    this.setState({ standaloneActive: e.value })
    this.setState({ key: this.state.key + 1 })
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
    const { key, active, standaloneActive } = this.state
    return (
      <Card flat dark={dark}>
        <H4>
          <a href='#component' name='component'>
            <H4>Toggle Buttons</H4>
          </a>
        </H4>
        <H6>Toggle buttons can be used to group related options.</H6>
        <Subtitle1 className='mt-3'>
          To emphasize groups of related Toggle buttons, a group should share a
          common container.
          <br />
          The <code>ToggleButtonGroup</code> controls the selected state of its
          child buttons when given its own value prop.
        </Subtitle1>
        <DocCard
          className='mt-12'
          url={url + '#L101-L118'}
          title={<H5>Mandatory selection</H5>}
          subtitle={
            <Subtitle1>
              Mandatory <code>ToggleButtonGroup</code> always has a value.
            </Subtitle1>
          }
          content={
            <Card flat outlined={false}>
              <Card
                flat
                className='mt-4 d-flex flex-wrap align-center justify-center'
              >
                <ToggleButtonGroup
                  value='1'
                  mandatory
                  text={false}
                  color='var(--primary)'
                  onChange={this.mandatoryGroupChange.bind(this)}
                >
                  {[
                    mdiFormatAlignLeft,
                    mdiFormatAlignCenter,
                    mdiFormatAlignRight,
                    mdiFormatAlignJustify
                  ].map((icon, i) => (
                    <ToggleButton key={i} disabled={i === 3} value={`${i + 1}`}>
                      <Icon path={icon} size={0.9} />
                    </ToggleButton>
                  ))}
                </ToggleButtonGroup>
              </Card>
              <div className='text-center mx-auto pt-6'>
                {`{ active: ${JSON.stringify(this.state.mandatoryActive)} }`}
              </div>
            </Card>
          }
          code={[toggleButtons, dark, ['mandatory']]}
        />
        <DocCard
          className='mt-12'
          url={url + '#L144-L159'}
          title={<H5>Multiple selection</H5>}
          subtitle={
            <Subtitle1>
              Multiple <code>ToggleButtonGroup</code> allows user to select
              multiple values and returns all value as an array.
            </Subtitle1>
          }
          content={
            <Card flat outlined={false}>
              <Card
                flat
                outlined={false}
                className='mt-4 d-flex flex-wrap align-center justify-center'
              >
                <ToggleButtonGroup
                  multiple
                  onChange={this.multipleGroupChange.bind(this)}
                >
                  {[mdiFormatBold, mdiFormatItalic, mdiFormatUnderline].map(
                    (icon, i) => (
                      <ToggleButton
                        key={i}
                        value={`${i + 1}`}
                        color='var(--primary)'
                      >
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
          }
          code={[toggleButtons, dark, ['multiple']]}
        />
        <DocCard
          className='mt-12'
          url={url + '#L186-L198'}
          title={<H5>Standalone ToggleButtons</H5>}
          subtitle={
            <Subtitle1>
              ToggleButtons can be used without the&nbsp;
              <code>ToggleButtonGroup</code> wrapper. You need to implement your
              own selection logic.
            </Subtitle1>
          }
          content={
            <Card key={key} flat outlined={false}>
              <Card
                flat
                outlined={false}
                className='mt-4 d-flex flex-wrap align-center justify-center'
              >
                {[mdiFormatBold, mdiFormatItalic, mdiFormatUnderline].map(
                  (icon, i) => (
                    <ToggleButton
                      key={i}
                      value={i + 1}
                      color='var(--primary)'
                      selected={standaloneActive === i + 1}
                      onChange={(e) => this.handleStandaloneChange(e)}
                    >
                      <Icon path={icon} size={0.9} />
                    </ToggleButton>
                  )
                )}
              </Card>
              <div className='text-center mx-auto pt-6'>
                {`{ active: ${JSON.stringify(standaloneActive)} }`}
              </div>
            </Card>
          }
          code={[toggleStandalone, dark]}
        />
        <DocCard
          className='mt-12'
          url={url + '#L218-L246'}
          title={<H5>Sizes</H5>}
          subtitle={
            <Subtitle1>
              Use <code>size</code> property to change button size.
            </Subtitle1>
          }
          content={
            <Card key={key} flat outlined={false}>
              {['small', 'medium', 'large'].map((s, i) => (
                <Card
                  flat
                  key={i}
                  outlined={false}
                  className='mt-4 d-flex flex-wrap align-center justify-center'
                >
                  <ToggleButtonGroup
                    key={i}
                    size={s}
                    multiple
                    value={active}
                    className='mt-4'
                    onChange={(e) => this.handleChange(e)}
                  >
                    {[mdiFormatBold, mdiFormatItalic, mdiFormatUnderline].map(
                      (icon, i) => (
                        <ToggleButton
                          key={i}
                          value={`${i + 1}`}
                          color='var(--primary)'
                        >
                          <Icon path={icon} size={0.9} />
                        </ToggleButton>
                      )
                    )}
                  </ToggleButtonGroup>
                </Card>
              ))}
              <div className='text-center mx-auto pt-6'>
                {`{ active: ${JSON.stringify(this.state.active)} }`}
              </div>
            </Card>
          }
          code={[toggleSizes, dark]}
        />
        <Divider dense className='mt-6' />
        <H4 className='mt-12'>
          <a href='#api' name='api'>
            API
          </a>
        </H4>
        <ApiCard entity='ToggleButtonGroup' data={toggleButtonGroupApi(dark)} />
        <div className='mt-12'></div>
        <ApiCard entity='ToggleButton' data={toggleButtonApi(dark)} />
      </Card>
    )
  }
}

export default ToggleButtonView
