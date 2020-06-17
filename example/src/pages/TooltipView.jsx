import React from 'react'

import { Card, H4, H6, Subtitle1, Tooltip, Button } from 'ui-neumorphism'

import { tooltipApi } from '../docs/'

import DocCard from '../containers/DocCard.jsx'
import ApiCard from '../containers/ApiCard.jsx'

const url =
  'https://github.com/AKAspanion/ui-neumorphism/blob/master/example/src/pages/TooltipView.jsx'
class TooltipView extends React.Component {
  state = {
    v: false
  }
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
              <Tooltip
                top
                inset
                className='ma-3'
                content={<div>abcsdssdsdabsc</div>}
              >
                <Button>abcde</Button>
              </Tooltip>
              <Tooltip left className='ma-3' content={<div>abcsdssdsdabsc</div>}>
                <Button>abcdef</Button>
              </Tooltip>
              <Tooltip right className='ma-3' content={<div>abcsdssdsdabsc</div>}>
                <Button disabled>abcdef</Button>
              </Tooltip>
              <Tooltip
                className='ma-3'
                content={<div>abcs ds sds da bsc</div>}
                maxWidth={50}
                visible={this.state.v}
                onOpen={(e) => this.setState({ v: true })}
                onClose={(e) => this.setState({ v: false })}
              >
                help
              </Tooltip>
            </Card>
          }
        />
        <H4 className='mt-12'>
          <a href='#api' name='api'>
            API
          </a>
        </H4>
        <ApiCard entity='Tooltip' data={tooltipApi(dark)} />
      </Card>
    )
  }
}

export default TooltipView
