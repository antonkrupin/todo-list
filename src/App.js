import { ref } from 'firebase/database';
import { useList } from 'react-firebase-hooks/database';
import { database } from './firebase/firebase';

import TodoList from './comonents/TodoList';
import AddTodo from './comonents/AddTodo';


import './App.css';

const App = () => {
  const [snapshots, loading, error] = useList(ref(database, 'todos'));

  return (
    <div className="todolist d-flex flex-column m-5">
      <h1 className="text-danger">Список задач</h1>
      {error && <strong>Ошибка: {error}</strong>}
        {loading && 
					<div className="d-flex justify-content-center align-items-center">
						<h3>Загрузка списка задач</h3>
            <div className="spinner-border text-primary m-2" role="status"></div>
					</div>}
        {!loading && snapshots && (
          <>
          <AddTodo />
          <TodoList todos={snapshots}/>
          </>
        )}
    </div>
  )
}

export default App;

/*

<div className="d-flex align-items-center">
  <div className="spinner-border text-primary m-2" role="status">
  </div>
  <h6>Идет загрузка файла</h6>
</div>

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

*/
