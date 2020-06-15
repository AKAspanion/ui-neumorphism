import React from 'react'

import Icon from '@mdi/react'
import { mdiBell, mdiLock } from '@mdi/js'

import {
  Card,
  H4,
  H6,
  Badge,
  Divider,
  Button,
  Avatar,
  H5,
  Subtitle1
} from 'ui-neumorphism'

import {
  badgeApi,
  dotBadge,
  maxBadge,
  alignBadge,
  colorBadge,
  simpleBadge,
  inlineBadge,
  squareBadge,
  customBadge,
  borderedBadge
} from '../docs/'

import DocCard from '../containers/DocCard.jsx'
import ApiCard from '../containers/ApiCard.jsx'

const url =
  'https://github.com/AKAspanion/ui-neumorphism/blob/master/example/src/pages/BadgeView.jsx'
class BadgeView extends React.Component {
  render() {
    const { dark } = this.props
    return (
      <Card flat dark={dark}>
        <H4>
          <a href='#component' name='component'>
            Badge
          </a>
        </H4>
        <H6>
          Badge generates a small badge to the top-right of its child(ren).
        </H6>
        <DocCard
          className='mt-12'
          url={url + '#L64-L72'}
          title={<H5>Default badges</H5>}
          subtitle={
            <Subtitle1>
              Examples of badges containing text.The badge is applied to its
              children.
            </Subtitle1>
          }
          content={
            <Card
              flat
              className='mt-6 d-flex align-center justify-center flex-wrap'
            >
              <Badge className='ma-3' content={2}>
                <Icon path={mdiBell} size={1} />
              </Badge>
              <Badge className='ma-3' content={3}>
                <Icon path={mdiBell} size={1} />
              </Badge>
              <Badge className='ma-3' content={4}>
                <Icon path={mdiBell} size={1} />
              </Badge>
            </Card>
          }
          code={[simpleBadge]}
        />
        <DocCard
          className='mt-12'
          url={url + '#L92-L100'}
          title={<H5>Overlap badge</H5>}
          subtitle={
            <Subtitle1>
              You can use the <code>overlap</code> property to place the given
              content on top of the wrapped element.
            </Subtitle1>
          }
          content={
            <Card
              flat
              className='mt-6 d-flex align-center justify-center flex-wrap'
            >
              <Badge className='ma-3' overlap content={2}>
                <Icon path={mdiBell} size={1} />
              </Badge>
              <Badge className='ma-3' overlap content={3}>
                <Icon path={mdiBell} size={1} />
              </Badge>
              <Badge className='ma-3' overlap content={4}>
                <Icon path={mdiBell} size={1} />
              </Badge>
            </Card>
          }
          code={[simpleBadge, dark, ['overlap']]}
        />
        <DocCard
          className='mt-12'
          url={url + '#L119-L124'}
          title={<H5>Dot badge</H5>}
          subtitle={
            <Subtitle1>
              The <code>dot</code> property changes the badge into a small dot.
            </Subtitle1>
          }
          content={
            <Card
              flat
              className='mt-6 d-flex align-center justify-center flex-wrap'
            >
              <Badge className='ma-3' dot content={2}>
                <Icon path={mdiBell} size={1} />
              </Badge>
              <Badge className='ma-3' dot content={3}>
                Alert
              </Badge>
            </Card>
          }
          code={[dotBadge]}
        />
        <DocCard
          className='mt-12'
          url={url + '#L144-L152'}
          title={<H5>Bordered badge</H5>}
          subtitle={
            <Subtitle1>
              You can use the <code>bordered</code> property to place border
              around the badge.
            </Subtitle1>
          }
          content={
            <Card
              flat
              className='mt-6 d-flex align-center justify-center flex-wrap'
            >
              <Badge className='ma-3' bordered overlap content={2}>
                <Icon path={mdiBell} size={1} />
              </Badge>
              <Badge className='ma-3' bordered overlap dot content={3}>
                <Icon path={mdiBell} size={1} />
              </Badge>
              <Badge className='ma-3' bordered overlap content={4}>
                <Icon path={mdiBell} size={1} />
              </Badge>
            </Card>
          }
          code={[borderedBadge]}
        />

        <DocCard
          className='mt-12'
          url={url + '#L172-L183'}
          title={<H5>Badge alignment</H5>}
          subtitle={
            <Subtitle1>
              You can align the badge to any corner of the wrapping element.
            </Subtitle1>
          }
          content={
            <Card
              flat
              className='mt-6 d-flex align-center justify-center flex-wrap'
            >
              <Badge className='ma-3' overlap left bottom content={2}>
                <Icon path={mdiBell} size={1} />
              </Badge>
              <Badge className='ma-3' overlap left content={3}>
                <Icon path={mdiBell} size={1} />
              </Badge>
              <Badge className='ma-3' overlap bottom content={2}>
                <Icon path={mdiBell} size={1} />
              </Badge>
              <Badge className='ma-3' overlap content={3}>
                <Icon path={mdiBell} size={1} />
              </Badge>
            </Card>
          }
          code={[alignBadge]}
        />
        <DocCard
          className='mt-12'
          url={url + '#L203-L211'}
          title={<H5>Maximum value</H5>}
          subtitle={
            <Subtitle1>
              You can use the <code>max</code> property to cap the value of the
              badge content.
            </Subtitle1>
          }
          content={
            <Card
              flat
              className='mt-6 d-flex align-center justify-center flex-wrap'
            >
              <Badge className='ma-3' overlap max={49} content={49}>
                <Icon path={mdiBell} size={1} />
              </Badge>
              <Badge className='ma-3' overlap max={99} content={200}>
                <Icon path={mdiBell} size={1} />
              </Badge>
              <Badge className='ma-3' overlap max={999} content={1000}>
                <Icon path={mdiBell} size={1} />
              </Badge>
            </Card>
          }
          code={[maxBadge]}
        />
        <DocCard
          className='mt-12'
          url={url + '#L230-L235'}
          title={<H5>Inline badge</H5>}
          subtitle={
            <Subtitle1>
              You can set the badge to be inline with the wrapping element.
            </Subtitle1>
          }
          content={
            <Card
              flat
              className='mt-6 d-flex align-center justify-center flex-wrap'
            >
              <Badge className='ma-3' left inline content={2}>
                <Icon path={mdiBell} size={1} />
              </Badge>
              <Badge className='ma-3' inline content={3}>
                <Icon path={mdiBell} size={1} />
              </Badge>
            </Card>
          }
          code={[inlineBadge]}
        />
        <DocCard
          className='mt-12'
          url={url + '#L255-L260'}
          title={<H5>Square badge</H5>}
          subtitle={
            <Subtitle1>
              You can use the <code>square</code> prop to remove badge's border
              radius.
            </Subtitle1>
          }
          content={
            <Card
              flat
              className='mt-6 d-flex align-center justify-center flex-wrap'
            >
              <Badge className='ma-3' left square content={2}>
                <Icon path={mdiBell} size={1} />
              </Badge>
              <Badge className='ma-3' square content={3}>
                <Icon path={mdiBell} size={1} />
              </Badge>
            </Card>
          }
          code={[squareBadge]}
        />
        <DocCard
          className='mt-12'
          url={url + '#L281-L301'}
          title={<H5>Colors</H5>}
          subtitle={
            <Subtitle1>
              Badge's color, background color and border color can be customized
              with <code>color</code>, <code>bgColor</code> and&nbsp;
              <code>borderColor</code> respectively.
            </Subtitle1>
          }
          content={
            <Card
              flat
              className='mt-6 d-flex align-center justify-center flex-wrap'
            >
              <Badge className='ma-3' bgColor='var(--error)' content={3}>
                <Icon path={mdiBell} size={1} />
              </Badge>
              <Badge
                content={2}
                className='ma-3'
                color='var(--error)'
                bgColor='var(--white)'
              >
                <Icon path={mdiBell} size={1} />
              </Badge>
              <Badge
                bordered
                content={4}
                className='ma-3'
                color='var(--error)'
                bgColor='var(--white)'
                borderColor='var(--success)'
              >
                <Icon path={mdiBell} size={1} />
              </Badge>
            </Card>
          }
          code={[colorBadge]}
        />
        <DocCard
          className='mt-12'
          url={url + '#L321-L357'}
          title={<H5>Customization options</H5>}
          subtitle={
            <Subtitle1>
              The Badge component is flexible and can be used in a variety of
              use-cases over numerous elements.
            </Subtitle1>
          }
          content={
            <Card
              flat
              className='mt-6 d-flex align-center justify-center flex-wrap'
            >
              <Badge dot bottom overlap bordered className='ma-3'>
                <Avatar
                  alt='Ankit Kumar Pandit'
                  src='https://lh3.googleusercontent.com/a-/AAuE7mCIyihYk1lPElmGoTqL4Pvb9PD3RT3x-EB2WUb6'
                />
              </Badge>
              <Badge
                overlap
                bordered
                noPadding
                className='ma-3'
                bgColor='var(--error)'
                content={<Icon path={mdiLock} size={0.5} />}
              >
                <Button disabled>Action</Button>
              </Badge>
              <Badge
                overlap
                bordered
                noPadding
                className='ma-3'
                bgColor='var(--white)'
                content={
                  <Avatar
                    size={15}
                    alt='Ankit Kumar Pandit'
                    src='https://lh3.googleusercontent.com/a-/AAuE7mCIyihYk1lPElmGoTqL4Pvb9PD3RT3x-EB2WUb6'
                  />
                }
              >
                <Avatar
                  alt='Ankit Kumar Pandit'
                  src='https://lh3.googleusercontent.com/a-/AAuE7mBL0Hh_wKgNlXtZks9XqIU3uv-j3COoKuYysLS_Svg'
                />
              </Badge>
            </Card>
          }
          code={[customBadge]}
        />
        <Divider dense className='mt-6' />
        <H4 className='mt-12'>
          <a href='#api' name='api'>
            API
          </a>
        </H4>
        <ApiCard entity='Badge' data={badgeApi(dark)} />
      </Card>
    )
  }
}

export default BadgeView
