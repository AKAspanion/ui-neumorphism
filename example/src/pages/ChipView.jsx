import React from 'react'

import { Card, H4, H6, Subtitle1 } from 'ui-neumorphism'

// import { toggle, toggleLabel, switchApi } from '../docs/'

import DocCard from '../containers/DocCard.jsx'
// import ApiCard from '../containers/ApiCard.jsx'

const url =
  'https://github.com/AKAspanion/ui-neumorphism/blob/master/example/src/pages/ChipView.jsx'
class ChipView extends React.Component {
  render() {
    const { dark } = this.props
    return (
      <Card flat dark={dark}>
        <H4>
          <a href='#component' name='component'>
            Chip
          </a>
        </H4>
        <H6>
          Chips are compact elements that represent an input, attribute, or
          action.
        </H6>
        <Subtitle1 className='mt-3'>
          Chips allow users to enter information, make selections, filter
          content, or trigger actions. While buttons are expected to appear
          consistently and with familiar calls to action, chips should appear
          dynamically as a group of multiple interactive elements.
        </Subtitle1>
        <DocCard
          url={url}
          content={
            <Card flat className='d-flex align-center justify-center flex-wrap'>
              Coming soon..
            </Card>
          }
        />
        <H4 className='mt-12'>
          <a href='#api' name='api'>
            API
          </a>
        </H4>
        Coming soon..
      </Card>
    )
  }
}

export default ChipView
