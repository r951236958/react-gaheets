import React, { Component } from 'react'

import Todos from './Todos'
import NewTodo from './NewTodo'

class Viewport extends Component {
  constructor() {
    super()
    this.styles = {
      margin: '1%',
      width: '100%'
    }
  }

  render() {
    return (
      <div style={this.styles}>
        <NewTodo />
        <Todos />
      </div>
    )
  }
}

export default Viewport
