import React from 'react'

import { Card, TextField } from 'ui-neumorphism'

class TextFieldView extends React.Component {
  onChange(e) {
    console.log(e)
  }
  render() {
    const { dark } = this.props
    return (
      <Card flat dark={dark}>
        <TextField
          label='Text field 1'
          className='my-3'
          rules={[
            (v) => v !== '' || 'Cant be empty',
            (v) => v.trim() !== '' || 'Cant be only white space'
          ]}
        ></TextField>
        <TextField
          disabled
          className='my-3'
          label='Text field 2'
        ></TextField>
        <TextField label='Text field 3' rounded className='my-3'></TextField>
        <TextField
          label='Text field 4'
          className='my-3'
          value='abc'
          readonly
        ></TextField>
        <TextField
          label='Text field 5'
          className='my-3'
          value='abc'
          dense
        ></TextField>
        <TextField
          label='Text field 5'
          className='my-3'
          value='abc'
          dense
          rounded
          onChange={this.onChange.bind(this)}
        ></TextField>
        <TextField
          label='Text field 5'
          className='my-3'
          value='abc'
          dense
          rounded
          outlined
          onChange={this.onChange.bind(this)}
        ></TextField>
      </Card>
    )
  }
}

export default TextFieldView
