import React from 'react'

import { Card, Table, H5, Subtitle1, H4, H6 } from 'ui-neumorphism'

import DocCard from '../containers/DocCard.jsx'

class TableView extends React.Component {
  render() {
    const { dark } = this.props
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
      {
        name: 'Frozen Yogurt',
        calories: 159,
        fat: 6.0,
        carbs: 24,
        protein: 4.0,
        iron: '1%'
      },
      {
        name: 'Ice cream sandwich',
        calories: 237,
        fat: 9.0,
        carbs: 37,
        protein: 4.3,
        iron: '1%'
      },
      {
        name: 'Eclair',
        calories: 262,
        fat: 16.0,
        carbs: 23,
        protein: 6.0,
        iron: '7%'
      },
      {
        name: 'Cupcake',
        calories: 305,
        fat: 3.7,
        carbs: 67,
        protein: 4.3,
        iron: '8%'
      },
      {
        name: 'Gingerbread',
        calories: 356,
        fat: 16.0,
        carbs: 49,
        protein: 3.9,
        iron: '16%'
      },
      {
        name: 'Jelly bean',
        calories: 375,
        fat: 0.0,
        carbs: 94,
        protein: 0.0,
        iron: '0%'
      },
      {
        name: 'Lollipop',
        calories: 392,
        fat: 0.2,
        carbs: 98,
        protein: 0,
        iron: '2%'
      },
      {
        name: 'Honeycomb',
        calories: 408,
        fat: 3.2,
        carbs: 87,
        protein: 6.5,
        iron: '45%'
      },
      {
        name: 'Donut',
        calories: 452,
        fat: 25.0,
        carbs: 51,
        protein: 4.9,
        iron: '22%'
      },
      {
        name: 'KitKat',
        calories: 518,
        fat: 26.0,
        carbs: 65,
        protein: 7,
        iron: '6%'
      }
    ]
    return (
      <Card dark={dark} flat className='py-2'>
        <H4>Tables</H4>
        <H6>Tables display sets of data in tabular form</H6>
        <Subtitle1 className='mt-1'>
          Tables display information in a way that’s easy to scan, so that users
          can look for patterns and insights.
        </Subtitle1>
        <DocCard
          className='mt-12'
          title={<H5>Simple Table</H5>}
          subtitle={
            <Subtitle1>
              The standard data-table will by default render your data as simple
              rows.
            </Subtitle1>
          }
          content={
            <Card flat className='fill-width px-12 mt-6'>
              <Table items={items} headers={headers}>
                child
              </Table>
            </Card>
          }
        />
      </Card>
    )
  }
}

export default TableView
