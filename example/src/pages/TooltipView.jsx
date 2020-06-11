import React from 'react'

import { Card, H4, H6, Subtitle1 } from 'ui-neumorphism'

// import { toggle, toggleLabel, switchApi } from '../docs/'

import DocCard from '../containers/DocCard.jsx'
// import ApiCard from '../containers/ApiCard.jsx'

const url =
  'https://github.com/AKAspanion/ui-neumorphism/blob/master/example/src/pages/TooltipView.jsx'
class TooltipView extends React.Component {
  render() {
    const { dark } = this.props
    return (
      <Card flat dark={dark}>
        <H4>
          <a href='#component' name='component'>
            Tooltip
          </a>
        </H4>
        <H6>
          Tooltips display informative text when users hover over an element.
        </H6>
        <Subtitle1 className='mt-3'>
          When activated, Tooltips display a text label identifying an element,
          such as a description of its function.
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

export default TooltipView
