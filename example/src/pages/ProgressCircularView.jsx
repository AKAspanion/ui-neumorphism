import React from 'react'

import Icon from '@mdi/react'
import { mdiNumeric10 } from '@mdi/js'

import { ProgressCircular, Card, H4, H5, H6, Subtitle1 } from 'ui-neumorphism'
import CodeBlock from '../containers/CodeBlock.jsx'
import { progressCircular } from '../assets/'

class ProgressCircularView extends React.Component {
  state = {
    val: 75
  }
  render() {
    const { dark } = this.props
    const labelDoc = `<ProgressCircular${dark?' dark':''} value={10} color='var(--primary)'>
  // Icon component is from '@mdi/react' and is not bundled with this library
  <Icon path={mdiNumeric10} size={0.9} />
</ProgressCircular>
<ProgressCircular${dark?' dark':''} value={20} color='var(--info)' label="40" />
<ProgressCircular${dark?' dark':''} value={40} color='var(--warning)'>60</ProgressCircular$>
<ProgressCircular${dark?' dark':''} value={80} color='var(--success)' label="80" />
<ProgressCircular${dark?' dark':''} value={100} color='var(--error)'>100</ProgressCircular$>`
    return (
      <Card flat dark={dark}>
        <H4>Progress Circular</H4>
        <H6>Progress Circular displays a circular progress bar.</H6>
        <br />
        <Subtitle1>
          ProgressCircular is used to convey data circularly to users. It also
          can be put into an indeterminate state to portray loading.
        </Subtitle1>
        <br />
        <H5 className='mt-6'>Determinate</H5>
        <Subtitle1 className='mb-1'>
          ProgressCircular can a have determinate state by giving&nbsp;
          <code>value</code>.
        </Subtitle1>
        <Subtitle1>
          By default, progress circular uses the secondary(
          <code>--g-text-color-secondary-light</code>&nbsp;or&nbsp;
          <code>--g-text-color-secondary-dark</code>) color.
        </Subtitle1>
        <br />
        <Card outlined className='pa-8'>
          <Card flat outlined={false} className='d-flex justify-center'>
            {[20, 40, 60, 80, 100].map((p) => (
              <ProgressCircular value={p} className='ma-8' />
            ))}
          </Card>
        </Card>
        <CodeBlock lang='html'>
          {progressCircular(
            dark,
            [0, 1, 2, 3, 4].map((i) => `value={${i * 20 + 20}}`),
            true
          )}
        </CodeBlock>
        <br />
        <br />
        <H5 className='mt-6'>Custom colors</H5>
        <Subtitle1>
          You can set custom colors using the <code>color</code> prop.
        </Subtitle1>
        <br />
        <Card outlined className='pa-8'>
          <Card flat outlined={false} className='d-flex justify-center'>
            {['primary', 'info', 'warning', 'success', 'error'].map(
              (color, i) => (
                <ProgressCircular
                  className='ma-8'
                  value={(i + 1) * 20}
                  color={`var(--${color})`}
                />
              )
            )}
          </Card>
        </Card>
        <CodeBlock lang='html'>
          {progressCircular(
            dark,
            [0, 1, 2, 3, 4].map((i) => `value={${i * 20 + 20}}`)
          )}
        </CodeBlock>
        <br />
        <br />
        <H5 className='mt-6'>Indeterminate</H5>
        <Subtitle1>
          Using the <code>indeterminate</code> prop, ProgressCircular
          continuously animates.
        </Subtitle1>
        <br />
        <Card outlined className='pa-8'>
          <Card flat outlined={false} className='d-flex justify-center'>
            {['primary', 'info', 'warning', 'success', 'error'].map(
              (color, i) => (
                <ProgressCircular
                  indeterminate
                  className='ma-8'
                  value={(i + 1) * 20}
                  color={`var(--${color})`}
                />
              )
            )}
          </Card>
        </Card>
        <CodeBlock lang='html'>
          {progressCircular(
            dark,
            [0, 1, 2, 3, 4].map((i) => `indeterminate`)
          )}
        </CodeBlock>
        <br />
        <br />
        <H5 className='mt-6'>Size & Width</H5>
        <Subtitle1>
          The <code>size</code> and <code>width</code> props allow you to easily
          alter the size and width of ProgressCircular.
        </Subtitle1>
        <br />
        <Card outlined className='pa-8'>
          <Card
            flat
            outlined={false}
            className='d-flex align-center justify-center'
          >
            {['primary', 'info', 'warning', 'success', 'error'].map(
              (color, i) => (
                <ProgressCircular
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
        </Card>
        <CodeBlock lang='html'>
          {progressCircular(
            dark,
            [0, 1, 2, 3, 4].map(
              (i) =>
                `indeterminate size={${i % 2 === 0 ? 64 : 36}} width={${
                  i % 2 === 0 ? 8 : 4
                }}`
            )
          )}
        </CodeBlock>
        <br />
        <br />
        <H5 className='mt-6'>Rotate</H5>
        <Subtitle1>
          Using the <code>rotate</code> prop, ProgressCircular's origin can me
          modified.
        </Subtitle1>
        <br />
        <Card outlined className='pa-8'>
          <Card flat outlined={false} className='d-flex justify-center'>
            {['primary', 'info', 'warning', 'success', 'error'].map(
              (color, i) => (
                <ProgressCircular
                  value={50}
                  className='ma-8'
                  rotate={i * 45}
                  color={`var(--${color})`}
                />
              )
            )}
          </Card>
        </Card>
        <CodeBlock lang='html'>
          {progressCircular(
            dark,
            [0, 1, 2, 3, 4].map((i) => `rotate={${i * 45}}`)
          )}
        </CodeBlock>
        <br />
        <br />
        <H5 className='mt-6'>Elevated</H5>
        <Subtitle1>
          Using the <code>elevated</code> prop, ProgressCircular can be given an
          alternate raised style.
        </Subtitle1>
        <br />
        <Card outlined className='pa-8'>
          <Card
            flat
            outlined={false}
            className='d-flex align-center justify-center'
          >
            {['primary', 'info', 'warning', 'success', 'error'].map(
              (color, i) => (
                <ProgressCircular
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
        </Card>
        <CodeBlock lang='html'>
          {progressCircular(
            dark,
            [0, 1, 2, 3, 4].map(
              (i) =>
                `elevated value={${(i + 1) * 20}} size={${
                  i % 2 === 0 ? 64 : 36
                }} width={${i % 2 === 0 ? 8 : 4}}`
            )
          )}
        </CodeBlock>
        <br />
        <br />
        <H5 className='mt-6'>Label</H5>
        <Subtitle1 className='mb-1'>
          To set data inside ProgressCircular use <code>label</code> prop for
          text or provide data as children. <br />
        </Subtitle1>
        <Subtitle1>
          Note: any given children will override label prop.
        </Subtitle1>
        <br />
        <Card outlined className='pa-8'>
          <Card flat outlined={false} className='d-flex justify-center'>
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
            <ProgressCircular value={100} className='ma-8' color='var(--error)'>
              100
            </ProgressCircular>
          </Card>
        </Card>
        <CodeBlock lang='html'>{labelDoc}</CodeBlock>
        <br />
        <br />
        <H5>API</H5>
        <Subtitle1>Coming soon..</Subtitle1>
      </Card>
    )
  }
}

export default ProgressCircularView
