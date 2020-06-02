import React from 'react'

import { Card, H5, H6, Table } from 'ui-neumorphism'
import CodeBlock from '../containers/CodeBlock.jsx'

class ApiCard extends React.Component {
  static displayName = 'NuApiCard'
  render() {
    const headers = [
      { text: 'Name', value: 'name', verticalAlign: 'top' },
      { text: 'Type', value: 'type', verticalAlign: 'top' },
      { text: 'Default', value: 'initial', verticalAlign: 'top' },
      { text: 'Description', value: 'description', verticalAlign: 'top' }
    ]
    const { dark, style, entity, data, className } = this.props
    return (
      <Card flat dark={dark} style={style} className={className}>
        <H6>The API documentation of the {entity} component.</H6>
        <H5 className='mt-4 mb-3'>Import</H5>
        <CodeBlock lang='jsx' noCollapse>
          {`import { ${entity} } from 'ui-neumorphism'`}
        </CodeBlock>
        <H5 className='mt-6 mb-3'>Props</H5>
        <Table outlined headers={headers} items={data} />
      </Card>
    )
  }
}

export default ApiCard
