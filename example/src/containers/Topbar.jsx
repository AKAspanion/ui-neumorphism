import React from 'react'

import { H2, Button } from 'ui-neumorphism'

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
      <Button text dark={dark} onClick={onClick}>
        {dark ? 'LIGHT' : 'DARK'}
      </Button>
    </div>
  )
}
