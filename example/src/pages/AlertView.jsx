import React from 'react'

import Icon from '@mdi/react'
import {
  mdiAlert,
  mdiCloseCircle,
  mdiCheckCircle,
  mdiInformationOutline,
  mdiInformationVariant
} from '@mdi/js'

import { Card, H4, H6, Alert, Button, H5, Subtitle1 } from 'ui-neumorphism'

import {
  alertApi,
  bulkAlert,
  iconAlert,
  closeAlert,
  colorAlert,
  denseAlert,
  borderAlert,
  simpleAlert
} from '../docs/'

import DocCard from '../containers/DocCard.jsx'
import ApiCard from '../containers/ApiCard.jsx'

const url =
  'https://github.com/AKAspanion/ui-neumorphism/blob/master/example/src/pages/AlertView.jsx'
class AlertView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      visible1: true,
      visible2: true
    }
  }

  render() {
    const { dark } = this.props
    return (
      <Card flat dark={dark}>
        <H4>
          <a href='#component' name='component'>
            Alert
          </a>
        </H4>
        <H6>
          The Alert component is used to convey contextual feedback to the user.
        </H6>
        <DocCard
          className='mt-12'
          url={url + '#L62-L73'}
          title={<H5>Type</H5>}
          subtitle={
            <Subtitle1>
              The <code>type</code> prop provides 4 default alert styles:
              success, info, warning, and error.
              <br />
              Each of these styles provide a default color, defined as css
              variables
              <span style={{ color: 'var(--success)' }}> --success</span>,
              <span style={{ color: 'var(--info)' }}> --info</span>,
              <span style={{ color: 'var(--warning)' }}> --warning</span>, and
              <span style={{ color: 'var(--error)' }}> --error </span>
              respectively.
            </Subtitle1>
          }
          content={
            <Card flat className='mt-6'>
              <Alert className='mb-6' type='success'>
                I'm a success alert.
              </Alert>
              <Alert className='mb-6' type='info'>
                I'm an info alert.
              </Alert>
              <Alert className='mb-6' type='warning'>
                I'm a warning alert.
              </Alert>
              <Alert className='mb-6' type='error'>
                I'm an error alert.
              </Alert>
            </Card>
          }
          code={[simpleAlert, dark]}
        />
        <DocCard
          url={url}
          className='mt-12'
          title={<H5>Inset</H5>}
          subtitle={
            <Subtitle1>
              The <code>inset</code> prop reverses the elevation of the alert.
            </Subtitle1>
          }
          content={
            <Card flat className='mt-6'>
              <Alert className='mb-6' type='success' inset>
                I'm a success alert.
              </Alert>
              <Alert className='mb-6' type='info' inset>
                I'm an info alert.
              </Alert>
              <Alert className='mb-6' type='warning' inset>
                I'm a warning alert.
              </Alert>
              <Alert className='mb-6' type='error' inset>
                I'm an error alert.
              </Alert>
            </Card>
          }
          code={[simpleAlert, dark, ['inset']]}
        />
        <DocCard
          url={url}
          className='mt-12'
          title={<H5>Styles</H5>}
          subtitle={
            <Subtitle1>
              The <code>flat</code> prop removes elevation.
              <br />
              The <code>bordered</code> prop adds a light border.
              <br />
              The <code>rounded</code> prop adds a large border radius.
              <br />
              The <code>outlined</code> prop adds border and removes elevation.
            </Subtitle1>
          }
          content={
            <Card flat className='mt-6'>
              <Alert className='mb-6' type='success' flat>
                I'm a success alert.
              </Alert>
              <Alert className='mb-6' type='info' bordered>
                I'm an info alert.
              </Alert>
              <Alert className='mb-6' type='warning' rounded>
                I'm a warning alert.
              </Alert>
              <Alert className='mb-6' type='error' outlined>
                I'm an error alert.
              </Alert>
            </Card>
          }
          code={[bulkAlert, dark]}
        />
        <DocCard
          url={url}
          className='mt-12'
          title={<H5>Color</H5>}
          subtitle={
            <Subtitle1>
              The <code>color</code> prop can be used to specify the color of
              the alert.
            </Subtitle1>
          }
          content={
            <Card flat className='mt-6'>
              <Alert className='mb-6' color='#6200EA'>
                I'm an alert with #6200EA color.
              </Alert>
              <Alert className='mb-6' color='magenta'>
                I'm an alert with magenta color.
              </Alert>
            </Card>
          }
          code={[colorAlert, dark]}
        />
        <DocCard
          url={url}
          className='mt-12'
          title={<H5>Border</H5>}
          subtitle={
            <Subtitle1>
              The <code>border</code> prop adds a thick border to one of the 4
              sides of the alert. Combine with <code>type</code> or&nbsp;
              <code>color</code> to change appearance.
            </Subtitle1>
          }
          content={
            <Card flat className='mt-6'>
              <Alert className='mb-6' type='success' border='top'>
                I'm a success alert.
              </Alert>
              <Alert className='mb-6' type='info' border='left'>
                I'm an info alert.
              </Alert>
              <Alert className='mb-6' color='magenta' border='right'>
                I'm a magenta alert.
              </Alert>
              <Alert className='mb-6' type='error' border='bottom'>
                I'm an error alert.
              </Alert>
            </Card>
          }
          code={[borderAlert, dark]}
        />
        <DocCard
          url={url}
          className='mt-12'
          title={<H5>Dense</H5>}
          subtitle={
            <Subtitle1>
              The <code>dense</code> prop decreases the height of the alert.
            </Subtitle1>
          }
          content={
            <Card flat className='mt-6'>
              <Alert className='mb-6' type='success' dense>
                I'm a success alert.
              </Alert>
              <Alert className='mb-6' border='left' type='info' dense>
                I'm an info alert.
              </Alert>
              <Alert className='mb-6' color='magenta' dense inset>
                I'm a magenta alert.
              </Alert>
              <Alert className='mb-6' type='error' dense outlined>
                I'm an error alert.
              </Alert>
            </Card>
          }
          code={[denseAlert, dark]}
        />
        <DocCard
          url={url}
          className='mt-12'
          title={<H5>Icon</H5>}
          subtitle={
            <Subtitle1>
              You can give custom <code>icon</code>, which appears in the
              beginning of the alert.
            </Subtitle1>
          }
          content={
            <Card flat className='mt-6'>
              <Alert
                className='mb-6'
                type='success'
                icon={<Icon path={mdiCheckCircle} size={1} />}
              >
                I'm a success alert.
              </Alert>
              <Alert
                className='mb-6'
                type='info'
                icon={<Icon path={mdiInformationVariant} size={1} />}
              >
                I'm an info alert.
              </Alert>
              <Alert
                className='mb-6'
                type='warning'
                icon={<Icon path={mdiInformationOutline} size={1} />}
              >
                I'm a warning alert.
              </Alert>
              <Alert
                className='mb-6'
                type='error'
                icon={<Icon path={mdiAlert} size={1} />}
              >
                I'm an error alert.
              </Alert>
            </Card>
          }
          code={[iconAlert, dark]}
        />
        <DocCard
          url={url}
          className='mt-12'
          title={<H5>Closable</H5>}
          subtitle={
            <Subtitle1>
              The <code>closable</code> prop adds a close button to the end of
              the alert. Clicking it calls the <code>onClose</code> callback.
              <br />
              Using the <code>visible</code> prop and onClose callback, you can
              show/hide alert at will.
              <br />
              Use <code>closeIcon</code> to give a custom close icon to the
              alert.
            </Subtitle1>
          }
          content={
            <Card flat className='mt-6 d-flex flex-column align-center'>
              <Alert
                className='mb-6'
                rounded
                closable
                type='error'
                border='left'
                visible={this.state.visible1}
                icon={<Icon path={mdiAlert} size={1} />}
                onClose={() => this.setState({ visible1: false })}
              >
                Click on close button to hide me.
              </Alert>
              {this.state.visible1 ? null : (
                <Card flat className='mb-6'>
                  <Button onClick={() => this.setState({ visible1: true })}>
                    show
                  </Button>
                </Card>
              )}
              <Alert
                className='mb-6'
                closable
                border='left'
                type='success'
                visible={this.state.visible2}
                icon={<Icon path={mdiCheckCircle} size={1} />}
                closeIcon={<Icon path={mdiCloseCircle} size={1} />}
                onClose={() => this.setState({ visible2: false })}
              >
                I have custom close Icon.
              </Alert>
              {this.state.visible2 ? null : (
                <Card flat className='mb-6'>
                  <Button onClick={() => this.setState({ visible2: true })}>
                    show
                  </Button>
                </Card>
              )}
            </Card>
          }
          code={[closeAlert, dark]}
        />
        <H4 className='mt-12'>
          <a href='#api' name='api'>
            API
          </a>
        </H4>
        <ApiCard entity='Alert' data={alertApi(dark)} />
      </Card>
    )
  }
}

export default AlertView
