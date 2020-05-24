export const progressLinear = (dark, prop, hideColor = false) => {
  const darkProp = dark ? ' dark' : '';
  const propType = prop || ['', '', ''];
  return `<ProgressLinear${darkProp} ${propType[0]} ${hideColor ? '':"color='var(--primary)'"} />
<ProgressLinear${darkProp} ${propType[1]} ${hideColor ? '':"color='var(--info)'"} />
<ProgressLinear${darkProp} ${propType[2]} ${hideColor ? '':"color='var(--success)'"} />
`
}
