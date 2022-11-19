import React from 'react';

const AddTodo = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('test');
  }
  const handleFileUplodad = (e) => {
    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }
    reader.readAsDataURL(file)
  }

  return (
    <div className="d-flex w-50 mx-auto m-2 border rounded shadow-sm">
      <form
        className="d-flex w-100 m-2 flex-column justify-content-start"
        onSubmit={(e) => handleFormSubmit(e)}>
        <label className="pb-2" htmlFor="todoTitle">Заголовок задачи</label>
        <input
          className="form-control pb-2"
          name="todoTitle"
        />
        <label className="pb-2" htmlFor="todoDescription">Описание задачи</label>
        <textarea
          className="form-control pb-2"
          name="todoDescription" id="" cols="30" rows="5"/>
        <label className="pb-2" htmlFor="todoFilex">Загрузка файлов</label>
        <input className="pb-2 fileInput" type="file" onChange={(e) => handleFileUplodad(e)}/>
        <button
          type="submit"
          className="btn btn-primary">
            Добавить задачу
        </button>
      </form>
    </div>
  )
};

export default AddTodo;