import React from 'react'
import Icon from '@mdi/react'
import { mdiGithub, mdiLightbulbOutline, mdiLightbulb } from '@mdi/js'

import { H2, Card, ToggleButton } from 'ui-neumorphism'

const githubUrl = 'https://github.com/AKAspanion/ui-neumorphism'

export default function Topbar(props) {
  const { dark, onClick } = props
  return (
    <div
      style={{
        display: 'flex',
        paddingTop: '16px',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}
    >
      <H2 style={{ color: 'var(--primary)' }} dark={dark}>
        UI-Neumorphism
      </H2>
      <Card
        flat
        dark={dark}
        style={{
          width: '92px',
          display: 'flex',
          paddingRight: '4px',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <ToggleButton onClick={() => window.open(githubUrl, '_blank')}>
          <Icon path={mdiGithub} size={1} />
        </ToggleButton>
        <ToggleButton onClick={onClick}>
          <Icon path={dark ? mdiLightbulbOutline : mdiLightbulb} size={1} />
        </ToggleButton>
      </Card>
    </div>
  )
}
