import React from 'react'
import { TodoItem } from './TodoItem'

export const Todos = ({todolist, onDelete}) => {
  return (
    <div className='container'>
        <h3 className='text-center my-3'>Todos List</h3>
        {todolist.map((todo) => {
            return <TodoItem todo={todo} key={todo.sno} onDelete = {onDelete} />
        })}
    </div>
  )
}