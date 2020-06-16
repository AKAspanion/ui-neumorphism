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
  Divider,
  Spacer,
  Button,
  Body2,
  Card,
  H6,
  H5,
  H4
} from 'ui-neumorphism'

import {
  cardApi,
  mediaCard,
  simpleCard,
  complexCard,
  cardMediaApi,
  cardActionApi,
  cardHeaderApi,
  elevationCard,
  simpleCardCopy,
  cardContentApi
} from '../docs/'

import DocCard from '../containers/DocCard.jsx'
import ApiCard from '../containers/ApiCard.jsx'

const url =
  'https://github.com/AKAspanion/ui-neumorphism/blob/master/example/src/pages/CardView.jsx'
class CardView extends React.Component {
  render() {
    const cardContent = (
      <CardContent>
        <Subtitle2 secondary className='mb-1'>
          Word of the day
        </Subtitle2>
        <H5>
          be<span>•</span>nev<span>•</span>o<span>•</span>lent
        </H5>
        <Subtitle2 secondary className='mb-3'>
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
      <Card flat dark={dark} className='code-block-container'>
        <H4>
          <a href='#component' name='component'>
            Cards
          </a>
        </H4>
        <H6>Cards contain content and actions about a single subject.</H6>
        <Subtitle1 className='mt-3'>
          Although cards can support multiple actions, remember that cards are
          entry points to more complex and detailed information.
        </Subtitle1>
        <DocCard
          className='mt-12'
          url={url + '#L91-L94'}
          title={<H5>Simple card</H5>}
          subtitle={
            <Subtitle1>
              In simplest form, card is used for wrapping content.
            </Subtitle1>
          }
          content={
            <Card width={250}>
              {cardContent}
              {cardAction}
            </Card>
          }
          code={[simpleCard, dark]}
        />
        <DocCard
          className='mt-12'
          url={url + '#L108-L111'}
          title={<H5>Inset card</H5>}
          subtitle={
            <Subtitle1>
              An <code>inset</code> card reverses the elevation.
            </Subtitle1>
          }
          content={
            <Card inset width={250}>
              {cardContent}
              {cardAction}
            </Card>
          }
          code={[simpleCardCopy, dark, ['inset']]}
        />
        <DocCard
          className='mt-12'
          url={url + '#L125-L128'}
          title={<H5>Bordered card</H5>}
          subtitle={
            <Subtitle1>
              An <code>bordered</code> card contains a soft border.
            </Subtitle1>
          }
          content={
            <Card bordered width={250}>
              {cardContent}
              {cardAction}
            </Card>
          }
          code={[simpleCardCopy, dark, ['bordered']]}
        />
        <DocCard
          url={url}
          className='mt-12'
          title={<H5>Outlined card</H5>}
          subtitle={
            <Subtitle1>
              An <code>outlined</code> card has no elevation and contains a soft
              border.
            </Subtitle1>
          }
          content={
            <Card outlined width={250}>
              {cardContent}
              {cardAction}
            </Card>
          }
          code={[simpleCardCopy, dark, ['outlined']]}
        />
        <DocCard
          className='mt-12'
          url={url + '#L160-L163'}
          title={<H5>Flat card</H5>}
          subtitle={
            <Subtitle1>
              A <code>flat</code> card has no elevation.
            </Subtitle1>
          }
          content={
            <Card flat width={250}>
              {cardContent}
              {cardAction}
            </Card>
          }
          code={[simpleCardCopy, dark, ['flat']]}
        />
        <DocCard
          className='mt-12'
          url={url + '#L178-L181'}
          title={<H5>Rounded card</H5>}
          subtitle={
            <Subtitle1>
              A <code>rounded</code> card has has an alternate rounded corner
              style.
            </Subtitle1>
          }
          content={
            <Card rounded width={250}>
              {cardContent}
              {cardAction}
            </Card>
          }
          code={[simpleCardCopy, dark, ['rounded']]}
        />
        <DocCard
          className='mt-12'
          url={url + '#L195-L198'}
          title={<H5>Disabled card</H5>}
          subtitle={
            <Subtitle1>
              A <code>disabled</code> card has no ability for click or target.
            </Subtitle1>
          }
          content={
            <Card disabled width={250}>
              {cardContent}
              {cardAction}
            </Card>
          }
          code={[simpleCardCopy, dark, ['disabled']]}
        />
        <DocCard
          className='mt-12'
          url={url + '#L212-L215'}
          title={<H5>Loading card</H5>}
          subtitle={
            <Subtitle1>
              A <code>loading</code> card shows a loading progress bar on top.
            </Subtitle1>
          }
          content={
            <Card loading width={250} className='overflow-hidden'>
              {cardContent}
              {cardAction}
            </Card>
          }
          code={[simpleCardCopy, dark, ['loading']]}
        />
        <DocCard
          className='mt-12'
          url={url + '#L231-L234'}
          title={<H5>Width and height</H5>}
          subtitle={
            <Subtitle1>
              A card's size can be adjusted using the <code>width</code>&nbsp;
              and&nbsp;
              <code>height</code> props.
            </Subtitle1>
          }
          content={
            <Card width={200} height={300}>
              {cardContent}
              {cardAction}
            </Card>
          }
          code={[simpleCardCopy, dark, ['width={200} height={300}']]}
        />
        <DocCard
          className='mt-12'
          url={url + '#L249-L261'}
          title={<H5>Elevation</H5>}
          subtitle={
            <Subtitle1>
              Card supports 6 levels of elevation from 0-5. Using&nbsp;
              <code>elevation</code> prop, you can adjust it.
            </Subtitle1>
          }
          content={
            <Card flat className='d-flex align-center justify-center flex-wrap'>
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <Card
                  key={i}
                  width={100}
                  height={100}
                  elevation={i}
                  className='mx-8 my-10 d-flex align-center justify-center'
                >
                  {i}
                </Card>
              ))}
            </Card>
          }
          code={[elevationCard, dark]}
        />
        <DocCard
          className='mt-12'
          url={url + '#L278-L307'}
          title={<H5>Media with text</H5>}
          subtitle={
            <Subtitle1>
              You can add media inside a card.
              <br />
              P.S. Try to use illustrations instead of images as it works better
              with overall look.
            </Subtitle1>
          }
          content={
            <Card width={275} className='overflow-hidden'>
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
          }
          code={[mediaCard, dark]}
        />
        <DocCard
          className='mt-12'
          url={url + '#L321-L357'}
          title={<H5>Advanced card</H5>}
          subtitle={
            <Subtitle1>
              You can create unique card layouts in an advanced setting.
            </Subtitle1>
          }
          content={
            <Card width={275}>
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
          }
          code={[complexCard, dark]}
        />
        <Divider dense className='mt-6' />
        <H4 className='mt-12'>
          <a href='#api' name='api'>
            API
          </a>
        </H4>
        <ApiCard entity='Card' data={cardApi(dark)} />
        <div className='mt-12'></div>
        <ApiCard entity='CardHeader' data={cardHeaderApi(dark)} />
        <div className='mt-12'></div>
        <ApiCard entity='CardMedia' data={cardMediaApi(dark)} />
        <div className='mt-12'></div>
        <ApiCard entity='CardContent' data={cardContentApi(dark)} />
        <div className='mt-12'></div>
        <ApiCard entity='CardAction' data={cardActionApi(dark)} />
      </Card>
    )
  }
}

export default CardView
