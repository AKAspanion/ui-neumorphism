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

export const fabButtons = (dark, type) => {
  const darkProp = dark ? ' dark' : '';
  switch (type) {
    case 'main':
      return `<Fab${darkProp}>
  <span style={{ fontSize: '30px', margin: '2px 0px 0px 2px' }}>&#43;</span>
</Fab>
<Fab${darkProp} color='var(--primary)'>
  <span style={{ fontSize: '24px' }}>&#9733;</span>
</Fab>
<Fab${darkProp} color='#299ae6'>
  &nbsp;<span style={{ fontSize: '24px' }}>&#9729;</span>&nbsp;Extended&nbsp;
</Fab>
<Fab${darkProp} disabled>
  <span style={{ fontSize: '24px' }}>&#9762;</span>
</Fab>`
    case 'size':
      return `<Fab${darkProp} size='small'>S</Fab>
<Fab${darkProp} size='medium'>M</Fab>
<Fab${darkProp} size='large'>L</Fab>`
    default:
      return ''
  }
}

export const iconButtons = (dark) => {
  const darkProp = dark ? ' dark' : '';
  return `// Icon component is from '@mdi/react' and is not bundled with this library
<IconButton${darkProp}>
  <Icon path={mdiRun} size={1} />
</IconButton>
<IconButton${darkProp} color='#b1b100'>
  <Icon path={mdiStar} size={1} />
</IconButton>
<IconButton${darkProp} disabled>
  <Icon path={mdiTrashCanOutline} size={1} />
</IconButton>
<IconButton${darkProp} color='var(--primary)'>
  <Icon path={mdiSpeaker} size={1} />
</IconButton>
<IconButton${darkProp} color='#299ae6' >
  <Icon path={mdiBroom} size={1} />
</IconButton>`
}

export const toggleButtons = (dark, type, prop) => {
  const darkProp = dark ? ' dark' : '';
  const propType = prop ? ' ' + prop : '';
  return `// Icon component is from '@mdi/react' and is not bundled with this library
<ToggleButtonGroup${darkProp}${propType} ${type} onChange={this.${type}GroupChange.bind(this)}>
  <ToggleButton value='1' color='var(--primary)'>
    <Icon path={${type === 'mandatory'?'mdiFormatAlignLeft' :'mdiFormatBold'}} size={0.9} />
  </ToggleButton>
  <ToggleButton value='2' color='var(--primary)'>
    <Icon path={${type === 'mandatory'?'mdiFormatAlignCenter' :'mdiFormatItalic'}} size={0.9} />
  </ToggleButton>
  <ToggleButton value='3' color='var(--primary)'>
    <Icon path={${type === 'mandatory'?'mdiFormatAlignRight' :'mdiFormatUnderline'}} size={0.9} />
  </ToggleButton>${type === 'mandatory' ? `
  <ToggleButton disabled value='4' color='var(--primary)'>
    <Icon path={mdiFormatAlignJustify} size={0.9} />
  </ToggleButton>`:''}
</ToggleButtonGroup>`
}
