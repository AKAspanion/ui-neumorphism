export const progressLinear = (dark, prop, hideColor = false) => {
  const darkProp = dark ? ' dark' : '';
  const propType = prop || ['', '', ''];
  return `<ProgressLinear${darkProp} ${propType[0]} ${hideColor ? '':"color='var(--primary)'"} />
<ProgressLinear${darkProp} ${propType[1]} ${hideColor ? '':"color='var(--error)'"} />
<ProgressLinear${darkProp} ${propType[2]} ${hideColor ? '':"color='var(--success)'"} />
`
}

export const progressCircular = (dark, prop, hideColor = false) => {
  const darkProp = dark ? ' dark' : '';
  const propType = prop || ['', '', '', '', ''];
  return `<ProgressCircular${darkProp} ${propType[0]} ${hideColor ? '':"color='var(--primary)'"} />
<ProgressCircular${darkProp} ${propType[1]} ${hideColor ? '':"color='var(--info)'"} />
<ProgressCircular${darkProp} ${propType[2]} ${hideColor ? '':"color='var(--warning)'"} />
<ProgressCircular${darkProp} ${propType[3]} ${hideColor ? '':"color='var(--success)'"} />
<ProgressCircular${darkProp} ${propType[4]} ${hideColor ? '':"color='var(--error)'"} />
`
}

export const progressCircularLabel = (dark) => {
  const darkProp = dark ? ' dark' : ''
  return `<ProgressCircular${darkProp} value={10} color='var(--primary)'>
  // Icon component is from '@mdi/react' and is not bundled with this library
  <Icon path={mdiNumeric10} size={0.9} />
</ProgressCircular>
<ProgressCircular${darkProp} value={20} color='var(--info)' label="40" />
<ProgressCircular${darkProp} value={40} color='var(--warning)'>60</ProgressCircular>
<ProgressCircular${darkProp} value={80} color='var(--success)' label="80" />
<ProgressCircular${darkProp} value={100} color='var(--error)'>100</ProgressCircular>`
}
