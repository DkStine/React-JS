import React, { useState } from "react";

export const AddTodo = ({addTodo}) => {
    const [Title, setTitle] = useState("")
    const [Desc, setDesc] = useState("")

    const submit = (event) => {
        event.preventDefault();
        if (!Title || !Desc){
            alert('The Title or Desc can\'t be empty!')
        } else {
            addTodo(Title, Desc);
            setTitle("");
            setDesc("");
        }
    }
  return (
    <div className="container my-3">
      <h3>Add your Todo here!</h3>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Todo Title
          </label>
          <input
            type="text"
            value={Title}
            onChange={(event) => {setTitle(event.target.value)}}
            className="form-control"
            id="title"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Todo description
          </label>
          <input type="text" value={Desc} onChange={(event) => {setDesc(event.target.value)}} className="form-control" id="desc" />
        </div>
        <button type="submit" className="btn btn-success btn-sm">
          Add Todo!
        </button>
      </form>
    </div>
  );
};
