const warn =
  "// Icon component is from '@mdi/react' and is not bundled with this library"

const bell = '<Icon path={mdiBell} size={1} />'

const badge = (i, props) => {
  return `<Badge ${props}content={${i}}>
  <Icon path={mdiBell} size={1} />
</Badge>`
}

export const simpleBadge = (dark, props) => {
  const p = props ? props + ' ' : ''
  return `${warn}
${[2, 3, 4].map((i) => badge(i, p)).join('\n')}`
}

export const dotBadge = () => {
  return `${warn}
${badge(2, 'dot ')}
<Badge dot content={3}>
  Alert
</Badge>`
}

export const borderedBadge = () => {
  return `${warn}
${badge(2, 'bordered overlap ')}
<Badge bordered overlap dot content={3}>
  ${bell}
</Badge>
${badge(4, 'bordered overlap ')}`
}

export const alignBadge = () => {
  return `${warn}
<Badge overlap left bottom content={2}>
  ${bell}
</Badge>
<Badge overlap left content={3}>
  ${bell}
</Badge>
<Badge overlap bottom content={2}>
  ${bell}
</Badge>
<Badge overlap content={3}>
  ${bell}
</Badge>`
}

export const maxBadge = () => {
  return `${warn}
<Badge overlap max={49} content={49}>
  ${bell}
</Badge>
<Badge overlap max={99} content={200}>
  ${bell}
</Badge>
<Badge overlap max={999} content={1000}>
  ${bell}
</Badge>`
}

export const inlineBadge = () => {
  return `${warn}
<Badge left inline content={2}>
  ${bell}
</Badge>
<Badge inline content={3}>
  ${bell}
</Badge>`
}

export const squareBadge = () => {
  return `${warn}
<Badge left square content={2}>
  ${bell}
</Badge>
<Badge square content={3}>
  ${bell}
</Badge>`
}

export const colorBadge = () => {
  return `${warn}
<Badge bgColor='var(--error)' content={3}>
  ${bell}
</Badge>
<Badge
  content={2}
  color='var(--error)'
  bgColor='var(--white)'
>
  ${bell}
</Badge>
<Badge
  bordered
  content={4}
  color='var(--error)'
  bgColor='var(--white)'
  borderColor='var(--success)'
>
  ${bell}
</Badge>`
}

export const customBadge = () => {
  return `${warn}
<Badge
  dot
  bottom
  overlap
  bordered
>
  <Avatar
    alt='Ankit Kumar Pandit'
    src='https://lh3.googleusercontent.com/a-/AAuE7mCIyihYk1lPElmGoTqL4Pvb9PD3RT3x-EB2WUb6'
  />
</Badge>
<Badge
  overlap
  bordered
  noPadding
  bgColor='var(--error)'
  content={<Icon path={mdiLock} size={0.5} />}
>
  <Button disabled>Action</Button>
</Badge>
<Badge
  overlap
  bordered
  noPadding
  bgColor='var(--white)'
  content={
    <Avatar
      size={15}
      alt='Ankit Kumar Pandit'
      src='https://lh3.googleusercontent.com/a-/AAuE7mCIyihYk1lPElmGoTqL4Pvb9PD3RT3x-EB2WUb6'
    />
  }
>
  <Avatar
    alt='Ankit Kumar Pandit'
    src='https://lh3.googleusercontent.com/a-/AAuE7mBL0Hh_wKgNlXtZks9XqIU3uv-j3COoKuYysLS_Svg'
  />
</Badge>`
}
