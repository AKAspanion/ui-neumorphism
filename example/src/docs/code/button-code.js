export const allButtons = (dark) => {
  const darkProp = dark ? ' dark' : ''
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
  const darkProp = dark ? ' dark' : ''
  const typeProp = type ? ' ' + type : ''
  return `<Button${darkProp}${typeProp}>default</Button>
<Button${darkProp}${typeProp} color='var(--primary)'>colored</Button>
<Button${darkProp}${typeProp} disabled>disabled</Button>`
}

export const blockButton = (dark) => {
  const darkProp = dark ? ' dark' : ''
  return `<Button${darkProp} block>block button</Button>`
}

export const sizeButtons = (dark, type) => {
  const darkProp = dark ? ' dark' : ''
  return `<Button${darkProp} size='small'>small</Button>
<Button${darkProp} size='medium'>medium</Button>
<Button${darkProp} size='large'>large</Button>`
}

export const fabButtons = (dark, type) => {
  const darkProp = dark ? ' dark' : ''
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

export const fabPosButtons = (dark) => {
  const darkProp = dark ? ' dark' : ''
  return `<Card${darkProp} flat style={{ position: 'relative'}}>
  <Fab${darkProp} absolute top left>A</Fab>
  <Fab${darkProp} absolute top right>B</Fab>
  <Fab${darkProp} absolute bottom left>C</Fab>
  <Fab${darkProp} absolute bottom right>D</Fab>
</Card>`
}

export const iconButtons = (dark) => {
  const darkProp = dark ? ' dark' : ''
  return `// Icon component is from '@mdi/react' and is not bundled with this library
<IconButton${darkProp} size='small'>
  <Icon path={mdiRun} size={0.8} />
</IconButton>
<IconButton${darkProp} rounded text={false} color='var(--error)'>
  <Icon path={mdiOpacity} size={1} />
</IconButton>
<IconButton${darkProp} disabled>
  <Icon path={mdiTrashCanOutline} size={1} />
</IconButton>
<IconButton${darkProp} text={false} size='large' color='var(--warning)'>
  <Icon path={mdiStar} size={1} />
</IconButton>
<IconButton${darkProp} color='var(--primary)' rounded>
  <Icon path={mdiSpeaker} size={1} />
</IconButton>
<IconButton${darkProp} color='var(--success)' outlined>
  <Icon path={mdiBroom} size={1} />
</IconButton>`
}

export const toggleButtons = (dark, type, prop) => {
  const darkProp = dark ? ' dark' : ''
  const propType = prop ? ' ' + prop : ''
  return `// Icon component is from '@mdi/react' and is not bundled with this library
<ToggleButtonGroup${darkProp}${propType} ${type} color='var(--primary)' onChange={this.${type}GroupChange.bind(this)}>
  <ToggleButton value='1'>
    <Icon path={${
      type === 'mandatory' ? 'mdiFormatAlignLeft' : 'mdiFormatBold'
    }} size={0.9} />
  </ToggleButton>
  <ToggleButton value='2'>
    <Icon path={${
      type === 'mandatory' ? 'mdiFormatAlignCenter' : 'mdiFormatItalic'
    }} size={0.9} />
  </ToggleButton>
  <ToggleButton value='3'>
    <Icon path={${
      type === 'mandatory' ? 'mdiFormatAlignRight' : 'mdiFormatUnderline'
    }} size={0.9} />
  </ToggleButton>${
    type === 'mandatory'
      ? `
  <ToggleButton disabled value='4'>
    <Icon path={mdiFormatAlignJustify} size={0.9} />
  </ToggleButton>`
      : ''
  }
</ToggleButtonGroup>`
}

export const toggleSizes = (dark) => {
  return `${['small', 'medium', 'large']
    .map((s) => toggleButtons(dark, 'multiple', `value={active} size='${s}'`))
    .join('\n')}`
}

export const toggleStandalone = (dark) => {
  const darkProp = dark ? '\n  dark' : ''
  return `// Icon component is from '@mdi/react' and is not bundled with this library
<ToggleButton${darkProp}
  value={1}
  color='var(--primary)'
  selected={standaloneActive === 1}
  onChange={(e) => this.handleStandaloneChange(e)}
>
  <Icon path={mdiFormatBold} size={0.9} />
</ToggleButton>
<ToggleButton${darkProp}
  value={2}
  color='var(--primary)'
  selected={standaloneActive === 2}
  onChange={(e) => this.handleStandaloneChange(e)}
>
  <Icon path={mdiFormatItalic} size={0.9} />
</ToggleButton>
<ToggleButton${darkProp}
  value={3}
  color='var(--primary)'
  selected={standaloneActive === 3}
  onChange={(e) => this.handleStandaloneChange(e)}
>
  <Icon path={mdiFormatUnderline} size={0.9} />
</ToggleButton>`
}
