export const toggle = (dark, type = 'Checkbox') => {
  const darkProp = dark ? ' dark' : ''
  return `<${type}${darkProp} color='var(--primary)' checked />
<${type}${darkProp} color='#299ae6' />
<${type}${darkProp} />
<${type}${darkProp} disabled />
<${type}${darkProp} disabled checked />
<${type}${darkProp} checked />`
}

export const toggleLabel = () => {
  return `className='d-flex align-center justify-center flex-wrap'`
}

export const radio = (dark, prop) => {
  const darkProp = dark ? ' dark' : ''
  const props = prop ? ` ${prop}` : ''
  return `<RadioGroup${darkProp}${props} value='1' color='var(--primary)' onChange={this.onChange}>
  <Radio value='1' label='Female' />
  <Radio value='2' label='Male' />
  <Radio value='3' label='Other' disabled />
</RadioGroup>`
}

export const radioStandalone = (dark) => {
  const darkProp = dark ? ' dark' : ''
  return `<Radio${darkProp}
  value='1'
  color='#299ae6'
  label='Selection 1'
  onChange={this.onSelect}
  checked={selectedValue === '1'}
/>
<Radio${darkProp}
  value='2'
  color='red'
  label='Selection 2'
  onChange={this.onSelect}
  checked={selectedValue === '2'}
/>
<Radio${darkProp}
  value='3'
  color='green'
  label='Selection 3'
  onChange={this.onSelect}
  checked={selectedValue === '3'}
/>
<Radio${darkProp}
  value='4'
  label='Selection 4'
  onChange={this.onSelect}
  checked={selectedValue === '4'}
/>
<Radio${darkProp}
  value='5'
  disabled
  color='#299ae6'
  label='Selection 5'
  onChange={this.onSelect}
  checked={selectedValue === '5'}
/>`
}
