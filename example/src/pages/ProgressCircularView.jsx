import React from 'react'

import Icon from '@mdi/react'
import { mdiNumeric10 } from '@mdi/js'

import { ProgressCircular, Card, H4, H5, H6, Subtitle1 } from 'ui-neumorphism'
import { progressCircular, progressCircularLabel } from '../docs/'
import DocCard from '../containers/DocCard.jsx'
const url =
  'https://github.com/AKAspanion/ui-neumorphism/blob/master/example/src/pages/ProgressLinearView.jsx'

class ProgressCircularView extends React.Component {
  state = {
    val: 75
  }
  render() {
    const { dark } = this.props
    return (
      <Card flat dark={dark}>
        <H4>Progress Circular</H4>
        <H6>Progress Circular displays a circular progress bar.</H6>
        <Subtitle1 className='mt-3'>
          ProgressCircular is used to convey data circularly to users. It also
          can be put into an indeterminate state to portray loading.
        </Subtitle1>
        <DocCard
          url={url}
          className='mt-12'
          title={<H5>Determinate</H5>}
          subtitle={
            <Subtitle1>
              ProgressCircular can a have determinate state by giving&nbsp;
              <code>value</code>.<br />
              By default, progress circular uses the secondary(
              <code>--g-text-color-secondary-light</code>&nbsp;or&nbsp;
              <code>--g-text-color-secondary-dark</code>) color.
            </Subtitle1>
          }
          content={
            <Card
              flat
              className='mt-6 d-flex justify-center align-center flex-wrap'
            >
              {[20, 40, 60, 80, 100].map((p, i) => (
                <ProgressCircular key={i} value={p} className='ma-8' />
              ))}
            </Card>
          }
          code={[
            progressCircular,
            dark,
            [[0, 1, 2, 3, 4].map((i) => `value={${i * 20 + 20}}`), true]
          ]}
        />
        <DocCard
          url={url}
          className='mt-12'
          title={<H5>Custom colors</H5>}
          subtitle={
            <Subtitle1>
              You can set custom colors using the <code>color</code> prop.
            </Subtitle1>
          }
          content={
            <Card
              flat
              className='mt-6 d-flex justify-center align-center flex-wrap'
            >
              {['primary', 'info', 'warning', 'success', 'error'].map(
                (color, i) => (
                  <ProgressCircular
                    key={i}
                    className='ma-8'
                    value={(i + 1) * 20}
                    color={`var(--${color})`}
                  />
                )
              )}
            </Card>
          }
          code={[
            progressCircular,
            dark,
            [[0, 1, 2, 3, 4].map((i) => `value={${i * 20 + 20}}`)]
          ]}
        />
        <DocCard
          url={url}
          className='mt-12'
          title={<H5>Indeterminate</H5>}
          subtitle={
            <Subtitle1>
              Using the <code>indeterminate</code> prop, ProgressCircular
              continuously animates.
            </Subtitle1>
          }
          content={
            <Card
              flat
              className='mt-6 d-flex justify-center align-center flex-wrap'
            >
              {['primary', 'info', 'warning', 'success', 'error'].map(
                (color, i) => (
                  <ProgressCircular
                    key={i}
                    indeterminate
                    className='ma-8'
                    value={(i + 1) * 20}
                    color={`var(--${color})`}
                  />
                )
              )}
            </Card>
          }
          code={[
            progressCircular,
            dark,
            [[0, 1, 2, 3, 4].map((i) => `indeterminate`)]
          ]}
        />
        <DocCard
          url={url}
          className='mt-12'
          title={<H5>Size & Width</H5>}
          subtitle={
            <Subtitle1>
              The <code>size</code> and <code>width</code> props allow you to
              easily alter the size and width of ProgressCircular.
            </Subtitle1>
          }
          content={
            <Card
              flat
              className='mt-6 d-flex justify-center align-center flex-wrap'
            >
              {['primary', 'info', 'warning', 'success', 'error'].map(
                (color, i) => (
                  <ProgressCircular
                    key={i}
                    indeterminate
                    className='ma-8'
                    value={(i + 1) * 20}
                    color={`var(--${color})`}
                    width={i % 2 === 0 ? 8 : 4}
                    size={i % 2 === 0 ? 64 : 36}
                  />
                )
              )}
            </Card>
          }
          code={[
            progressCircular,
            dark,
            [
              [0, 1, 2, 3, 4].map(
                (i) =>
                  `indeterminate size={${i % 2 === 0 ? 64 : 36}} width={${
                    i % 2 === 0 ? 8 : 4
                  }}`
              )
            ]
          ]}
        />
        <DocCard
          url={url}
          className='mt-12'
          title={<H5>Rotate</H5>}
          subtitle={
            <Subtitle1>
              Using the <code>rotate</code> prop, ProgressCircular's origin can
              me modified.
            </Subtitle1>
          }
          content={
            <Card
              flat
              className='mt-6 d-flex justify-center align-center flex-wrap'
            >
              {['primary', 'info', 'warning', 'success', 'error'].map(
                (color, i) => (
                  <ProgressCircular
                    key={i}
                    value={50}
                    className='ma-8'
                    rotate={i * 45}
                    color={`var(--${color})`}
                  />
                )
              )}
            </Card>
          }
          code={[
            progressCircular,
            dark,
            [[0, 1, 2, 3, 4].map((i) => `rotate={${i * 45}}`)]
          ]}
        />
        <DocCard
          url={url}
          className='mt-12'
          title={<H5>Elevated</H5>}
          subtitle={
            <Subtitle1>
              Using the <code>elevated</code> prop, ProgressCircular can be
              given an alternate raised style.
            </Subtitle1>
          }
          content={
            <Card
              flat
              className='mt-6 d-flex justify-center align-center flex-wrap'
            >
              {['primary', 'info', 'warning', 'success', 'error'].map(
                (color, i) => (
                  <ProgressCircular
                    key={i}
                    elevated
                    className='ma-8'
                    value={(i + 1) * 20}
                    color={`var(--${color})`}
                    width={i % 2 === 0 ? 8 : 4}
                    size={i % 2 === 0 ? 64 : 36}
                  />
                )
              )}
            </Card>
          }
          code={[
            progressCircular,
            dark,
            [
              [0, 1, 2, 3, 4].map(
                (i) =>
                  `elevated value={${(i + 1) * 20}} size={${
                    i % 2 === 0 ? 64 : 36
                  }} width={${i % 2 === 0 ? 8 : 4}}`
              )
            ]
          ]}
        />
        <DocCard
          url={url}
          className='mt-12'
          title={<H5>Label</H5>}
          subtitle={
            <Subtitle1>
              To set data inside ProgressCircular use <code>label</code> prop
              for text or provide data as children.
            </Subtitle1>
          }
          content={
            <Card
              flat
              className='mt-6 d-flex justify-center align-center flex-wrap'
            >
              <ProgressCircular
                value={10}
                className='ma-8'
                color='var(--primary)'
              >
                <Icon path={mdiNumeric10} size={0.9} />
              </ProgressCircular>
              <ProgressCircular
                value={20}
                className='ma-8'
                color='var(--info)'
                label='20'
              />
              <ProgressCircular
                value={40}
                className='ma-8'
                color='var(--warning)'
              >
                40
              </ProgressCircular>
              <ProgressCircular
                value={80}
                className='ma-8'
                color='var(--success)'
                label='80'
              />
              <ProgressCircular
                value={100}
                className='ma-8'
                color='var(--error)'
              >
                100
              </ProgressCircular>
            </Card>
          }
          code={[progressCircularLabel, dark]}
        />
        <br />
        <br />
        <H5>API</H5>
        <Subtitle1>Coming soon..</Subtitle1>
      </Card>
    )
  }
}

export default ProgressCircularView
