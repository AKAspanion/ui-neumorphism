import React from 'react'

import { Card, H4, H6, Dialog, Button } from 'ui-neumorphism'

import { dialogApi } from '../docs/'

import DocCard from '../containers/DocCard.jsx'
import ApiCard from '../containers/ApiCard.jsx'

const url =
  'https://github.com/AKAspanion/ui-neumorphism/blob/master/example/src/pages/DialogView.jsx'
class DialogView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false
    }
  }

  render() {
    const { dark } = this.props
    return (
      <Card flat dark={dark}>
        <H4>
          <a href='#component' name='component'>
            Dialog
          </a>
        </H4>
        <H6>
          The Dialog component inform users about a specific task and may
          contain critical information, require decisions, or involve multiple
          tasks.
        </H6>
        <DocCard
          url={url}
          content={
            <Card flat className='d-flex align-center justify-center flex-wrap'>
              <Button onClick={() => this.setState({ visible: true })}>
                open
              </Button>
              <Dialog
                minWidth={300}
                visible={this.state.visible}
                onClose={() => this.setState({ visible: false })}
              >
                <Card className='pa-4 ma-4'>
                  dialog  <br /> <br />
                  <Button onClick={() => this.setState({ visible: false })}>
                    close
                  </Button>
                </Card>
              </Dialog>
            </Card>
          }
        />
        <H4 className='mt-12'>
          <a href='#api' name='api'>
            API
          </a>
        </H4>
        <ApiCard entity='Dialog' data={dialogApi(dark)} />
      </Card>
    )
  }
}

export default DialogView
