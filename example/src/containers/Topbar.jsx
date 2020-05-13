import React from 'react'

import { H1, Button } from 'ui-neumorphism'

export default function Topbar(props) {
  const { dark, onClick } = props
  return (
    <div
      style={{
        display: 'flex',
        cursor: 'pointer',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}
    >
      <H1 dark={dark}>UI-Neumorphism</H1>
      <Button text dark={dark} onClick={onClick}>
        {dark ? 'LIGHT' : 'DARK'}
      </Button>
    </div>
  )
}
