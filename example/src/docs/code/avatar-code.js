export const imgAvatar = () => {
  return `<Avatar 
  alt="Ankit Kumar Pandit"
  src='https://lh3.googleusercontent.com/a-/AAuE7mBL0Hh_wKgNlXtZks9XqIU3uv-j3COoKuYysLS_Svg'
/>
<Avatar 
  alt="Ankit Kumar Pandit"
  src='https://lh3.googleusercontent.com/a-/AAuE7mCIyihYk1lPElmGoTqL4Pvb9PD3RT3x-EB2WUb6'
/>`
}

export const textAvatar = () => {
  return `<Avatar>A</Avatar>
<Avatar bgColor='var(--error)'>AK</Avatar>`
}

export const iconAvatar = () => {
  return `// Icon component is from '@mdi/react' and is not bundled with this library
<Avatar bgColor='var(--warning)'>
  <Icon path={mdiFolder} size={1} />
</Avatar>
<Avatar bgColor='var(--success)'>
  <Icon path={mdiCalendar} size={1} />
</Avatar>`
}

export const colorAvatar = () => {
  return `<Avatar color='blue' bgColor='var(--warning)'>
  A
</Avatar>
<Avatar color='purple' bgColor='var(--success)'>
  AK
</Avatar>`
}

export const varientAvatar = () => {
  return `<Avatar square bgColor='var(--warning)'>
  <Icon path={mdiFolder} size={1} />
</Avatar>
<Avatar rounded bgColor='var(--success)'>
  <Icon path={mdiCalendar} size={1} />
</Avatar>`
}

export const sizeAvatar = () => {
  return `<Avatar
  size='small'
  src='https://lh3.googleusercontent.com/a-/AAuE7mBL0Hh_wKgNlXtZks9XqIU3uv-j3COoKuYysLS_Svg'
/>
<Avatar
  size='medium'
  src='https://lh3.googleusercontent.com/a-/AAuE7mBL0Hh_wKgNlXtZks9XqIU3uv-j3COoKuYysLS_Svg'
/>
<Avatar
  size='large'
  src='https://lh3.googleusercontent.com/a-/AAuE7mBL0Hh_wKgNlXtZks9XqIU3uv-j3COoKuYysLS_Svg'
/>
<Avatar
  size={120}
  src='https://lh3.googleusercontent.com/a-/AAuE7mBL0Hh_wKgNlXtZks9XqIU3uv-j3COoKuYysLS_Svg'
/>`
}

export const fallBackAvatar = () => {
  return `<Avatar src='broken.jpg' alt='Ankit Kumar Pandit' >
  AK
</Avatar>
<Avatar src='broken.jpg' alt='Ankit Kumar Pandit' />
<Avatar src='broken.jpg' />`
}
