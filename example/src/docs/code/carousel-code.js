export const simpleCarousel = (dark, type) => {
  const darkProp = dark ? ' dark' : ''
  const typeProp = type ? ' ' + type : ''
  return `<Carousel${darkProp}${typeProp}>
${['info', 'error', 'success', 'warning']
  .map(
    (
      color,
      index
    ) => `  <CarouselItem style={{ background: 'var(--${color})' }}>
    <H3>Slide ${index + 1}</H3>
  </CarouselItem>`
  )
  .join('\n')}
</Carousel>`
}

export const customCarousel = (dark) => {
  const darkProp = dark ? '\n  dark' : ''
  return `// Icon component is from '@mdi/react' and is not bundled with this library
<Carousel${darkProp}
  cycle
  activeDelimiterIcon={
    <Icon
      path={mdiEmoticonCoolOutline}
      className='c-pointer ma-3'
      size={1}
    />
  }
  delimiterIcon={
    <Icon
      path={mdiEmoticonHappyOutline}
      className='c-pointer ma-3'
      size={1}
    />
  }
>
${['info', 'error', 'success', 'warning']
  .map(
    (
      color,
      index
    ) => `  <CarouselItem style={{ background: 'var(--${color})' }}>
    <H3>Slide ${index + 1}</H3>
  </CarouselItem>`
  )
  .join('\n')}
</Carousel>`
}
export const customArrows = (dark) => {
  const darkProp = dark ? '\n  dark' : ''
  return `// Icon component is from '@mdi/react' and is not bundled with this library
<Carousel${darkProp}
  cycle
  showArrows
  nextIcon={<Icon path={mdiArrowRightBoldBox} size={1} />}
  prevIcon={<Icon path={mdiArrowLeftBoldBox} size={1} />}
>
${['info', 'error', 'success', 'warning']
  .map(
    (
      color,
      index
    ) => `  <CarouselItem style={{ background: 'var(--${color})' }}>
    <H3>Slide ${index + 1}</H3>
  </CarouselItem>`
  )
  .join('\n')}
</Carousel>`
}
