export const progressLinear = (dark, prop, hideColor = false) => {
  const darkProp = dark ? ' dark' : '';
  const propType = prop || ['', '', ''];
  return `<ProgressLinear${darkProp} ${propType[0]} ${hideColor ? '':"color='var(--primary)'"} />
<ProgressLinear${darkProp} ${propType[1]} ${hideColor ? '':"color='var(--info)'"} />
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
