import React from 'react'

import { Card, Tabs, Tab, H4, H6 } from 'ui-neumorphism'

// import { toggle, toggleLabel, switchApi } from '../docs/'

import DocCard from '../containers/DocCard.jsx'
// import ApiCard from '../containers/ApiCard.jsx'

const url =
  'https://github.com/AKAspanion/ui-neumorphism/blob/master/example/src/pages/TabView.jsx'
class TabView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 0
    }
  }
  render() {
    const { dark } = this.props
    return (
      <Card flat dark={dark}>
        <H4>
          <a href='#component' name='component'>
            Tabs
          </a>
        </H4>
        <H6>
          The Tabs component is used for hiding content behind a selectable
          item.
        </H6>
        <DocCard
          url={url}
          content={
            <Card flat className='px-4 fill-width'>
              <Tabs value={0}>
                <Tab>Item 1</Tab>
                <Tab>Item 2</Tab>
                <Tab>Item 3</Tab>
              </Tabs>
            </Card>
          }
        />
        <H4 className='mt-12'>
          <a href='#api' name='api'>
            API
          </a>
        </H4>
        Coming soon..
      </Card>
    )
  }
}

export default TabView
