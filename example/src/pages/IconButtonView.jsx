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

class ToggleButtonView extends React.Component {
  render() {
    const { dark } = this.props
    return (
      <Card flat dark={dark}>
        <H4>Icon Button</H4>
        <H6>Icon buttons are commonly found in app bars and toolbars.</H6>
        <br />
        <Subtitle1 style={{ marginBottom: '4px' }}>
          Icons are appropriate for buttons that allow a single choice to be
          selected or deselected, such as adding or removing a star to an item.
        </Subtitle1>
        <br />
        <Card outlined dark={dark}>
          <div
            style={{
              padding: '64px 32px',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <IconButton dark={dark} style={{ margin: '16px 32px' }}>
              <Icon path={mdiRun} size={1} />
            </IconButton>
            <IconButton
              dark={dark}
              color='#b1b100'
              style={{ margin: '16px 32px' }}
            >
              <Icon path={mdiStar} size={1} />
            </IconButton>
            <IconButton disabled dark={dark} style={{ margin: '16px 32px' }}>
              <Icon path={mdiTrashCanOutline} size={1} />
            </IconButton>
            <IconButton
              dark={dark}
              color='var(--primary)'
              style={{ margin: '16px 32px' }}
            >
              <Icon path={mdiSpeaker} size={1} />
            </IconButton>
            <IconButton
              dark={dark}
              color='#42aaee'
              style={{ margin: '16px 32px' }}
            >
              <Icon path={mdiBroom} size={1} />
            </IconButton>
          </div>
        </Card>
        <br />
        <br />
        <br />
        <H5>API</H5>
        <Subtitle1>Coming soon..</Subtitle1>
      </Card>
    )
  }
}

export default ToggleButtonView
