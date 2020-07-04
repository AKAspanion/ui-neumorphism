import React from 'react'

import { Card, Tabs, Tab, H4, H6, TabItems, TabItem } from 'ui-neumorphism'

// import { toggle, toggleLabel, switchApi } from '../docs/'

import DocCard from '../containers/DocCard.jsx'
// import ApiCard from '../containers/ApiCard.jsx'

const url =
  'https://github.com/AKAspanion/ui-neumorphism/blob/master/example/src/pages/TabView.jsx'
class TabView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: 0
    }
  }
  render() {
    const { dark } = this.props
    const { active } = this.state

    const tabItems = (
      <TabItems value={active}>
        <TabItem>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </div>
        </TabItem>
        <TabItem>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </TabItem>
        <TabItem>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </TabItem>
      </TabItems>
    )
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
          className='mt-12'
          content={
            <Card flat className='px-4 fill-width'>
              <Card className='pa-4'>
                <Tabs
                  value={active}
                  onChange={({ active }) => this.setState({ active })}
                >
                  <Tab>Item 1</Tab>
                  <Tab>Item 2</Tab>
                  <Tab>Item 3</Tab>
                </Tabs>
                {tabItems}
              </Card>
              <Card rounded className='pa-4 mt-12'>
                <Tabs
                  rounded
                  value={active}
                  onChange={({ active }) => this.setState({ active })}
                >
                  <Tab>Item 1</Tab>
                  <Tab>Item 2</Tab>
                  <Tab>Item 3</Tab>
                </Tabs>
                {tabItems}
              </Card>
              <Card outlined className='pa-4 mt-12'>
                <Tabs
                  outlined
                  value={active}
                  onChange={({ active }) => this.setState({ active })}
                >
                  <Tab>Item 1</Tab>
                  <Tab>Item 2</Tab>
                  <Tab>Item 3</Tab>
                </Tabs>
                {tabItems}
              </Card>
              <Card flat className='pa-4 mt-12'>
                <Tabs
                  underlined
                  value={active}
                  onChange={({ active }) => this.setState({ active })}
                >
                  <Tab>Item 1</Tab>
                  <Tab>Item 2</Tab>
                  <Tab>Item 3</Tab>
                </Tabs>
                {tabItems}
              </Card>
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
