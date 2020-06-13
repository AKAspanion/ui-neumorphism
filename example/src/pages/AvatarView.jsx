import React from 'react'

import { Card, H4, H6, Avatar } from 'ui-neumorphism'

// import { toggle, toggleLabel, switchApi } from '../docs/'

import DocCard from '../containers/DocCard.jsx'
// import ApiCard from '../containers/ApiCard.jsx'

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
          Avatars focus on a subject, using a simple background. They can
          represent a user or a brand (with a logo or branded graphic).
        </H6>
        <DocCard
          url={url}
          content={
            <Card flat className='d-flex align-center justify-center flex-wrap'>
              <Avatar size='large' src='https://lh3.googleusercontent.com/a-/AAuE7mBL0Hh_wKgNlXtZks9XqIU3uv-j3COoKuYysLS_Svg'>
                AB
              </Avatar>
              <Avatar square alt='AB'>
              </Avatar>
              <Avatar rounded size='large' alt='AB'>
              </Avatar>
              <Avatar rounded size='large' alt='AB' bgColor='red'>
              </Avatar>
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

export default AvatarView
