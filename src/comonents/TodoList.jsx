import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTodos } from '../store/todoSlice';

import TodoItem from './TodoItem';

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);
  
  return (
    <div className="d-flex flex-column">
      {/*todos.map((todo, index) => (
        <TodoItem
          key={index}
          todo={todo}
        />
      ))*/}
    </div>
  )
};

export default TodoList;