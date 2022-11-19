import './App.css';
import TodoList from './comonents/TodoList';

const App = () => {
  return (
    <div className="todolist d-flex flex-column text-center m-5">
      <h1 className="text-danger">Todo List</h1>
      <TodoList />
    </div>
  )
}

export default App;
