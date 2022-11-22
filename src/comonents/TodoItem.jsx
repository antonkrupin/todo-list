import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import dayjs from 'dayjs';

import {
	toggleComplete,
	removeTodo,
	setTodoForChange
} from '../store/todoSlice';
import { changeTodoModalShow } from '../store/modalsSlice';
import Button from './Button';


const TodoItem = (props) => {
	const { todo, id } = props;

	const dispatch = useDispatch();

	const todoRef = useRef();

	const expired = dayjs(todo.date).diff(dayjs(), 'day');
	
	const handleRemoveTodo = (e) => {
		e.preventDefault();
		const id = todoRef.current.id;
		dispatch(removeTodo(id));
	}

	const handleChangeTodo = (e) => {
		e.preventDefault();
		const id = todoRef.current.id;
		dispatch(setTodoForChange({id, todo}));
		dispatch(changeTodoModalShow());
	}

	const handleToggleComplete = (e) => {
		e.preventDefault();
		const id = todoRef.current.id;
		const completed = todo.completed;
		dispatch(toggleComplete({id, completed}));
	}
	
  return (
    <div id={id} className="d-flex w-50 mx-auto m-3 shadow-sm justify-content-around align-items-center rounded border" ref={todoRef}>
      <div className="text-break p-3">
				{todo.completed && (
					<div>
						<h4 className="text-success">Завершено</h4>
						<hr />
					</div>
				)}
				{!todo.completed && expired < 0 && (
					<div>
						<h4 className="text-danger">Срок выполнения истек</h4>
						<hr />
					</div>
				)}
        <div className="m-2">
          <h4 className="text-primary">Заголовок</h4>
          <h6>{todo.title}</h6>
        </div>
				<hr />
        <div className="m-2">
          <h4 className="text-primary">Описание</h4>
          <h6>{todo.description}</h6>
        </div>
				<hr />
        <div className="m-2">
          <h4 className="text-primary">Дата завершения</h4>
          <h6>{dayjs(todo.date).format('DD-MM-YY')}</h6>
        </div>
				<hr />
				{todo.files && (
					<div className="m-2">
          	<h4 className="text-primary">Прикрепленные файлы</h4>
						{todo.files.map((file, index) => (
							<li key={index}>
								<a className="text-secondary" href={file[1]} target="_blank" rel="noreferrer">{file[0]}</a>
							</li>
						))}
					</div>
				)}
      </div>
      <div className="d-flex flex-column p-3">
				<Button buttonType={"EndTask"} onClick={(e) => handleToggleComplete(e)} completed={todo.completed} expired={expired}/>
				<Button buttonType={"ChangeTask"} onClick={(e) => handleChangeTodo(e)} completed={todo.completed} expired={expired}/>
				<Button buttonType={"DeleteTask"} onClick={(e) => handleRemoveTodo(e)} completed={todo.completed} expired={expired}/>
      </div>
    </div>
  )
};

export default TodoItem;
