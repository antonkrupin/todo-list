import React from 'react';
import { useSelector } from 'react-redux';

import TodoItem from './TodoItem';

const TodoList = () => {
  const todos = useSelector((state) => state.todos.todos);

  return (
    <div className="d-flex flex-column">
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          todo={todo}
        />
      ))}
    </div>
  )
};

export default TodoList;