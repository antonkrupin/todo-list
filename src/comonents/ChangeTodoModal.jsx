import { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Modal, Button } from 'react-bootstrap';

import { changeTodoModalShow } from '../store/modalsSlice'


const ChangeTodoModal = (props) => {
	const dispatch = useDispatch();

	/*const ref = useRef();

	const { socket } = props;
	
	const channel = useSelector((state) => state.channels.channelForRename);

	const channelsNames = useSelector((state) => state.channels.channels).map(({name}) => name);*/
	
	const isChangeTodoShow = useSelector((state) => state.modals.isChangeTodoShow);

	const todoKey = useSelector((state) => state.todos.todoForChange[0]);
	const todoForChange = useSelector((state) => state.todos.todoForChange[1]);
	
	useEffect(() => {
		console.log(todoKey, todoForChange);
	}, [isChangeTodoShow])

	/*const [name, setChannelName] = useState(null);

	const [error, setError] = useState('');

	const { channelStatus } = useSelector((state) => state.channels);*/

	/*const renameChannelHandler = (e) => {
		e.preventDefault();
		dispatch(setChannelStatus('renaming'));
		if (!_.includes(channelsNames, name)) {
			socket.emit('renameChannel', { id: channel.id, name });
			setChannelName('');
			setError('');
			dispatch(renameChannelModalShow());
		} else {
			dispatch(setChannelStatus(null));
			//const className = cn('form-control', 'is-invalid');
			ref.current.className = changeClassName('form-control is-invalid');
			setError(i18n.t('errors.channels.renameChannel'));
		}
	}*/

	const cancelChangeTodo = () => {
		dispatch(changeTodoModalShow());
	}

	return (
		<>
		<Modal show={isChangeTodoShow} onHide={cancelChangeTodo} >
			<Modal.Header closeButton >
				<Modal.Title>Изменить задачу</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				...
			</Modal.Body>
			<Modal.Footer>
          <Button variant="secondary" onClick={cancelChangeTodo}>
            Отменить
          </Button>
          <Button variant="primary">
            Сохранить
          </Button>
        </Modal.Footer>
		</Modal>
		</>
	)
};

export default ChangeTodoModal;