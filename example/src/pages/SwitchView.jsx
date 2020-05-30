import React from 'react'

import { Switch, Card, H4, H5, H6, Subtitle1 } from 'ui-neumorphism'

import { toggle, toggleLabel } from '../assets/'

import DocCard from '../containers/DocCard.jsx'
const url =
  'https://github.com/AKAspanion/ui-neumorphism/blob/master/example/src/pages/SwitchView.jsx'
class SwitchView extends React.Component {
  render() {
    const { dark } = this.props
    return (
      <Card flat dark={dark}>
        <H4>Switch</H4>
        <H6>Switches toggle the state of a single setting on or off.</H6>
        <br />
        <Subtitle1>
          Switches are the preferred way to adjust settings on mobile. The
          option that the switch controls, as well as the state it’s in, should
          be made clear from the corresponding inline label.
        </Subtitle1>
        <DocCard
          url={url}
          content={
            <Card flat>
              <Switch color='var(--primary)' checked />
              <Switch color='#299ae6' />
              <Switch />
              <Switch disabled />
              <Switch disabled checked />
              <Switch checked />
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
            <Card flat>
              <Switch color='var(--primary)' checked />
              <Switch color='#299ae6' />
              <Switch />
              <Switch disabled />
              <Switch disabled checked />
              <Switch checked />
            </Card>
          }
          code={[toggleLabel, dark, ['Switch']]}
        />
        <br />
        <br />
        <H5>API</H5>
        <Subtitle1>Coming soon..</Subtitle1>
      </Card>
    )
  }
}

export default SwitchView
