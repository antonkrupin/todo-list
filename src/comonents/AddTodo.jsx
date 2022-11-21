import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import 'datejs';

import { addTodo } from '../store/todoSlice';

const AddTodo = () => {
  const [filePaths, setFilePath] = useState([]);

  const dispatch = useDispatch();

  let reader = new FileReader();

  const titleRef = useRef();
  const descriptionRef = useRef();
  const dateRef = useRef();
  const fileUploadRef = useRef();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo({
      title: titleRef.current.value,
      description: descriptionRef.current.value,
      date: dateRef.current.value,
      files: filePaths,
      completed: false,
    }));
    
    setFilePath([]);
    titleRef.current.value = '';
    descriptionRef.current.value = '';
    dateRef.current.value = '';
    fileUploadRef.current.value = '';
  };

  const handleFileUplodad = (e) => {
    let file = e.target.files[0];
    reader.onloadend = () => {
      setFilePath((prev) => {
       return [...prev, file.name];
      });
    }
    reader.readAsDataURL(file)
  };

  return (
    <div className="d-flex w-50 mx-auto m-2 border rounded shadow-sm">
      <form
        className="d-flex w-100 m-2 flex-column justify-content-start"
        onSubmit={(e) => handleFormSubmit(e)}>
        <label className="pb-2" htmlFor="todoTitle">Заголовок задачи</label>
        <input
          className="form-control pb-2"
          name="todoTitle"
          ref={titleRef}
					required
        />
        <label className="pb-2" htmlFor="todoDescription">Описание задачи</label>
        <textarea
          className="form-control pb-2"
          name="todoDescription" id="" cols="30" rows="5"
          ref={descriptionRef}  
        />
        <label htmlFor="todoDate">Дата завершения</label>
        <input
          className="w-50"
          type="date"
          name="todoDate"
          ref={dateRef}
					required
        />
        <label className="pb-2" htmlFor="todoFile">Загрузка файлов</label>
        <input
          className="pb-2 fileInput"
          type="file"
          onChange={(e) => handleFileUplodad(e)}
          ref={fileUploadRef}
        />
        <div>
          {filePaths.map((file, index) => (
          <li key={index}>
            {file}
          </li>
        ))}
        </div>
        <button
          type="submit"
          className="w-50 btn btn-primary">
            Добавить задачу
        </button>
      </form>
    </div>
  )
};

export default AddTodo;
