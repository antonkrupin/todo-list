import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';

import dayjs from 'dayjs';
import 'datejs';

import {
	toggleComplete,
	removeTodo,
	setTodoForChange
} from '../store/todoSlice';

import { changeTodoModalShow } from '../store/modalsSlice';
import Button from './Button';


const TodoItem = (props) => {
	const dispatch = useDispatch();

	const todoRef = useRef();

	const { todo, id } = props;

	//const expired = dayjs(todo.date).diff(dayjs(), 'day');
	const expired = Date.compare(Date.parse(todo.date), Date.today())
	/*const today = dayjs().format('DD-MM-YY');
	const test = dayjs(todo.date);
	console.log(today.diff(test));*/

	/*const date1 = dayjs();
	const date2 = dayjs(todo.date);
	console.log(date1);
	console.log(date2);
	console.log(dayjs(todo.date).diff(dayjs(), 'day'));*/
	//format('DD-MM-YY')
	/*console.log(todo.date);
	console.log(date1);
	console.log(date2);
	console.log(date1.diff(date2))*/

	/*
		const date1 = dayjs('2019-01-25')
	const date2 = dayjs('2018-06-05')
	date1.diff(date2)
	*/
	
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
          <h5>{dayjs(todo.date).format('DD-MM-YY')}</h5>
        </div>
				{todo.files && (
					<div className="m-2">
          <h3>Прикрепленные файлы</h3>
          {todo.files.map((file, index) => (
						<li key={index}><a href={file[1]} target="_blank" rel="noreferrer">{file[0]}</a></li>
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

/*

"start": "npx serve -s build"

*/