import TodoList from './comonents/TodoList';
import AddTodo from './comonents/AddTodo';


import './App.css';

const App = () => {
  return (
    <div className="todolist d-flex flex-column m-5">
      <h1 className="text-danger">Todo List</h1>
      <AddTodo />
      <TodoList />
    </div>
  )
}

export default App;
