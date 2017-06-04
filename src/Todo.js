import React, { PureComponent } from 'react';

class Todo extends PureComponent {
  render() {
    const { id, text, isCompleted, handleChange } = this.props;
    console.log('rendering', text);
    return (
      <div>
        <input
          type="checkbox"
          checked={isCompleted}
          onChange={handleChange}
          id={id}
        />
        {text}
      </div>
    );
  }
}

export default Todo;
