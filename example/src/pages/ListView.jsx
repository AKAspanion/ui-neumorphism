import React from 'react'

import { Card, H4, H6, ListItem, ListItemGroup } from 'ui-neumorphism'

// import { toggle, toggleLabel, switchApi } from '../docs/'

import DocCard from '../containers/DocCard.jsx'
// import ApiCard from '../containers/ApiCard.jsx'

const url =
  'https://github.com/AKAspanion/ui-neumorphism/blob/master/example/src/pages/ListView.jsx'
class ListView extends React.Component {
  state = {
    active: 0
  }
  render() {
    const { dark } = this.props
    return (
      <Card flat dark={dark}>
        <H4>
          <a href='#component' name='component'>
            List
          </a>
        </H4>
        <H6>
          The List component presents content in a way that makes it easy to
          identify a specific item in a collection, with consistent styling for
          organizing groups of text and images.
        </H6>
        <DocCard
          url={url}
          content={
            <Card
              width={300}
              className='d-flex align-center justify-center flex-wrap'
            >
              <ListItemGroup
                link
                value={this.state.active}
                onChange={({ active }) => this.setState({ active })}
              >
                <ListItem title={'hello'} />
                <ListItem title={'hello again'} />
                <ListItem title={'hello again friend'} />
                <ListItem active title={'hello again oh hello'} />
              </ListItemGroup>
            </Card>
          }
        />
        <DocCard
          url={url}
          content={
            <Card
              flat
              width={300}
              className='d-flex align-center justify-center flex-wrap'
            >
              <ListItem
                title={'Oh my god'}
                subtitle={
                  'hekp mponent presents content in a way that makes it easy '
                }
              />
              <ListItem
                link
                title={'Oh my god'}
                subtitle={
                  'hekp mponent presents content in a way that makes it easy '
                }
              />
              <ListItem
                link
                active
                title={'Oh my god'}
                subtitle={
                  'hekp mponent presents content in a way that makes it easy '
                }
              />
              <ListItem
                link
                dense
                title={'Oh my god'}
                subtitle={
                  'hekp mponent presents content in a way that makes it easy '
                }
              />
              <ListItem
                link
                active
                rounded
                title={'Oh my god'}
                subtitle={
                  'hekp mponent presents content in a way that makes it easy '
                }
              />
              <ListItem
                link
                inActive
                rounded
                title={'Oh my god'}
                subtitle={
                  'hekp mponent presents content in a way that makes it easy '
                }
              />
              <ListItem
                link
                dense
                twoLineSubtitle
                title={'Oh my god'}
                subtitle={
                  'hekp mponent presents content in a way that makes it easy way that makes it easy way that makes it easy way that makes it easy '
                }
              />
              <ListItem
                link
                twoLineSubtitle
                title={'Oh my god'}
                subtitle={
                  'hekp mponent presents content in a way that makes it easy way that makes it easy way that makes it easy way that makes it easy '
                }
              />
              <ListItem
                link
                dense
                rounded
                twoLineSubtitle
                title={'Oh my god'}
                subtitle={
                  'hekp mponent presents content in a way that makes it easy way that makes it easy way that makes it easy way that makes it easy '
                }
              />
              <ListItem
                link
                rounded
                twoLineSubtitle
                title={'Oh my god'}
                subtitle={
                  'hekp mponent presents content in a way that makes it easy way that makes it easy way that makes it easy way that makes it easy '
                }
              />
              <ListItem
                link
                active
                raised
                rounded
                twoLineSubtitle
                title={'Oh my god'}
                subtitle={
                  'hekp mponent presents content in a way that makes it easy way that makes it easy way that makes it easy way that makes it easy '
                }
              />
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

export default ListView
