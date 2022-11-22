import React from 'react';

import TodoItem from './TodoItem';
import ChangeTodoModal from './ChangeTodoModal';


const TodoList = (props) => {
	const { todos } = props;
	
  return (
    <div className="d-flex flex-column">
			{todos.length === 0 && (
				<div className="d-flex justify-content-center">
					<h3>Задач нет. Для добавления задач используйте форму выше.</h3>
				</div>
			)}
      {todos.map((todo) => (
				<TodoItem
				key={todo.key}
				todo={todo.val()}
				id={todo.key}
			/>
			))}
			<ChangeTodoModal />
    </div>
  )
};

export default TodoList;