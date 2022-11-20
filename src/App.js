import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchTodos, setTodos } from './store/todoSlice';

import TodoList from './comonents/TodoList';
import AddTodo from './comonents/AddTodo';

import './App.css';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    //dispatch(fetchTodos());
    /*const test = dispatch(fetchTodos());
    console.log(test)
    test.then((data) => console.log(data.payload));*/
    dispatch(setTodos());
  }, []);

  return (
    <div className="todolist d-flex flex-column m-5">
      <h1 className="text-danger">Todo List</h1>
      <AddTodo />
      <TodoList />
    </div>
  )
}

export default App;
