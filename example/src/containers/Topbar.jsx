import React from 'react'
import Icon from '@mdi/react'
import { mdiGithub, mdiLightbulbOutline, mdiLightbulb } from '@mdi/js'

import { H2, Card, ButtonToggle } from 'ui-neumorphism'

const githubUrl = 'https://github.com/AKAspanion/ui-neumorphism'

export default function Topbar(props) {
  const { dark, onClick } = props
  return (
    <div
      style={{
        display: 'flex',
        paddingTop: '16px',
        cursor: 'pointer',
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
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <ButtonToggle onClick={() => window.open(githubUrl, '_blank')}>
          <Icon path={mdiGithub} size={1} />
        </ButtonToggle>
        <ButtonToggle onClick={onClick}>
          <Icon path={dark ? mdiLightbulbOutline : mdiLightbulb} size={1} />
        </ButtonToggle>
      </Card>
    </div>
  )
}
