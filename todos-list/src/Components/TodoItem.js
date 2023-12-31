import React from 'react'

export const TodoItem = ({todo, onDelete}) => {
  return (
    <div className='my-3'>
      <h3>{todo.sno} </h3>
      <h4>{todo.title} </h4>
      <p>{todo.desc} </p>
      <button className="btn btn-danger btn-sm" onClick={() => {onDelete(todo)}}>Delete</button>
    </div>
  )
}
