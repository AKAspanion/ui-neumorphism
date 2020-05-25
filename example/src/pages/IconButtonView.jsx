import React from 'react'

import Icon from '@mdi/react'
import {
  mdiRun,
  mdiStar,
  mdiBroom,
  mdiSpeaker,
  mdiTrashCanOutline
} from '@mdi/js'

import { Card, H4, H5, H6, Subtitle1, IconButton } from 'ui-neumorphism'

import DocCard from '../containers/DocCard.jsx'
import { iconButtons } from '../assets/'

const url =
  'https://github.com/AKAspanion/ui-neumorphism/blob/master/example/src/pages/IconButtonView.jsx'

class IconButtonView extends React.Component {
  render() {
    const { dark } = this.props
    return (
      <Card flat dark={dark}>
        <H4>Icon Button</H4>
        <H6>Icon buttons are commonly found in app bars and toolbars.</H6>
        <br />
        <Subtitle1 className='mb-1'>
          Icons are appropriate for buttons that allow a single choice to be
          selected or deselected, such as adding or removing a star to an item.
        </Subtitle1>
        <DocCard
          url={url}
          content={
            <Card flat outlined={false}>
              <IconButton className='ma-12'>
                <Icon path={mdiRun} size={1} />
              </IconButton>
              <IconButton color='#b1b100' className='ma-12'>
                <Icon path={mdiStar} size={1} />
              </IconButton>
              <IconButton disabled className='ma-12'>
                <Icon path={mdiTrashCanOutline} size={1} />
              </IconButton>
              <IconButton color='var(--primary)' className='ma-12'>
                <Icon path={mdiSpeaker} size={1} />
              </IconButton>
              <IconButton color='#299ae6' className='ma-12'>
                <Icon path={mdiBroom} size={1} />
              </IconButton>
            </Card>
          }
          code={[iconButtons, dark]}
        />
        <br />
        <br />
        <H5>API</H5>
        <Subtitle1>Coming soon..</Subtitle1>
      </Card>
    )
  }
}

export default IconButtonView
