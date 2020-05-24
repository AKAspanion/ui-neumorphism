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
import CodeBlock from '../containers/CodeBlock.jsx'
import { iconButtons } from '../assets/'
class ToggleButtonView extends React.Component {
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
        <br />
        <Card outlined className='d-flex justify-center'>
          <Card flat outlined={false} className='py-12'>
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
        </Card>
        <CodeBlock lang='html'>{iconButtons()}</CodeBlock>
        <br />
        <br />
        <H5>API</H5>
        <Subtitle1>Coming soon..</Subtitle1>
      </Card>
    )
  }
}

export default ToggleButtonView
