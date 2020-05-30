import React from 'react'

import { Card, H4, H5, H6, Subtitle1, Checkbox } from 'ui-neumorphism'
import { checkBox, checkBoxLabel } from '../assets/'
import DocCard from '../containers/DocCard.jsx'
const url =
  'https://github.com/AKAspanion/ui-neumorphism/blob/master/example/src/pages/CheckboxView.jsx'
class CheckboxView extends React.Component {
  render() {
    const { dark } = this.props
    return (
      <Card flat dark={dark}>
        <H4>Checkbox</H4>
        <H6>
          Checkboxes allow the user to select one or more items from a set.
        </H6>
        <DocCard
          url={url}
          className='mt-12'
          content={
            <Card flat className='mt-4'>
              <Checkbox color='var(--primary)' checked />
              <Checkbox color='#299ae6' />
              <Checkbox />
              <Checkbox disabled />
              <Checkbox disabled checked />
              <Checkbox checked />
            </Card>
          }
          code={[checkBox, dark]}
        />
        <DocCard
          url={url}
          className='mt-12'
          title={<H5>Checkbox with label</H5>}
          subtitle={
            <Subtitle1>Checkbox can be provided with a label.</Subtitle1>
          }
          content={
            <Card flat className='mt-4'>
              <Checkbox color='var(--primary)' label='Primary' checked />
              <Checkbox label='Blue' color='#299ae6' />
              <Checkbox label='Default' />
              <Checkbox disabled label='Disabled' />
              <Checkbox disabled checked label='Checked & Disabled' />
              <Checkbox checked label='Checked' />
            </Card>
          }
          code={[checkBoxLabel, dark]}
        />
        <br />
        <br />
        <H5>API</H5>
        <Subtitle1>Coming soon..</Subtitle1>
      </Card>
    )
  }
}

export default CheckboxView
