import React from 'react'

import { Card, CardAction, CardContent, Button } from 'ui-neumorphism'
class CardView extends React.Component {
  render() {
    const cardContent = (
      <CardContent>
        <p
          style={{
            marginBottom: '4px',
            color: 'var(--g-text-color-secondary-light)'
          }}
        >
          Word of the day
        </p>
        <h2>
          be<span>•</span>nev<span>•</span>o<span>•</span>lent
        </h2>
        <p
          style={{
            marginBottom: '12px',
            color: 'var(--g-text-color-secondary-light)'
          }}
        >
          adjective
        </p>
        <p>
          well meaning and kindly.
          <br />
          "a benevolent smile"
        </p>
      </CardContent>
    )
    const cardAction = (
      <CardAction>
        <Button text>Learn More</Button>
      </CardAction>
    )

    return (
      <div>
        <h1 className='main-h1'>Cards</h1>
        <p className='main-para'>
          Cards contain content and actions about a single subject.
        </p>
        <h2>Simple Card</h2>
        <div className='flex-container'>
          <div style={{ width: '275px', margin: '32px' }}>
            <Card>
              {cardContent}
              {cardAction}
            </Card>
          </div>
        </div>
        <h2>Outlined Card</h2>
        <div className='flex-container'>
          <div style={{ width: '275px', margin: '32px' }}>
            <Card outlined>
              {cardContent}
              {cardAction}
            </Card>
          </div>
        </div>
        <h2>Rounded Card</h2>
        <div className='flex-container'>
          <div style={{ width: '275px', margin: '32px' }}>
            <Card rounded>
              {cardContent}
              {cardAction}
            </Card>
          </div>
        </div>
      </div>
    )
  }
}

export default CardView
