import React from 'react'

import {
  Card,
  CardAction,
  CardContent,
  Button,
  Subtitle1,
  Subtitle2,
  Body2,
  H6,
  H5,
  H4
} from 'ui-neumorphism'
class CardView extends React.Component {
  render() {
    const cardContent = (
      <CardContent>
        <Subtitle2
          secondary
          style={{
            marginBottom: '4px'
          }}
        >
          Word of the day
        </Subtitle2>
        <H5>
          be<span>•</span>nev<span>•</span>o<span>•</span>lent
        </H5>
        <Subtitle2
          secondary
          style={{
            marginBottom: '12px'
          }}
        >
          adjective
        </Subtitle2>
        <Body2>
          well meaning and kindly.
          <br />
          "a benevolent smile"
        </Body2>
      </CardContent>
    )
    const cardAction = (
      <CardAction>
        <Button text color='var(--primary)'>
          Learn More
        </Button>
      </CardAction>
    )

    const { dark } = this.props
    return (
      <Card flat dark={dark}>
        <H4>Cards</H4>
        <H6>Cards contain content and actions about a single subject.</H6>
        <br />
        <Subtitle1 style={{ marginBottom: '4px' }}>
          Although cards can support multiple actions, remember that cards are
          entry points to more complex and detailed information.
        </Subtitle1>
        <br />
        <H5 style={{ marginTop: '24px' }}>Simple Card</H5>
        <div className='flex-container'>
          <div style={{ width: '275px', margin: '32px' }}>
            <Card dark={dark}>
              {cardContent}
              {cardAction}
            </Card>
          </div>
        </div>
        <br />
        <br />
        <H5>Outlined Card</H5>
        <Subtitle1>
          Set <code>outlined</code> flag to render an outlined card.
        </Subtitle1>
        <div className='flex-container'>
          <div style={{ width: '275px', margin: '32px' }}>
            <Card outlined dark={dark}>
              {cardContent}
              {cardAction}
            </Card>
          </div>
        </div>
        <br />
        <br />
        <H5>Rounded Card</H5>
        <Subtitle1>
          Set <code>rounded</code> flag to render an rounded card.
        </Subtitle1>
        <div className='flex-container'>
          <div style={{ width: '275px', margin: '32px' }}>
            <Card rounded dark={dark}>
              {cardContent}
              {cardAction}
            </Card>
          </div>
        </div>
        <br />
        <br />
        <H5>API</H5>
        <Subtitle1>Coming soon..</Subtitle1>
      </Card>
    )
  }
}

export default CardView
