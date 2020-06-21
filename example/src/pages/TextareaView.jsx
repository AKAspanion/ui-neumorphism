import React from 'react'

import { Card, H4, H6, Textarea } from 'ui-neumorphism'

// import { toggle, toggleLabel, switchApi } from '../docs/'

import DocCard from '../containers/DocCard.jsx'
// import ApiCard from '../containers/ApiCard.jsx'

const url =
  'https://github.com/AKAspanion/ui-neumorphism/blob/master/example/src/pages/TextareaView.jsx'
class TextareaView extends React.Component {
  render() {
    const { dark } = this.props
    return (
      <Card flat dark={dark}>
        <H4>
          <a href='#component' name='component'>
            Textarea
          </a>
        </H4>
        <H6>
          The Textarea component is used for collecting large amounts of textual
          data.
        </H6>
        <DocCard
          url={url}
          content={
            <Card flat className='d-flex align-center justify-center flex-wrap'>
              <Textarea label='Text area' />
              <Textarea dense label='Text area' />
              <Textarea height={94} label='Text area' />
              <Textarea dense autoExpand label='Text area' />
              <Textarea height={94} autoExpand label='Text area' />
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

export default TextareaView
