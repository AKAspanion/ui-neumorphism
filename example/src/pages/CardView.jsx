import React from 'react'

import Icon from '@mdi/react'
import { mdiDotsVertical, mdiShareVariant, mdiHeart } from '@mdi/js'
import {
  CardContent,
  IconButton,
  CardHeader,
  CardAction,
  CardMedia,
  Subtitle1,
  Subtitle2,
  Spacer,
  Button,
  Card,
  Body2,
  H6,
  H5,
  H4
} from 'ui-neumorphism'

import CodeBlock from '../containers/CodeBlock.jsx'
import { simpleCard, simpleCardCopy, mediaCard, complexCard } from '../assets/'
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
        <Subtitle1>
          Although cards can support multiple actions, remember that cards are
          entry points to more complex and detailed information.
        </Subtitle1>
        <br />
        <H5 style={{ marginTop: '24px' }}>Simple Card</H5>
        <Card outlined className='mt-2'>
          <Card flat outlined={false} className='d-flex justify-center py-12'>
            <Card width={275}>
              {cardContent}
              {cardAction}
            </Card>
          </Card>
          <CodeBlock lang='html'>{simpleCard(dark ? 'dark' : '')}</CodeBlock>
        </Card>
        <br />
        <br />
        <H5>Inset Card</H5>
        <Subtitle1>
          Set <code>inset</code> flag to render an inset card.
        </Subtitle1>
        <Card outlined className='mt-2'>
          <Card flat outlined={false} className='d-flex justify-center py-12'>
            <Card inset width={275}>
              {cardContent}
              {cardAction}
            </Card>
          </Card>
          <CodeBlock lang='html'>
            {simpleCardCopy(dark ? 'dark inset' : 'inset')}
          </CodeBlock>
        </Card>
        <br />
        <br />
        <H5>Outlined Card</H5>
        <Subtitle1>
          Set <code>outlined</code> flag to render an outlined card.
        </Subtitle1>
        <Card outlined className='mt-2'>
          <Card flat outlined={false} className='d-flex justify-center py-12'>
            <Card outlined width={275}>
              {cardContent}
              {cardAction}
            </Card>
          </Card>
          <CodeBlock lang='html'>
            {simpleCardCopy(dark ? 'dark outlined' : 'outlined')}
          </CodeBlock>
        </Card>
        <br />
        <br />
        <H5>Rounded Card</H5>
        <Subtitle1>
          Set <code>rounded</code> flag to render a rounded card.
        </Subtitle1>
        <Card outlined className='mt-2'>
          <Card flat outlined={false} className='d-flex justify-center py-12'>
            <Card rounded width={275}>
              {cardContent}
              {cardAction}
            </Card>
          </Card>
          <CodeBlock lang='html'>
            {simpleCardCopy(dark ? 'dark rounded' : 'rounded')}
          </CodeBlock>
        </Card>
        <br />
        <br />
        <H5>Disabled Card</H5>
        <Subtitle1>
          Set <code>disabled</code> flag to render a disabled card.
        </Subtitle1>
        <Card outlined className='mt-2'>
          <Card flat outlined={false} className='d-flex justify-center py-12'>
            <Card disabled width={275}>
              {cardContent}
              {cardAction}
            </Card>
          </Card>
          <CodeBlock lang='html'>
            {simpleCardCopy(dark ? 'dark disabled' : 'disabled')}
          </CodeBlock>
        </Card>
        <br />
        <br />
        <H5>Loading Card</H5>
        <Subtitle1>
          Set <code>loading</code> flag to show a loading progress bar on top.
        </Subtitle1>
        <Card outlined className='mt-2'>
          <Card flat outlined={false} className='d-flex justify-center py-12'>
            <Card loading width={275}>
              {cardContent}
              {cardAction}
            </Card>
          </Card>
          <CodeBlock lang='html'>
            {simpleCardCopy(dark ? 'dark loading' : 'loading')}
          </CodeBlock>
        </Card>
        <br />
        <br />
        <H5>Media with text</H5>
        <Subtitle1>You can add media inside a card.</Subtitle1>
        <Card outlined className='mt-2'>
          <Card flat outlined={false} className='d-flex justify-center py-12'>
            <Card width={300}>
              <CardMedia
                dark
                title='Top 10 Indian beaches'
                src='images/beaches-2.jpg'
              />
              <CardContent>
                <Subtitle2
                  secondary
                  style={{
                    marginBottom: '4px'
                  }}
                >
                  Number 1
                </Subtitle2>
                <Body2>
                  Radhanagar Beach
                  <br />
                  Havock Island, Andaman
                </Body2>
              </CardContent>
              <CardAction>
                <Button text color='var(--primary)'>
                  Share
                </Button>
                <Button text color='var(--primary)'>
                  Explore
                </Button>
              </CardAction>
            </Card>
          </Card>
          <CodeBlock lang='html'>{mediaCard(dark ? 'dark' : '')}</CodeBlock>
        </Card>
        <br />
        <br />
        <H5>Advanced Card</H5>
        <Subtitle1>
          You can create unique card layouts in an advanced setting.
        </Subtitle1>
        <Card outlined className='mt-2'>
          <Card flat outlined={false} className='d-flex justify-center py-12'>
            <Card width={300}>
              <CardHeader
                title={<H6>Lorem ipsum</H6>}
                subtitle={
                  <Subtitle2 secondary>Lorem ipsum dolor sit amet</Subtitle2>
                }
                action={
                  <IconButton>
                    <Icon path={mdiDotsVertical} size={1}></Icon>
                  </IconButton>
                }
              />
              <CardMedia dark src='images/beaches-2.jpg' />
              <CardContent>
                <Body2>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Atque architecto reprehenderit magnam esse est id ipsum ut
                  delectus. Consequuntur suscipit hic eum ea adipisci, illum sed
                  iure saepe aperiam quia!
                </Body2>
              </CardContent>
              <CardAction>
                <Button text color='var(--primary)'>
                  Read
                </Button>
                <Button text color='var(--primary)'>
                  Bookmark
                </Button>
                <Spacer />
                <IconButton>
                  <Icon path={mdiHeart} size={1}></Icon>
                </IconButton>
                <IconButton>
                  <Icon path={mdiShareVariant} size={1}></Icon>
                </IconButton>
              </CardAction>
            </Card>
          </Card>
          <CodeBlock lang='html'>{complexCard(dark ? 'dark' : '')}</CodeBlock>
        </Card>
        <br />
        <br />
        <H5>API</H5>
        <Subtitle1>Coming soon..</Subtitle1>
      </Card>
    )
  }
}

export default CardView
