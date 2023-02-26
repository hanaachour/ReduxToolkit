import React from 'react'
import { Todo } from './Todo'

export const Todolist = ({todos}) => {
    
  return (
    <div>
       {todos.map((el)=>(
        <Todo todo={el} key={el.id}/>)
       )}
        </div>
  )
}
