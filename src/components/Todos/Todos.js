import React, { Component } from 'react'
import List from '@material-ui/core/List/List'
import ListItem from '@material-ui/core/ListItem'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import TodosStore from './TodosStore'

class Todos extends Component {
  constructor() {
    super()
    this.styles = {
      float: 'left',
      width: '50%',
      margin: '3%'
    }
    this.state = { todos: [] }
  }

  componentDidMount() {
    TodosStore.getAll().then((data) => {
      console.log('get all', data)
      this.setState({
        todos: data.todos
      })
    })

    TodosStore.subscribe((action) => {
      this.setState({
        todos: action.todos
      })
    })
  }

  handleClick(note) {
    TodosStore.remove(note)
  }

  create(todo) {
    return (
      <ListItem
        onMouseDown={this.handleClick.bind(null, todo)}
        key={todo.id}
        leftIcon={<ChevronRightIcon />}
        primaryText={todo.text}
        secondaryText={todo.timestamp}
      ></ListItem>
    )
  }

  render() {
    const todos = this.state.todos.map(this.create.bind(this))
    return <List style={this.styles}>{todos}</List>
  }
}

export default Todos
