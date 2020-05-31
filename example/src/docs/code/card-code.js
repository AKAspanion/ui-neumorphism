export const simpleCard = (dark, type) => {
  const darkProp = dark ? ' dark' : '';
  return `<Card${darkProp}${type ? ' '+type:''}>
  <CardContent>
    <Subtitle2 secondary style={{ marginBottom: '4px' }} >
      Word of the day
    </Subtitle2>
    <H5>
      be<span>•</span>nev<span>•</span>o<span>•</span>lent
    </H5>
    <Subtitle2 secondary style={{ marginBottom: '12px' }} >
      adjective
    </Subtitle2>
    <Body2>
      well meaning and kindly.
      <br />
      "a benevolent smile"
    </Body2>
  </CardContent>
  <CardAction>
    <Button text color='var(--primary)'>
      Learn More
    </Button>
  </CardAction>
</Card>`
}

export const simpleCardCopy = (dark, type, data) => {
  const darkProp = dark ? ' dark' : '';
  return `<Card${darkProp}${type ? ' '+type:''}>
  ${data || '...'}
</Card>`
}

export const elevationCard = (dark) => {
  return `${[0, 1, 2, 3, 4, 5]
    .map((i) =>
      simpleCardCopy(
        dark,
        `elevation={${i}} width={100} height={100}`,
        String(i)
      )
    )
    .join('\n')}`
}

export const mediaCard = (dark) => {
  const darkProp = dark ? ' dark' : '';
  return `<Card${darkProp}>
  <CardMedia
    dark
    src='images/beaches-2.jpg'
    title='Top 10 Indian beaches'
  />
  <CardContent>
    <Subtitle2 secondary style={{ marginBottom: '4px' }} >
      Number 1
    </Subtitle2>
    <Body2>
      Radhanagar Beach <br />
      Havock Island, Andaman
    </Body2>
  </CardContent>
  <CardAction>
    <Button text color='var(--primary)'>
      Share
    </Button>
    <Button text color='var(--primary)'>
      Explore
    </Button>
  </CardAction>
</Card>`
}

export const complexCard = (dark) => {
  const darkProp = dark ? ' dark' : '';
  return `<Card${darkProp}>
  <CardHeader
    title={<H6>Lorem ipsum</H6>}
    subtitle={<Subtitle2 secondary>Lorem ipsum dolor sit amet</Subtitle2>}
    action={
      <IconButton>
        <Icon path={mdiDotsVertical} size={1}></Icon>
      </IconButton>
    }
  />
  <CardMedia dark src='images/beaches-2.jpg' />
  <CardContent>
    <Body2>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque
      architecto reprehenderit magnam esse est id ipsum ut delectus.
      Consequuntur suscipit hic eum ea adipisci, illum sed iure saepe
      aperiam quia!
    </Body2>
  </CardContent>
  <CardAction>
    <Button text color='var(--primary)'>
      Read
    </Button>
    <Button text color='var(--primary)'>
      Bookmark
    </Button>
    <Spacer />
    <IconButton>
      <Icon path={mdiHeart} size={1}></Icon>
    </IconButton>
    <IconButton>
      <Icon path={mdiShareVariant} size={1}></Icon>
    </IconButton>
  </CardAction>
</Card>`
}
