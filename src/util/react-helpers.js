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
        newProps[propName] = child.props[propName] || props[propName]
      } else if (Array.isArray(propName)) {
        propName.forEach(prop => {
          newProps[prop] = child.props[prop] || props[prop]
        })
      }
      return cloneElement(child, newProps)
    } else {
      return child
    }
  })
}
