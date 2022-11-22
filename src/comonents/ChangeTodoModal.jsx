import { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Modal, Button } from 'react-bootstrap';

import { changeTodo } from '../store/todoSlice';
import { changeTodoModalShow } from '../store/modalsSlice';


const ChangeTodoModal = () => {
	const dispatch = useDispatch();

	const titleRef = useRef();
	const descriptionRef = useRef();
	const dateRef = useRef();
	
	const isChangeTodoShow = useSelector((state) => state.modals.isChangeTodoShow);

	const [ todoForChangeKey, todoForChange ] = useSelector((state) => state.todos.todoForChange);
	
	const handleSaveChanges = (e) => {
		e.preventDefault();
		const changedTodo = {
			title: titleRef.current.value,
			description: descriptionRef.current.value,
			date: dateRef.current.value,
		}
		dispatch(changeTodo({todoForChangeKey, changedTodo}));
		dispatch(changeTodoModalShow());
	}

	return (
		<>
		<Modal show={isChangeTodoShow} onHide={() => dispatch(changeTodoModalShow())}>
			<Modal.Header closeButton >
				<Modal.Title>Изменить задачу</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				{todoForChange && (
					<>
						<label className="pb-2" htmlFor="todoTitle">Заголовок задачи</label>
						<input
							className="form-control pb-2"
							name="todoTitle"
							ref={titleRef}
							defaultValue={todoForChange.title}
							required
						/>
						<label className="pb-2" htmlFor="todoDescription">Описание задачи</label>
						<textarea
							className="form-control mb-2 pb-2"
							name="todoDescription" id="" cols="30" rows="5"
							defaultValue={todoForChange.description}
							ref={descriptionRef}
						/>
						<label htmlFor="todoDate">Дата завершения</label>
						<input
							className="w-50"
							type="date"
							name="todoDate"
							defaultValue={todoForChange.date}
							ref={dateRef}
							required
						/>
					</>
				)}
				
			</Modal.Body>
			<Modal.Footer>
          <Button variant="secondary" onClick={() => dispatch(changeTodoModalShow())}>
            Отменить
          </Button>
          <Button variant="primary" onClick={(e) => handleSaveChanges(e)}>
            Сохранить
          </Button>
        </Modal.Footer>
		</Modal>
		</>
	)
};

export default ChangeTodoModal;