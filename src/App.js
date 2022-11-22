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