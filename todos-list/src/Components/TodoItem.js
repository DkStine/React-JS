import React from 'react'

export const TodoItem = ({todo}) => {
  return (
    <div>
        <h4>{todo.sno} </h4>
        <h3>{todo.title} </h3>
        <p>{todo.work} </p>
    </div>
  )
}
