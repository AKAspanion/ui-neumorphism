import React from 'react'

import { Card, H4, H5, H6, Subtitle1, Divider, Checkbox } from 'ui-neumorphism'
import { toggle, toggleLabel, checkboxApi } from '../docs/'

import DocCard from '../containers/DocCard.jsx'
import ApiCard from '../containers/ApiCard.jsx'

const url =
  'https://github.com/AKAspanion/ui-neumorphism/blob/master/example/src/pages/CheckboxView.jsx'
class CheckboxView extends React.Component {
  handleConsole = (e) => {
    console.log(e)
  }

  render() {
    const { dark } = this.props
    return (
      <Card flat dark={dark}>
        <H4>
          <a href='#component' name='component'>
            Checkbox
          </a>
        </H4>
        <H6>
          Checkboxes allow the user to select one or more items from a set.
        </H6>
        <DocCard
          url={url}
          content={
            <Card
              flat
              className='mt-6 d-flex align-center justify-center flex-wrap'
            >
              <Checkbox color='var(--error)' checked />
              <Checkbox color='var(--primary)' />
              <Checkbox />
              <Checkbox disabled />
              <Checkbox disabled checked />
              <Checkbox checked color='var(--success)' />
            </Card>
          }
          code={[toggle, dark]}
        />
        <DocCard
          url={url}
          className='mt-12'
          title={<H5>Checkbox with label</H5>}
          subtitle={
            <Subtitle1>Checkbox can be provided with a label.</Subtitle1>
          }
          content={
            <Card
              flat
              className='mt-6 d-flex align-center justify-center flex-wrap'
            >
              <Checkbox color='var(--error)' label='Checkbox' checked />
              <Checkbox label='Primary' color='var(--primary)' />
              <Checkbox label='Default' />
              <Checkbox disabled label='Disabled' />
              <Checkbox disabled checked label='Checked & Disabled' />
              <Checkbox checked color='var(--success)' label='Checked' />
            </Card>
          }
          code={[toggleLabel, dark]}
        />
        <Divider dense className='mt-6' />
        <H4 className='mt-12'>
          <a href='#api' name='api'>
            API
          </a>
        </H4>
        <ApiCard entity='Checkbox' data={checkboxApi(dark)} />
      </Card>
    )
  }
}

export default CheckboxView
