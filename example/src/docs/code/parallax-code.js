export const simpleParallax = (dark, props) => {
  const p = props ? props + ' ' : ''
  return `<Parallax src='images/dessert-night.jpg' containerId='mainView' ${p}/>`
}
