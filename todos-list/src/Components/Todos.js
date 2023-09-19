import React from 'react'
import { TodoItem } from './TodoItem'

export const Todos = ({todolist, onDelete}) => {
  let containerStyle = {
    minHeight : '70vh'
  }

  return (
    <div className='container my-3' style={containerStyle}>
        <h3 className='my-5'>Todos List:</h3>
        {todolist.length === 0 ? <h5>No Todos to display!<span class="badge bg-secondary">Add One above...</span></h5> : 
        todolist.map((todo) => {
            return (
              <>
              <TodoItem todo={todo} key={todo.sno} onDelete = {onDelete} />
              <hr />
              </>
            ) 
        })}          
    </div>
  )
}