import React from 'react'

import { ProgressLinear, Card, H4, H5, H6, Subtitle1 } from 'ui-neumorphism'

import { progressLinear } from '../docs/'
import DocCard from '../containers/DocCard.jsx'
const url =
  'https://github.com/AKAspanion/ui-neumorphism/blob/master/example/src/pages/ProgressLinearView.jsx'

class ProgressLinearView extends React.Component {
  render() {
    const { dark } = this.props
    return (
      <Card flat dark={dark}>
        <H4>Progress Linear</H4>
        <H6>Progress Linear displays a horizontal progress bar.</H6>
        <Subtitle1 className='mt-3'>
          The component is used to convey data visually to users. They can also
          represent an indeterminate amount, such as loading or processing.
        </Subtitle1>
        <DocCard
          url={url}
          className='mt-12'
          title={<H5>Determinate</H5>}
          subtitle={
            <Subtitle1>
              ProgressLinear can a have determinate state by giving&nbsp;
              <code>value</code>.
              <br />
              By default, progress linear uses the secondary(
              <code>--g-text-color-secondary-light</code>&nbsp;or&nbsp;
              <code>--g-text-color-secondary-dark</code>) color.
            </Subtitle1>
          }
          content={
            <Card flat className='fill-width mt-6 px-12'>
              <ProgressLinear value={40} />
              <br />
              <ProgressLinear value={60} />
              <br />
              <ProgressLinear value={80} />
            </Card>
          }
          code={[
            progressLinear,
            dark,
            [[0, 1, 2].map((i) => `value={${i * 20 + 40}}`), true]
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
            <Card flat className='fill-width mt-6 px-12'>
              <ProgressLinear value={40} color='var(--primary)' />
              <br />
              <ProgressLinear value={40} color='var(--info)' />
              <br />
              <ProgressLinear value={40} color='var(--success)' />
            </Card>
          }
          code={[progressLinear, dark, [[0, 1, 2].map((c) => `value={40}`)]]}
        />
        <DocCard
          url={url}
          className='mt-12'
          title={<H5>Indeterminate</H5>}
          subtitle={
            <Subtitle1>
              Using the <code>indeterminate</code> prop, ProgressLinear
              continuously animates.
            </Subtitle1>
          }
          content={
            <Card flat className='fill-width mt-6 px-12'>
              <ProgressLinear indeterminate color='var(--primary)' />
              <br />
              <ProgressLinear indeterminate color='var(--info)' />
              <br />
              <ProgressLinear indeterminate color='var(--success)' />
            </Card>
          }
          code={[progressLinear, dark, [[0, 1, 2].map((p) => 'indeterminate')]]}
        />
        <DocCard
          url={url}
          className='mt-12'
          title={<H5>Height</H5>}
          subtitle={
            <Subtitle1>
              You can adjust the height of ProgressLinear using{' '}
              <code>height</code> prop.
            </Subtitle1>
          }
          content={
            <Card flat className='fill-width mt-6 px-12'>
              <ProgressLinear height={10} value={40} color='var(--primary)' />
              <br />
              <ProgressLinear height={20} value={60} color='var(--info)' />
              <br />
              <ProgressLinear height={30} value={80} color='var(--success)' />
            </Card>
          }
          code={[
            progressLinear,
            dark,
            [
              [0, 1, 2].map(
                (i) => `height={${i * 10 + 10}} value={${i * 20 + 40}}`
              )
            ]
          ]}
        />
        <DocCard
          url={url}
          className='mt-12'
          title={<H5>Striped</H5>}
          subtitle={
            <Subtitle1>
              Using the <code>striped</code> prop, ProgressLinear gets striped
              style.
            </Subtitle1>
          }
          content={
            <Card flat className='fill-width mt-6 px-12'>
              <ProgressLinear striped value={40} color='var(--primary)' />
              <br />
              <ProgressLinear striped value={60} color='var(--info)' />
              <br />
              <ProgressLinear striped value={80} color='var(--success)' />
            </Card>
          }
          code={[
            progressLinear,
            dark,
            [[0, 1, 2].map((i) => `striped value={${i * 20 + 40}}`)]
          ]}
        />
        <DocCard
          url={url}
          className='mt-12'
          title={<H5>Bordered</H5>}
          subtitle={
            <Subtitle1>
              ProgressLinear can have a border around it by using the{' '}
              <code>bordered</code> prop.
            </Subtitle1>
          }
          content={
            <Card flat className='fill-width mt-6 px-12'>
              <ProgressLinear bordered value={40} color='var(--primary)' />
              <br />
              <ProgressLinear bordered value={60} color='var(--info)' />
              <br />
              <ProgressLinear bordered value={80} color='var(--success)' />
            </Card>
          }
          code={[
            progressLinear,
            dark,
            [[0, 1, 2].map((i) => `bordered value={40}`)]
          ]}
        />
        <DocCard
          url={url}
          className='mt-12'
          title={<H5>Fill height</H5>}
          subtitle={
            <Subtitle1>
              Using the <code>fillHeight</code> prop, ProgressLinear fills the
              given height.
            </Subtitle1>
          }
          content={
            <Card flat className='fill-width mt-6 px-12'>
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
          }
          code={[
            progressLinear,
            dark,
            [[1, 2, 3].map((i) => `fillHeight height={${4 * i}} value={40}`)]
          ]}
        />
        <br />
        <br />
        <H5>API</H5>
        <Subtitle1>Coming soon..</Subtitle1>
      </Card>
    )
  }
}

export default ProgressLinearView
