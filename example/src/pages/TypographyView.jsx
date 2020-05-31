import React from 'react'

import {
  Card,
  Subtitle2,
  Subtitle1,
  Overline,
  Caption,
  Body2,
  Body1,
  H6,
  H5,
  H4,
  H3,
  H2,
  H1
} from 'ui-neumorphism'
import { toggle, toggleLabel } from '../docs'
import DocCard from '../containers/DocCard.jsx'
const url =
  'https://github.com/AKAspanion/ui-neumorphism/blob/master/example/src/pages/CheckboxView.jsx'
class TypographyView extends React.Component {
  render() {
    const { dark: darkTheme } = this.props
    return (
      <Card flat dark={darkTheme}>
        <H4>Typography</H4>
        <H6>
          Use typography to present your design and content as clearly and
          efficiently as possible.
        </H6>
        <br />
        <Subtitle1>
          A typographic scale has a limited set of type sizes that work well
          together along with the layout grid.
        </Subtitle1>
        <br />
        <br />
        <H5>Font</H5>
        <Subtitle1>
          UI-Neumorphism uses Roboto Font as it's primary font face.
          <br />
          You need to load this font in your application, it is not loaded
          automatically.
        </Subtitle1>
        <br />
        <br />
        <H5>Components</H5>
        <Subtitle1>All the typography Components.</Subtitle1>
        <br />
        <Card outlined dark={darkTheme}>
          <div
            style={{
              padding: '64px'
            }}
          >
            <Card flat dark={darkTheme}>
              <H1>Heading 1</H1>
              <br />
              <H2>Heading 2</H2>
              <br />
              <H3>Heading 3</H3>
              <br />
              <H4>Heading 4</H4>
              <br />
              <H5>Heading 5</H5>
              <br />
              <H6>Heading 6</H6>
              <br />
              <Body1>Body 1</Body1>
              <br />
              <Body2>Body 2</Body2>
              <br />
              <Subtitle1>Subtitle 1</Subtitle1>
              <br />
              <Subtitle2>Subtitle 2</Subtitle2>
              <br />
              <Caption>Caption</Caption>
              <br />
              <Overline>Overline</Overline>
            </Card>
          </div>
        </Card>
      </Card>
    )
  }
}

export default TypographyView
