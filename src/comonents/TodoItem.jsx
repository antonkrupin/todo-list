import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';

import 'datejs';

import { database } from '../firebase/firebase';
import { ref, update } from 'firebase/database';
import { toggleComplete, removeTodo, setTodoForChange } from '../store/todoSlice';
import { changeTodoModalShow } from '../store/modalsSlice';

import Button from './Button';

const TodoItem = (props) => {
  const { todo, id } = props;
	
	const todoRef = useRef();

	const dispatch = useDispatch();

	const expired = Date.compare(Date.parse(todo.date), Date.today())
	
	const deleteTodo = (e) => {
		e.preventDefault();
		const id = todoRef.current.id;
		dispatch(removeTodo(id));
	}

	const changeTodo = (e) => {
		e.preventDefault();
		const id = todoRef.current.id;
		/*update(ref(database, 'todos/' + id), {
			title: 'new title',
		});*/
		dispatch(setTodoForChange({id, todo}));
		dispatch(changeTodoModalShow());
	}

	const endTodo = (e) => {
		e.preventDefault();
		const id = todoRef.current.id;
		const completed = todo.completed;
		dispatch(toggleComplete({id, completed}));
	}
	
  return (
    <div id={id} className="d-flex w-50 mx-auto m-3 shadow-sm justify-content-around align-items-center rounded border" ref={todoRef}>
      <div>
				{todo.completed && (
					<div>
						<h3 className="text-success">Завершено</h3>
					</div>
				)}
				{!todo.completed && expired === -1 && (
					<div>
						<h3 className="text-danger">Срок выполнения истек</h3>
					</div>
				)}
        <div className="m-2">
          <h3>Заголовок</h3>
          <h5>{todo.title}</h5>
        </div>
        <div className="m-2">
          <h3>Описание</h3>
          <h5>{todo.description}</h5>
        </div>
        <div className="m-2">
          <h3>Дата завершения</h3>
          <h5>{todo.date}</h5>
        </div>
				{todo.files && (
					<div className="m-2">
          <h3>Прикрепленные файлы</h3>
          {todo.files.map((file, index) => (
            <li key={index}>{file}</li>
          ))}
					</div>
				)}
      </div>
      <div className="d-flex flex-column">
				<Button buttonType={"EndTask"} onClick={(e) => endTodo(e)} completed={todo.completed} expired={expired}/>
				<Button buttonType={"ChangeTask"} onClick={(e) => changeTodo(e)} completed={todo.completed} expired={expired}/>
				<Button buttonType={"DeleteTask"} onClick={(e) => deleteTodo(e)} completed={todo.completed} expired={expired}/>
      </div>
    </div>
  )
};

export default TodoItem;