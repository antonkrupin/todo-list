import React from 'react';

const Button = (props) => {
	const {
		completed,
		onClick,
		buttonType,
		expired
	} = props;

	switch(buttonType) {
		case 'EndTask': {
			let text = 'Завершить';
			if (completed) {
				text = 'Возобновить';
			}
			let className="btn btn-outline-success m-2";
			if (expired === -1) {
				className="btn btn-outline-success m-2 disabled";
			}
			return (
				<button onClick={onClick} className={className}>{text}</button>
			)
		}
		case 'ChangeTask': {
			let text = "Изменить";
			let className = "btn btn-outline-primary m-2";
			if (expired === -1) {
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
		default: {
			throw new Error('Unexpected button type');
		}
	}
};

export default Button;
