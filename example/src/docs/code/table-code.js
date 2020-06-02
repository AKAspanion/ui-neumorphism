export const simpleTable = (dark, props = null, jsx = false) => {
  const darkProp = dark ? ' dark' : ''
  const tableProps = props ? ` ${props}` : ''
  const jsxitems = `[
  createItem(
    <div style={{ color: 'var(--primary)' }}>Frozen yoghurt</div>,
    159,
    <Icon path={mdiNumeric6} size={1.1} />,
    24,
    <Icon path={mdiNumeric4} size={1.1} />,
    <span style={{ color: 'var(--error)' }}>1%</span>
  ),
  createItem(
    'Ice cream sandwich',
    237,
    <Icon path={mdiNumeric9} size={1.1} />,
    37,
    4.3,
    <span style={{ color: 'var(--error)' }}>1%</span>
  ),
  createItem(
    <code>Eclair</code>,
    262,
    16.0,
    24,
    <Icon path={mdiNumeric6} size={1.1} />,
    '7%'
  )
]`
  const items = `[
  createItem('Frozen yoghurt', 159, 6.0, 24, 4.0, '1%'),
  createItem('Ice cream sandwich', 237, 9.0, 37, 4.3, '1%'),
  createItem('Eclair', 262, 16.0, 24, 6.0, '7%'),
]`
  const mdiImport = `import Icon from '@mdi/react'
import { mdiNumeric4, mdiNumeric6, mdiNumeric9 } from '@mdi/js'
`
  return `import React from 'react'
${jsx ? mdiImport : ''}
import { Table } from 'ui-neumorphism'

function createItem(name, calories, fat, carbs, protein, iron) {
  return { name, calories, fat, carbs, protein, iron }
}

const headers = [
  { text: 'Dessert (100g serving)', align: 'left', value: 'name' },
  { text: 'Calories', align: 'right', value: 'calories' },
  { text: 'Fat (g)', align: 'right', value: 'fat' },
  { text: 'Carbs (g)', align: 'right', value: 'carbs' },
  { text: 'Protein (g)', align: 'right', value: 'protein' },
  { text: 'Iron (%)', align: 'right', value: 'iron' }
]

const items = ${jsx ? jsxitems : items}
class TableView extends React.Component { 
  render() {
    return <Table${darkProp}${tableProps} items={items} headers={headers} />
  }
}
`
}

export const minimalTable = (dark, props) => {
  const darkProp = dark ? ' dark' : ''
  const tableProps = props ? ` ${props}` : ''
  return `...
class TableView extends React.Component { 
  render() {
    return <Table${darkProp}${tableProps} items={items} headers={headers} />
  }
}`
}
