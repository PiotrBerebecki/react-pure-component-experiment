import React, { Component } from 'react';

import initialTodos from './database';
import Todo from './Todo';

class Todos extends Component {
  state = {
    todos: initialTodos,
  };

  toggleTodo = e => {
    const targetId = parseInt(e.target.id, 10);
    const updatedTodos = this.state.todos.map(todo => {
      if (todo.id === targetId) {
        return {
          ...todo,
          isCompleted: !todo.isCompleted,
        };
      }
      return todo;
    });

    this.setState({
      todos: updatedTodos,
    });
  };

  render() {
    const renderTodos = this.state.todos.map(todo => (
      <Todo key={todo.id} {...todo} handleChange={this.toggleTodo} />
    ));

    return (
      <div>
        {renderTodos}
      </div>
    );
  }
}

export default Todos;
