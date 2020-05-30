export const checkBox = (dark) => {
  const darkProp = dark ? ' dark' : ''
  return `<Checkbox${darkProp} color='var(--primary)' checked />
<Checkbox${darkProp} color='#299ae6' />
<Checkbox${darkProp} />
<Checkbox${darkProp} disabled />
<Checkbox${darkProp} disabled checked />
<Checkbox${darkProp} checked />`
}

export const checkBoxLabel = (dark) => {
  const darkProp = dark ? ' dark' : ''
  return `<Checkbox${darkProp} color='var(--primary)' label='Primary' checked />
<Checkbox${darkProp} label='Blue' color='#299ae6' />
<Checkbox${darkProp} label='Default' />
<Checkbox${darkProp} disabled label='Disabled' />
<Checkbox${darkProp} disabled checked label='Checked & Disabled' />
<Checkbox${darkProp} checked label='Checked' />`
}
