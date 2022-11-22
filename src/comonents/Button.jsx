import React from 'react';
import { useSelector } from 'react-redux';

const Button = (props) => {
	const {
		completed,
		onClick,
		buttonType,
		expired
	} = props;

	const todoStatus = useSelector((state) => state.todos.todoStatus);

	switch(buttonType) {
		case 'EndTask': {
			let text = 'Завершить';
			if (completed) {
				text = 'Возобновить';
			}
			let className="btn btn-outline-success m-2";
			if (expired < 0) {
				className="btn btn-outline-success m-2 disabled";
			}
			return (
				<button onClick={onClick} className={className}>{text}</button>
			)
		}
		case 'ChangeTask': {
			let text = "Изменить";
			let className = "btn btn-outline-primary m-2";
			if (expired < 0) {
				className="btn btn-outline-primary m-2 disabled";
			}
			return (
				<button onClick={onClick} className={className}>{text}</button>
			)
		}
		case 'DeleteTask': {
			let text = "Удалить";
			return (
				<button onClick={onClick} className="btn btn-outline-danger m-2">{text}</button>
			)
		}
		case 'AddTask': {
			let text = "Добавить задачу";
			let className = "btn btn-primary";
			if (todoStatus === ('startLoadingFile')) {
				className = "btn btn-primary disabled";
			}
			return (
				<button type="submit" className={className}>{text}</button>
			)
		}
		default: {
			throw new Error('Unexpected button type');
		}
	}
};

export default Button;