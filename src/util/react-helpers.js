import {
  Children,
  cloneElement
} from 'react'

/**
 * Check if component is valid in library
 * @param {*} component
 */
export const isMyReactComponent = (component) => {
  let componentName = ''
  if (component && component.type && typeof component.type !== 'string') {
    componentName = component.type.displayName
  }
  return componentName && componentName.includes('Nu')
}

/**
 * Pass down given prop to all given children
 * @param {*} children
 * @param {*} props
 * @param {*} propName
 */
export const passDownProp = (children, props, propName) => {
  return Children.map(children, (child) => {
    if (isMyReactComponent(child)) {
      const newProps = {
        ...child.props
      }
      if (typeof propName === 'string') {
        newProps[propName] = child.props[propName] === undefined ? props[propName] : child.props[propName]
      } else if (Array.isArray(propName)) {
        propName.forEach(prop => {
          newProps[prop] = child.props[prop] === undefined ? props[prop] : child.props[prop]
        })
      }
      return cloneElement(child, newProps)
    } else {
      return child
    }
  })
}

/**
 * Resolve a ref value to its DOM node. Replacement for the removed
 * `ReactDOM.findDOMNode` (React 19).
 *
 * Accepts a DOM node, or a component instance that exposes a `domNode`
 * getter (every ui-neumorphism component does). Returns `null` otherwise.
 * @param {*} target
 */
export const getDOMNode = (target) => {
  if (!target || typeof target !== 'object') return null
  if (target.nodeType) return target
  if ('domNode' in target) return getDOMNode(target.domNode)
  return null
}

const warnedNoDOMNode = {}

/**
 * Dev-only warning for when a component needs its child's DOM node but
 * the child does not expose one (see `getDOMNode`).
 * @param {string} name
 */
export const warnNoDOMNode = (name) => {
  if (process.env.NODE_ENV === 'production' || warnedNoDOMNode[name]) return
  warnedNoDOMNode[name] = true
  console.warn(
    `ui-neumorphism: ${name} could not find the DOM node of its child. ` +
      'Pass a DOM element, a component that forwards `ref` to a DOM element, ' +
      'or a class component that exposes a `domNode` getter.'
  )
}
