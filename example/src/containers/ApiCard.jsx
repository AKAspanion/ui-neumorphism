import React from 'react'

import Icon from '@mdi/react'
import { mdiMagnify } from '@mdi/js'

import {
  H5,
  H6,
  Card,
  Table,
  TextField,
  withWindowResize
} from 'ui-neumorphism'
import CodeBlock from '../containers/CodeBlock.jsx'

class ApiCard extends React.Component {
  static displayName = 'NuApiCard'

  constructor(props) {
    super(props)
    this.state = {
      search: ''
    }
  }

  handleSearch({ value }) {
    this.setState({ search: value.toLowerCase() })
  }

  get sortedItems() {
    return this.props.data.sort((a, b) =>
      a.title === b.title ? 0 : +(a.title > b.title) || -1
    )
  }

  get items() {
    return this.sortedItems.filter((e) =>
      e.title.toLowerCase().includes(this.state.search)
    )
  }

  render() {
    const headers = [
      { text: 'Name', value: 'name', verticalAlign: 'top' },
      { text: 'Type', value: 'type', verticalAlign: 'top' },
      { text: 'Default', value: 'initial', verticalAlign: 'top' },
      { text: 'Description', value: 'description', verticalAlign: 'top' }
    ]
    const searchProps = {}
    const { dark, size, style, entity, className } = this.props
    const searchField = (
      <TextField
        dark={dark}
        noValidation
        label='Search'
        onChange={(e) => this.handleSearch(e)}
        append={<Icon path={mdiMagnify} size={1} />}
      />
    )
    if (size === 'sm') {
      searchProps.description = searchField
      searchProps.actions = null
    } else {
      searchProps.actions = searchField
      searchProps.description = null
    }
    return (
      <Card flat dark={dark} style={style} className={`mb-3 ${className}`}>
        <H6>The API documentation of the {entity} component.</H6>
        <H5 className='mt-4 mb-3'>Import</H5>
        <CodeBlock lang='jsx' noCollapse>
          {`import { ${entity} } from 'ui-neumorphism'`}
        </CodeBlock>
        <H5 className='mt-6 mb-3'>Props</H5>
        <Table outlined headers={headers} items={this.items} {...searchProps} />
      </Card>
    )
  }
}

export default withWindowResize(ApiCard)
