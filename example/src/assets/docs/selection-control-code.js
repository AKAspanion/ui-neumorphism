export const toggle = (dark, type = 'Checkbox') => {
  const darkProp = dark ? ' dark' : ''
  return `<${type}${darkProp} color='var(--primary)' checked />
<${type}${darkProp} color='#299ae6' />
<${type}${darkProp} />
<${type}${darkProp} disabled />
<${type}${darkProp} disabled checked />
<${type}${darkProp} checked />`
}

export const toggleLabel = (dark, type) => {
  const darkProp = dark ? ' dark' : ''
  return `<${type}${darkProp} color='var(--primary)' label='Primary' checked />
<${type}${darkProp} label='Blue' color='#299ae6' />
<${type}${darkProp} label='Default' />
<${type}${darkProp} disabled label='Disabled' />
<${type}${darkProp} disabled checked label='Checked & Disabled' />
<${type}${darkProp} checked label='Checked' />`
}
