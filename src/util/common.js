import globalModule from '../components/styles.css'

export const getModuleClasses = (localModule, classNames) => {
  const styles = {
    ...localModule,
    ...globalModule
  }
  return classNames.replace(/^\s+|\s+$/g, '').split(/\s+/)
    .map((cl) => styles[cl.trim()]).join(' ').trim()
}

export const callCallback = (callback, data) => {
  if (callback) {
    callback(data)
  }
}

export const uid = () => {
  return `_${(((1 + Math.random()) * 0x10000) | 0).toString(8).substring(1)}_`
}
