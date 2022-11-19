import React from 'react';

import TodoItem from './TodoItem';

const TodoList = () => {
  return (
    <div className="d-flex flex-column">
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </div>
  )
};

export default TodoList;