import React from 'react'

import Icon from '@mdi/react'
import { mdiFolder, mdiCalendar } from '@mdi/js'

import { Card, H4, H6, Avatar, Divider, H5, Subtitle1 } from 'ui-neumorphism'

import {
  avatarApi,
  imgAvatar,
  sizeAvatar,
  textAvatar,
  iconAvatar,
  colorAvatar,
  varientAvatar,
  fallBackAvatar
} from '../docs/'

import DocCard from '../containers/DocCard.jsx'
import ApiCard from '../containers/ApiCard.jsx'

const url =
  'https://github.com/AKAspanion/ui-neumorphism/blob/master/example/src/pages/AvatarView.jsx'
class AvatarView extends React.Component {
  render() {
    const { dark } = this.props
    return (
      <Card flat dark={dark}>
        <H4>
          <a href='#component' name='component'>
            Avatar
          </a>
        </H4>
        <H6>
          Avatar is typically used to display circular user profile pictures or
          brands(with a logo or branded graphic).
        </H6>
        <DocCard
          url={url}
          className='mt-12'
          title={<H5>Image avatars</H5>}
          subtitle={
            <Subtitle1>
              Image avatars can be created by giving <code>src</code> prop.
            </Subtitle1>
          }
          content={
            <Card
              flat
              className='mt-6 d-flex align-center justify-center flex-wrap'
            >
              <Avatar
                className='ma-3'
                alt='Ankit Kumar Pandit'
                src='https://lh3.googleusercontent.com/a-/AAuE7mBL0Hh_wKgNlXtZks9XqIU3uv-j3COoKuYysLS_Svg'
              />
              <Avatar
                className='ma-3'
                alt='Ankit Kumar Pandit'
                src='https://lh3.googleusercontent.com/a-/AAuE7mCIyihYk1lPElmGoTqL4Pvb9PD3RT3x-EB2WUb6'
              />
            </Card>
          }
          code={[imgAvatar]}
        />
        <DocCard
          url={url}
          className='mt-12'
          title={<H5>Letter avatars</H5>}
          subtitle={
            <Subtitle1>
              Avatars containing simple characters can be created by passing a
              string as <code>children</code>.
            </Subtitle1>
          }
          content={
            <Card
              flat
              className='mt-6 d-flex align-center justify-center flex-wrap'
            >
              <Avatar className='ma-3'>A</Avatar>
              <Avatar className='ma-3' bgColor='var(--error)'>
                AK
              </Avatar>
            </Card>
          }
          code={[textAvatar]}
        />
        <DocCard
          url={url}
          className='mt-12'
          title={<H5>Icon avatars</H5>}
          subtitle={
            <Subtitle1>
              Icon avatars are created by passing an icon as&nbsp;
              <code>children</code>.
            </Subtitle1>
          }
          content={
            <Card
              flat
              className='mt-6 d-flex align-center justify-center flex-wrap'
            >
              <Avatar className='ma-3' bgColor='var(--warning)'>
                <Icon path={mdiFolder} size={1} />
              </Avatar>
              <Avatar className='ma-3' bgColor='var(--success)'>
                <Icon path={mdiCalendar} size={1} />
              </Avatar>
            </Card>
          }
          code={[iconAvatar]}
        />
        <DocCard
          url={url}
          className='mt-12'
          title={<H5>Colors</H5>}
          subtitle={
            <Subtitle1>
              To change the color use <code>color</code> prop. <br />
              To change the background color use the <code>bgColor</code> prop.
            </Subtitle1>
          }
          content={
            <Card
              flat
              className='mt-6 d-flex align-center justify-center flex-wrap'
            >
              <Avatar className='ma-3' color='blue' bgColor='var(--warning)'>
                A
              </Avatar>
              <Avatar className='ma-3' color='purple' bgColor='var(--success)'>
                AK
              </Avatar>
            </Card>
          }
          code={[colorAvatar]}
        />
        <DocCard
          url={url}
          className='mt-12'
          title={<H5>Types</H5>}
          subtitle={
            <Subtitle1>
              Avatar by default is circular type. <br /> To use square or
              rounded avatars, use the <code>square</code> and&nbsp;
              <code>rounded</code> prop respectively.
            </Subtitle1>
          }
          content={
            <Card
              flat
              className='mt-6 d-flex align-center justify-center flex-wrap'
            >
              <Avatar square className='ma-3' bgColor='var(--warning)'>
                <Icon path={mdiFolder} size={1} />
              </Avatar>
              <Avatar rounded className='ma-3' bgColor='var(--success)'>
                <Icon path={mdiCalendar} size={1} />
              </Avatar>
            </Card>
          }
          code={[varientAvatar]}
        />
        <DocCard
          url={url}
          className='mt-12'
          title={<H5>Sizes</H5>}
          subtitle={
            <Subtitle1>
              Use <code>size</code> prop to change avatar size. You can also
              give custom size numbers.
            </Subtitle1>
          }
          content={
            <Card flat>
              <Card
                flat
                className='mt-6 d-flex align-center justify-center flex-wrap'
              >
                <Avatar
                  size='small'
                  className='ma-3'
                  src='https://lh3.googleusercontent.com/a-/AAuE7mBL0Hh_wKgNlXtZks9XqIU3uv-j3COoKuYysLS_Svg'
                />
                <Avatar
                  size='medium'
                  className='ma-3'
                  src='https://lh3.googleusercontent.com/a-/AAuE7mBL0Hh_wKgNlXtZks9XqIU3uv-j3COoKuYysLS_Svg'
                />
                <Avatar
                  size='large'
                  className='ma-3'
                  src='https://lh3.googleusercontent.com/a-/AAuE7mBL0Hh_wKgNlXtZks9XqIU3uv-j3COoKuYysLS_Svg'
                />
              </Card>
              <Card
                flat
                className='d-flex align-center justify-center flex-wrap'
              >
                <Avatar
                  size={120}
                  className='ma-3'
                  src='https://lh3.googleusercontent.com/a-/AAuE7mBL0Hh_wKgNlXtZks9XqIU3uv-j3COoKuYysLS_Svg'
                />
              </Card>
            </Card>
          }
          code={[sizeAvatar]}
        />
        <DocCard
          url={url}
          className='mt-12'
          title={<H5>Fallback</H5>}
          subtitle={
            <Subtitle1>
              If there is an error loading the avatar image or no&nbsp;
              <code>src</code>, the component falls back to an alternative in
              the following order.
              <br />
              1. Any given children
              <br />
              2. Initials from <code>alt</code> text
              <br /> 3. Nothing
            </Subtitle1>
          }
          content={
            <Card
              flat
              className='mt-6 d-flex align-center justify-center flex-wrap'
            >
              <Avatar
                className='ma-3'
                src='broken.jpg'
                alt='Ankit Kumar Pandit'
              >
                AK
              </Avatar>
              <Avatar
                className='ma-3'
                src='broken.jpg'
                alt='Ankit Kumar Pandit'
              />
              <Avatar className='ma-3' src='broken.jpg' />
            </Card>
          }
          code={[fallBackAvatar]}
        />
        <Divider dense className='mt-6' />
        <H4 className='mt-12'>
          <a href='#api' name='api'>
            API
          </a>
        </H4>
        <ApiCard entity='Avatar' data={avatarApi()} />
      </Card>
    )
  }
}

export default AvatarView
