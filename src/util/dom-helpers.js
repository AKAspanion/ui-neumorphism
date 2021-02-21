const defaultRootCSSVariables = {
  '--light-bg': '#E4EBF5',
  '--light-bg-dark-shadow': '#bec8e4',
  '--light-bg-light-shadow': '#ffffff',
  '--dark-bg': '#444444',
  '--dark-bg-dark-shadow': '#363636',
  '--dark-bg-light-shadow': '#525252',
  '--white': '#ffffff',
  '--black': '#000000',
  '--primary': '#f71b94',
  '--primary-dark': '#aa0660',
  '--primary-light': '#fa7ac0',
  '--g-text-color-light': 'rgba(0, 0, 0, 0.87)',
  '--g-text-color-disabled-light': 'rgba(0, 0, 0, 0.38)',
  '--g-text-color-secondary-light': 'rgba(0, 0, 0, 0.60)',
  '--g-text-color-dark': 'rgba(255, 255, 255, 0.87)',
  '--g-text-color-disabled-dark': 'rgba(255, 255, 255, 0.38)',
  '--g-text-color-secondary-dark': 'rgba(255, 255, 255, 0.60)',
  '--g-bg-color-disabled-light': '#dee5e8',
  '--g-bg-color-disabled-dark': '#727272'
}

/**
 * Function to change a given css variable
 * @param {*} element
 * @param {*} variable
 * @param {*} value
 */
export const setCSSVariable = (element, variable, value) => {
  if (element && value) {
    element.style.setProperty(variable, String(value))
  }
}

/**
 * Getter function to fetch all default css variables object
 */
export const getDefaultThemeVariables = () => {
  return defaultRootCSSVariables
}

/**
 * Function to change root css variables
 * @param {*} themeObject
 */
export const overrideThemeVariables = (themeObject) => {
  const root = document.querySelector(':root')
  const themeVariables = Object.keys(themeObject)
  if (root && themeObject) {
    themeVariables.forEach((themeVar) => {
      const varValue = themeObject[themeVar]
      if (varValue && themeVar.startsWith('--')) {
        setCSSVariable(root, themeVar, varValue)
      }
    })
  }
}

/**
 *
 * @param {*} path
 * @param {*} element
 */
export const detectElementInDOM = (path = [], element = 'null') => {
  return path
    .map((elem) => elem.nodeName)
    .join('-')
    .toLowerCase()
    .includes(element.toLowerCase())
}

/**
 *
 * @param {*} event : DOM click event
 * @param {*} node : DOM node to detect click inside of
 */

export const findClickInside = (event, node) => {
  let currentNode = event.target
  try {
    do {
      if (currentNode === node) {
        // click is inside
        return true
      }
      currentNode = currentNode.parentNode
    } while (currentNode)
    // click is outside
    return false
  } catch (err) {
    throw new Error(err)
  }
}
