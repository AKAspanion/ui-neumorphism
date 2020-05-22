export const allButtons = (dark) => {
  const darkProp = dark ? ' dark' : '';
  return `<Button${darkProp}>default</Button>
<Button${darkProp} color='var(--primary)'>colored</Button>
<Button${darkProp} color='#ccc' bgColor='var(--primary)'>colored</Button>
<Button${darkProp} disabled>disabled</Button>
<Button${darkProp} rounded>rounded</Button>
<Button${darkProp} depressed>depressed</Button>
<Button${darkProp} outlined>outlined</Button>
<Button${darkProp} text>text</Button>`
}

export const docButtons = (dark, type) => {
  const darkProp = dark ? ' dark' : '';
  const typeProp = type ? ' ' + type : '';
  return `<Button${darkProp}${typeProp}>default</Button>
<Button${darkProp}${typeProp} color='var(--primary)'>colored</Button>
<Button${darkProp}${typeProp} disabled>disabled</Button>`
}

export const blockButton = (dark) => {
  const darkProp = dark ? ' dark' : '';
  return `<Button${darkProp} block>block button</Button>`
}

export const sizeButtons = (dark, type) => {
  const darkProp = dark ? ' dark' : '';
  return `<Button${darkProp} size='small'>small</Button>
<Button${darkProp} size='medium'>medium</Button>
<Button${darkProp} size='large'>large</Button>`
}
