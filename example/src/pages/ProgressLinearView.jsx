import React from 'react'

import { ProgressLinear, Card, H4, H5, H6, Subtitle1 } from 'ui-neumorphism'
import CodeBlock from '../containers/CodeBlock.jsx'
import { progressLinear } from '../assets/'

class ProgressLinearView extends React.Component {
  render() {
    const { dark } = this.props
    return (
      <Card flat dark={dark}>
        <H4>Progress Linear</H4>
        <H6>Progress Linear displays a horizontal progress bar.</H6>
        <br />
        <Subtitle1>
          The component is used to convey data visually to users. They can also
          represent an indeterminate amount, such as loading or processing.
        </Subtitle1>
        <br />
        <H5 style={{ marginTop: '24px' }}>Determinate</H5>
        <Subtitle1>
          ProgressLinear can a have determinate state by giving&nbsp;
          <code>value</code>.
        </Subtitle1>
        <br />
        <Card outlined style={{ padding: '32px' }}>
          <ProgressLinear value={40} color='var(--primary)' />
          <br />
          <ProgressLinear value={40} color='var(--info)' />
          <br />
          <ProgressLinear value={40} color='var(--success)' />
        </Card>
        <CodeBlock lang='html'>
          {progressLinear(
            dark,
            [0, 1, 2].map((p) => 'value={40}')
          )}
        </CodeBlock>
        <br />
        <br />
        <H5 style={{ marginTop: '24px' }}>Indeterminate</H5>
        <Subtitle1>
          Using the <code>indeterminate</code> prop, ProgressLinear continuously
          animates.
        </Subtitle1>
        <br />
        <Card outlined style={{ padding: '32px' }}>
          <ProgressLinear indeterminate color='var(--primary)' />
          <br />
          <ProgressLinear indeterminate color='var(--info)' />
          <br />
          <ProgressLinear indeterminate color='var(--success)' />
        </Card>
        <CodeBlock lang='html'>
          {progressLinear(
            dark,
            [0, 1, 2].map((p) => 'indeterminate')
          )}
        </CodeBlock>
        <br />
        <br />
        <H5 style={{ marginTop: '24px' }}>Height</H5>
        <Subtitle1>
          You can adjust the height of ProgressLinear using <code>height</code>{' '}
          prop.
        </Subtitle1>
        <br />
        <Card outlined style={{ padding: '32px' }}>
          <ProgressLinear height={10} value={40} color='var(--primary)' />
          <br />
          <ProgressLinear height={20} value={60} color='var(--info)' />
          <br />
          <ProgressLinear height={30} value={80} color='var(--success)' />
        </Card>
        <CodeBlock lang='html'>
          {progressLinear(
            dark,
            [0, 1, 2].map(
              (i) => `height={${i * 10 + 10}} value={${i * 20 + 40}}`
            )
          )}
        </CodeBlock>
        <br />
        <br />
        <H5 style={{ marginTop: '24px' }}>Striped</H5>
        <Subtitle1>
          Using the <code>striped</code> prop, ProgressLinear gets striped
          style.
        </Subtitle1>
        <br />
        <Card outlined style={{ padding: '32px' }}>
          <ProgressLinear striped value={40} color='var(--primary)' />
          <br />
          <ProgressLinear striped value={60} color='var(--info)' />
          <br />
          <ProgressLinear striped value={80} color='var(--success)' />
        </Card>
        <CodeBlock lang='html'>
          {progressLinear(
            dark,
            [0, 1, 2].map((i) => `striped value={${i * 20 + 40}}`)
          )}
        </CodeBlock>
        <br />
        <br />
        <H5 style={{ marginTop: '24px' }}>Bordered</H5>
        <Subtitle1>
          ProgressLinear can have a border around it by using the{' '}
          <code>bordered</code>
          &nbsp;prop.
        </Subtitle1>
        <br />
        <Card outlined style={{ padding: '32px' }}>
          <ProgressLinear bordered value={40} color='var(--primary)' />
          <br />
          <ProgressLinear bordered value={40} color='var(--info)' />
          <br />
          <ProgressLinear bordered value={40} color='var(--success)' />
        </Card>
        <CodeBlock lang='html'>
          {progressLinear(
            dark,
            [0, 1, 2].map((i) => `bordered value={40}`)
          )}
        </CodeBlock>
        <br />
        <br />
        <H5 style={{ marginTop: '24px' }}>Fill height</H5>
        <Subtitle1>
          Using the <code>fillHeight</code> prop, ProgressLinear fills the given
          height.
        </Subtitle1>
        <br />
        <Card outlined style={{ padding: '32px' }}>
          <ProgressLinear
            fillHeight
            height={4}
            value={40}
            color='var(--primary)'
          />
          <br />
          <ProgressLinear
            fillHeight
            height={8}
            value={40}
            color='var(--info)'
          />
          <br />
          <ProgressLinear
            fillHeight
            height={12}
            value={40}
            color='var(--success)'
          />
        </Card>
        <CodeBlock lang='html'>
          {progressLinear(
            dark,
            [1, 2, 3].map((i) => `fillHeight height={${4 * i}} value={40}`)
          )}
        </CodeBlock>
        <br />
        <br />
        <H5 style={{ marginTop: '24px' }}>Custom colors</H5>
        <Subtitle1>
          You can set custom colors using the <code>color</code> prop.
        </Subtitle1>
        <br />
        <Card outlined style={{ padding: '32px' }}>
          <ProgressLinear value={40} color='red' />
          <br />
          <ProgressLinear value={40} color='green' />
          <br />
          <ProgressLinear value={40} color='blue' />
        </Card>
        <CodeBlock lang='html'>
          {progressLinear(
            dark,
            ['red', 'green', 'blue'].map((c) => `value={40} color='${c}'`),
            true
          )}
        </CodeBlock>
        <br />
        <br />
        <H5>API</H5>
        <Subtitle1>Coming soon..</Subtitle1>
      </Card>
    )
  }
}

export default ProgressLinearView
