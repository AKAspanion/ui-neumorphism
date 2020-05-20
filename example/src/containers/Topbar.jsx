import React, { createElement } from 'react'
import Icon from '@mdi/react'
import { mdiMenu, mdiGithub, mdiLightbulbOutline, mdiLightbulb } from '@mdi/js'

import { H2, H6, Card, IconButton, ToggleButton } from 'ui-neumorphism'

const githubUrl = 'https://github.com/AKAspanion/ui-neumorphism'

class Topbar extends React.Component {
  render() {
    const { dark, onClick, onMenuClick, size } = this.props
    const isSmall = size === 'sm' || size === 'xs'
    const menuButton = isSmall ? (
      <IconButton onClick={onMenuClick}>
        <Icon path={mdiMenu} size={1} />
      </IconButton>
    ) : null

    const title = createElement(
      isSmall ? H6 : H2,
      { style: { color: 'var(--primary)' }, className: 'topbar-title' },
      'UI-Neumorphism'
    )

    return (
      <Card flat dark={dark} className={`main-topbar`}>
        <Card flat className='d-flex align-center topbar-headline'>
          {menuButton}
          {title}
        </Card>
        <Card flat className='d-flex align-center topbar-actions'>
          <IconButton
            className='topbar-action'
            onClick={() => window.open(githubUrl, '_blank')}
          >
            <Icon path={mdiGithub} size={1} />
          </IconButton>
          <ToggleButton className='topbar-action' onChange={onClick}>
            <Icon path={dark ? mdiLightbulbOutline : mdiLightbulb} size={1} />
          </ToggleButton>
        </Card>
      </Card>
    )
  }
}

export default Topbar
