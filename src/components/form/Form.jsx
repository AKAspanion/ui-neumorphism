import React, { Children, cloneElement, createRef } from 'react'
import { getDOMNode } from '../../util'

class Form extends React.Component {
  domRef = createRef()

  get domNode() {
    return getDOMNode(this.domRef.current)
  }

  constructor(props) {
    super(props)
    this.state = {}
    console.log(props.children)
  }

  handleChange({ id, value }) {
    this.setState({ [id]: value })
    // console.log(e)
  }

  handleFormChange(e) {
    // console.log(e.target.id)
  }

  handleSubmit(e) {
    // console.log(e)
  }

  render() {
    const { children } = this.props
    const formChildren = Children.map(children, (child) => {
      return cloneElement(child, {
        ...child.props,
        onChange: (e) => this.handleChange(e)
      })
    })
    return (
      <form
        ref={this.domRef}
        onSubmit={this.handleSubmit}
        onChange={this.handleFormChange}
      >
        {formChildren}
      </form>
    )
  }
}

export default Form
