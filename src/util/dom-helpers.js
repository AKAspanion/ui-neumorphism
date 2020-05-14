export const setCSSVariable = (id, variable, value) => {
  const elem = document.getElementById(id)
  if (elem && value) {
    elem.style.setProperty(variable, String(value))
  }
}
