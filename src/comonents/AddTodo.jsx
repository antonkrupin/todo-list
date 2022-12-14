import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Button from './Button';
import { uploadFile } from '../firebase/firebase';
import { addTodo, changeTodoStatus } from '../store/todoSlice';

const AddTodo = () => {
  const dispatch = useDispatch();

  const todoStatus = useSelector((state) => state.todos.todoStatus);

	const [filePaths, setFilePath] = useState([]);

  const reader = new FileReader();

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
    const file = e.target.files[0];
		
    reader.onloadend = () => {
			uploadFile(file,
				setFilePath,
				() => dispatch(changeTodoStatus('startLoadingFile')),
				() => dispatch(changeTodoStatus('endLoadingFile'))
			);
    }
    reader.readAsDataURL(file);
  };

  return (
    <div className="d-flex mx-auto flex-column m-2 p-5 border rounded shadow-sm">
      <div className="text-primary text-center">
      <h4>Добавить новую задачу</h4>
      </div>
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
        {todoStatus !== 'startLoadingFile' && (
          <>
            <label className="pb-2" htmlFor="todoFile">Загрузка файлов</label>
            <input
              className="pb-2 fileInput"
              type="file"
              onChange={(e) => handleFileUplodad(e)}
              ref={fileUploadRef}
            />
          </>
        )}
        {todoStatus === 'startLoadingFile' && (
          <div className="d-flex align-items-center">
            <div className="spinner-border text-primary m-2" role="status">
            </div>
            <h6>Идет загрузка файла</h6>
          </div>
        )}
        <div>
          {filePaths.map((file, index) => (
            <li key={index}>
              {file[0]}
            </li>
          ))}
        </div>
				<Button buttonType={"AddTask"} />
      </form>
    </div>
  )
};

export default AddTodo;
