import React from 'react';

const TodoItem = (props) => {
  const { todo } = props;

  if (todo.completed) {

  }

  return (
    <div className="d-flex w-50 mx-auto m-3 shadow-sm justify-content-around align-items-center rounded border">
      <div>
        <div className="m-2">
          <h3>Заголовок</h3>
          <h5>{todo.title}</h5>
        </div>
        <div className="m-2">
          <h3>Описание</h3>
          <h5>{todo.description}</h5>
        </div>
        <div className="m-2">
          <h3>Дата завершения</h3>
          <h5>{todo.date}</h5>
        </div>
        <div className="m-2">
          <h3>Прикрепленные файлы</h3>
          {todo.files.map((file, index) => (
            <li key={index}>{file}</li>
          ))}
        </div>
      </div>
      <div className="d-flex flex-column">
        <button className="btn btn-outline-success m-2">Завершить</button>
        <button className="btn btn-outline-primary m-2">Изменить</button>
        <button className="btn btn-outline-danger m-2">Удалить</button>
      </div>
    </div>
  )
};

export default TodoItem;