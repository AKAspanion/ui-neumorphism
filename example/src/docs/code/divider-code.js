export const divider = (dark) => {
  const darkProp = dark ? ' dark' : ''
  return `<Divider${darkProp} />
<Body2${darkProp}>Default</Body2>
<br/>
<Divider${darkProp} dense />
<Body2${darkProp}>Dense</Body2>
<br/>
<Divider${darkProp} elevated />
<Body2${darkProp}>Elevated</Body2>
<br/>
<Divider${darkProp} dense elevated />
<Body2${darkProp}>Dense & Elevated</Body2>`
}
