import React from 'react'

import Icon from '@mdi/react'
import { mdiNumeric4, mdiNumeric6, mdiNumeric9 } from '@mdi/js'

import { Card, Table, H5, Subtitle1, H4, H6, Divider } from 'ui-neumorphism'

import { simpleTable, minimalTable, tableApi } from '../docs/'
import DocCard from '../containers/DocCard.jsx'
import ApiCard from '../containers/ApiCard.jsx'

function createItem(name, calories, fat, carbs, protein, iron) {
  return { name, calories, fat, carbs, protein, iron }
}

const headers = [
  {
    text: 'Dessert (100g serving)',
    align: 'left',
    value: 'name'
  },
  { text: 'Calories', align: 'right', value: 'calories' },
  { text: 'Fat (g)', align: 'right', value: 'fat' },
  { text: 'Carbs (g)', align: 'right', value: 'carbs' },
  { text: 'Protein (g)', align: 'right', value: 'protein' },
  { text: 'Iron (%)', align: 'right', value: 'iron' }
]

const items = [
  createItem('Frozen yoghurt', 159, 6.0, 24, 4.0, '1%'),
  createItem('Ice cream sandwich', 237, 9.0, 37, 4.3, '1%'),
  createItem('Eclair', 262, 16.0, 24, 6.0, '7%'),
  createItem('Cupcake', 305, 3.7, 67, 4.3, '8%'),
  createItem('Gingerbread', 356, 16.0, 49, 3.9, '16%')
]

const jsxItems = [
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
]

const url =
  'https://github.com/AKAspanion/ui-neumorphism/blob/master/example/src/pages/TableView.jsx'

class TableView extends React.Component {
  render() {
    const { dark } = this.props
    return (
      <Card dark={dark} flat className='py-2'>
        <H4>
          <a href='#component' name='component'>
            Tables
          </a>
        </H4>
        <H6>Tables display sets of data in tabular form</H6>
        <Subtitle1 className='mt-1'>
          Tables display information in a way that’s easy to scan, so that users
          can look for patterns and insights.
        </Subtitle1>
        <DocCard
          url={url}
          className='mt-12'
          title={<H5>Simple table</H5>}
          subtitle={
            <Subtitle1>
              The standard table will by default render your data as simple
              rows.
            </Subtitle1>
          }
          content={
            <Card flat className='fill-width px-6 mt-6'>
              <Table items={items} headers={headers} />
            </Card>
          }
          code={[simpleTable, dark]}
        />
        <DocCard
          url={url}
          className='mt-12'
          title={<H5>Simple customized table</H5>}
          subtitle={
            <Subtitle1>
              The <code>items</code> array having any valid jsx is easily
              rendered. This way all table cell data can be customized
              individualy.
            </Subtitle1>
          }
          content={
            <Card flat className='fill-width px-6 mt-6'>
              <Table items={jsxItems} headers={headers} />
            </Card>
          }
          code={[simpleTable, dark, [null, true]]}
        />
        <DocCard
          url={url}
          className='mt-12'
          title={<H5>Flat</H5>}
          subtitle={
            <Subtitle1>
              <code>flat</code> prop removes the elevation of table.
            </Subtitle1>
          }
          content={
            <Card flat className='fill-width px-6 mt-6'>
              <Table flat items={items} headers={headers} />
            </Card>
          }
          code={[minimalTable, dark, ['flat']]}
        />
        <DocCard
          url={url}
          className='mt-12'
          title={<H5>Outlined</H5>}
          subtitle={
            <Subtitle1>
              <code>outlined</code> prop removes the elevation and gives a
              border to the table.
            </Subtitle1>
          }
          content={
            <Card flat className='fill-width px-6 mt-6'>
              <Table outlined items={items} headers={headers} />
            </Card>
          }
          code={[minimalTable, dark, ['outlined']]}
        />
        <DocCard
          url={url}
          className='mt-12'
          title={<H5>Inset</H5>}
          subtitle={
            <Subtitle1>
              <code>inset</code> prop reverses the elevation of table.
            </Subtitle1>
          }
          content={
            <Card flat className='fill-width px-6 mt-6'>
              <Table inset items={items} headers={headers} />
            </Card>
          }
          code={[minimalTable, dark, ['inset']]}
        />
        <DocCard
          url={url}
          className='mt-12'
          title={<H5>Dense</H5>}
          subtitle={
            <Subtitle1>
              <code>dense</code> prop decreases the height of rows, for an
              alternate style.
            </Subtitle1>
          }
          content={
            <Card flat className='fill-width px-6 mt-6'>
              <Table dense items={items} headers={headers} />
            </Card>
          }
          code={[minimalTable, dark, ['dense']]}
        />
        <DocCard
          url={url}
          className='mt-12'
          title={<H5>No headers</H5>}
          subtitle={
            <Subtitle1>
              <code>noHeaders</code> prop removes the header of the table.
            </Subtitle1>
          }
          content={
            <Card flat className='fill-width px-6 mt-6'>
              <Table noHeaders items={items} headers={headers} />
            </Card>
          }
          code={[minimalTable, dark, ['noHeaders']]}
        />
        <Divider dense className='mt-6' />
        <H4 className='mt-12'>
          <a name='api'>API</a>
        </H4>
        <ApiCard entity='Table' data={tableApi(dark)} />
      </Card>
    )
  }
}

export default TableView
