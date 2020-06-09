import React from 'react'

import { Switch, Card, H4, H5, H6, Subtitle1 } from 'ui-neumorphism'

import { toggle, toggleLabel, switchApi } from '../docs/'

import DocCard from '../containers/DocCard.jsx'
import ApiCard from '../containers/ApiCard.jsx'

const url =
  'https://github.com/AKAspanion/ui-neumorphism/blob/master/example/src/pages/SwitchView.jsx'
class SwitchView extends React.Component {
  render() {
    const { dark } = this.props
    return (
      <Card flat dark={dark}>
        <H4>
          <a href='#component' name='component'>
            Switch
          </a>
        </H4>
        <H6>Switches toggle the state of a single setting on or off.</H6>
        <Subtitle1 className='mt-3'>
          Switches are the preferred way to adjust settings on mobile. The
          option that the switch controls, as well as the state it’s in, should
          be made clear from the corresponding inline label.
        </Subtitle1>
        <DocCard
          url={url}
          content={
            <Card flat className='d-flex align-center justify-center flex-wrap'>
              <Switch color='var(--error)' checked />
              <Switch color='var(--primary)' />
              <Switch />
              <Switch disabled />
              <Switch disabled checked />
              <Switch checked color='var(--success)' />
            </Card>
          }
          code={[toggle, dark, ['Switch']]}
        />
        <DocCard
          url={url}
          className='mt-12'
          title={<H5>Switch with label</H5>}
          subtitle={<Subtitle1>Switch can be provided with a label.</Subtitle1>}
          content={
            <Card flat className='d-flex align-center justify-center flex-wrap'>
              <Switch color='var(--error)' label='Switch' checked />
              <Switch label='Primary' color='var(--primary)' />
              <Switch label='Default' />
              <Switch disabled label='Disabled' />
              <Switch disabled checked label='Checked & Disabled' />
              <Switch checked label='Checked' color='var(--success)' />
            </Card>
          }
          code={[toggleLabel, dark, ['Switch']]}
        />
        <H4 className='mt-12'>
          <a href='#api' name='api'>
            API
          </a>
        </H4>
        <ApiCard entity='Switch' data={switchApi(dark)} />
      </Card>
    )
  }
}

export default SwitchView
