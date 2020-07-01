import React from 'react'

import Icon from '@mdi/react'
import {
  mdiCake,
  mdiStar,
  mdiAccount,
  mdiOpenInNew,
  mdiCloseOutline,
  mdiAccountCircle
} from '@mdi/js'

import { Card, H4, H6, Subtitle1, Divider, Chip } from 'ui-neumorphism'

import { chipApi } from '../docs/'

import DocCard from '../containers/DocCard.jsx'
import ApiCard from '../containers/ApiCard.jsx'

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
              <Chip active className='ma-3'>
                active
              </Chip>
              <Chip size='small' className='ma-3'>
                small
              </Chip>
              <Chip className='ma-3'>medium</Chip>
              <Chip size='large' className='ma-3'>
                large
              </Chip>
              <Chip label className='ma-3'>
                label
              </Chip>
              <Chip key='1' type='info' className='ma-3'>
                info
              </Chip>
              <Chip key='2' type='error' className='ma-3'>
                error
              </Chip>
              <Chip key='3' type='success' className='ma-3'>
                success
              </Chip>
              <Chip key='4' type='warning' className='ma-3'>
                warning
              </Chip>
              <Chip
                key='5'
                className='ma-3'
                append={<Icon key='1' path={mdiAccount} size={0.68} />}
              >
                Append
              </Chip>
              <Chip
                key='6'
                className='ma-3'
                prepend={<Icon key='2' path={mdiAccount} size={0.68} />}
              >
                Prepend
              </Chip>
              <Chip
                type='info'
                className='ma-3'
                append={<Icon key='1' path={mdiCake} size={0.6} />}
                prepend={<Icon key='2' path={mdiAccountCircle} size={0.68} />}
              >
                Happy Birthday
              </Chip>
              <Chip key='34' type='error' className='ma-3' closable>
                Closable
              </Chip>
              <Chip
                type='warning'
                className='ma-3'
                append={<Icon key='7' path={mdiStar} size={0.68} />}
                action={<Icon key='8' path={mdiCloseOutline} size={0.68} />}
              >
                Append & Action
              </Chip>
              <Chip
                outlined
                type='success'
                className='ma-3'
                append={<Icon key='9' path={mdiStar} size={0.68} />}
                action={<Icon key='10' path={mdiCloseOutline} size={0.68} />}
              >
                Outlined
              </Chip>
              <Chip
                bordered
                type='error'
                className='ma-3'
                append={<Icon key='11' path={mdiStar} size={0.68} />}
                action={<Icon key='22' path={mdiCloseOutline} size={0.68} />}
              >
                Bordered
              </Chip>
              <Chip
                flat
                type='warning'
                className='ma-3'
                append={<Icon key='13' path={mdiStar} size={0.68} />}
                action={<Icon key='14' path={mdiCloseOutline} size={0.68} />}
              >
                Flat
              </Chip>
              <Chip
                type='error'
                flat
                bordered
                className='ma-3'
                onAction={() => console.log('close clicked')}
                append={<Icon key='17' path={mdiStar} size={0.68} />}
                action={<Icon key='16' path={mdiCloseOutline} size={0.68} />}
              >
                Flat & Bordered
              </Chip>
              <Chip
                label
                outlined
                type='info'
                className='ma-3'
                link='https://github.com/AKAspanion'
                action={<Icon path={mdiOpenInNew} size={0.68} />}
              >
                Link & Label
              </Chip>
            </Card>
          }
        />
        <Divider dense className='mt-6' />
        <H4 className='mt-12'>
          <a href='#api' name='api'>
            API
          </a>
        </H4>
        <ApiCard entity='Chip' data={chipApi(dark)} />
      </Card>
    )
  }
}

export default ChipView
