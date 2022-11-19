import React from 'react';

const TodoItem = () => {
  return (
    <div className="d-flex m-3 flex-column shadow-sm rounded border">
      <div>
        <h3>Заголовок</h3>
        <h4>Описание заголовка</h4>
      </div>
      <div>
        <h3>Описание</h3>
        <h4>Описание описания</h4>
      </div>
      <div>
        <h3>Дата завершения</h3>
      </div>
      <div>
        <h3>Прикрепленные файлы</h3>
      </div>
    </div>
  )
};

export default TodoItem;