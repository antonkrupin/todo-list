import React from 'react';

import TodoItem from './TodoItem';

import { ref } from 'firebase/database';
import { useList } from 'react-firebase-hooks/database';
import { database } from '../firebase/firebase';

import ChangeTodoModal from './ChangeTodoModal';

const TodoList = () => {
	const [snapshots, loading, error] = useList(ref(database, 'todos'));
    
  return (
    <div className="d-flex flex-column">
      {error && <strong>Error: {error}</strong>}
        {loading && 
					<div className="d-flex justify-content-center">
						<h3 className="text-success">Загрузка списка задач</h3>
					</div>}
        {!loading && snapshots && (
          <>
						{snapshots.map((elem) => (
							<TodoItem
							key={elem.key}
							todo={elem.val()}
							id={elem.key}
						/>
						))}
          </>
        )}
			<ChangeTodoModal />
    </div>
  )
};

export default TodoList;