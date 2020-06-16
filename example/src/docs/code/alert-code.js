export const simpleAlert = (dark, prop) => {
  const d = dark ? ' dark' : ''
  const p = prop ? prop + ' ' : ''
  return `<Alert${d} ${p}type='success'>
  I'm a success alert.
</Alert>
<Alert${d} ${p}type='info'>
  I'm an info alert.
</Alert>
<Alert${d} ${p}type='warning'>
  I'm a warning alert.
</Alert>
<Alert${d} ${p}type='error'>
  I'm an error alert.
</Alert>`
}

export const bulkAlert = (dark) => {
  const d = dark ? ' dark' : ''
  return `<Alert${d} type='success' flat>
  I'm a success alert.
</Alert>
<Alert${d} type='info' bordered>
  I'm an info alert.
</Alert>
<Alert${d} type='warning' rounded>
  I'm a warning alert.
</Alert>
<Alert${d} type='error' outlined>
  I'm an error alert.
</Alert>`
}

export const colorAlert = (dark) => {
  const d = dark ? ' dark' : ''
  return `<Alert${d} color='#6200EA'>
  I'm an alert with #6200EA color.
</Alert>
<Alert${d} color='magenta'>
  I'm an alert with magenta color.
</Alert>`
}

export const borderAlert = (dark) => {
  const d = dark ? ' dark' : ''
  return `<Alert${d} type='success' border='top'>
  I'm a success alert.
</Alert>
<Alert${d} type='info' border='left'>
  I'm an info alert.
</Alert>
<Alert${d} color='magenta' border='right'>
  I'm a magenta alert.
</Alert>
<Alert${d} type='error' border='bottom'>
  I'm an error alert.
</Alert>`
}

export const denseAlert = (dark) => {
  const d = dark ? ' dark' : ''
  return `<Alert${d} type='success' dense>
  I'm a success alert.
</Alert>
<Alert${d} border='left' type='info' dense>
  I'm an info alert.
</Alert>
<Alert${d} color='magenta' dense inset>
  I'm a magenta alert.
</Alert>
<Alert${d} type='error' dense outlined>
  I'm an error alert.
</Alert>`
}

export const iconAlert = (dark) => {
  const d = dark ? '\n  dark' : ''
  return `// Icon component is from '@mdi/react' and is not bundled with this library
<Alert${d}
  type='success'
  icon={<Icon path={mdiCheckCircle} size={1} />}
>
  I'm a success alert.
</Alert>
<Alert${d}
  type='info'
  icon={<Icon path={mdiInformationVariant} size={1} />}
>
  I'm an info alert.
</Alert>
<Alert${d}
  type='warning'
  icon={<Icon path={mdiInformationOutline} size={1} />}
>
  I'm a warning alert.
</Alert>
<Alert${d}
  type='error'
  icon={<Icon path={mdiAlert} size={1} />}
>
  I'm an error alert.
</Alert>`
}

export const closeAlert = (dark) => {
  const d = dark ? '\n  dark' : ''
  return `// Icon component is from '@mdi/react' and is not bundled with this library
<Alert${d}
  rounded
  closable
  type='error'
  border='left'
  visible={this.state.visible1}
  icon={<Icon path={mdiAlert} size={1} />}
  onClose={() => this.setState({ visible1: false })}
>
  Click on close button to hide me.
</Alert>
{this.state.visible1 ? null : (
  <Card flat className='mb-6'>
    <Button onClick={() => this.setState({ visible1: true })}>
      show
    </Button>
  </Card>
)}
<Alert${d}
  closable
  border='left'
  type='success'
  visible={this.state.visible2}
  icon={<Icon path={mdiCheckCircle} size={1} />}
  closeIcon={<Icon path={mdiCloseCircle} size={1} />}
  onClose={() => this.setState({ visible2: false })}
>
  I have custom close Icon.
</Alert>
{this.state.visible2 ? null : (
  <Card flat className='mb-6'>
    <Button onClick={() => this.setState({ visible2: true })}>
      show
    </Button>
  </Card>
)}`
}
