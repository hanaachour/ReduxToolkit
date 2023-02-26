import React from 'react'
import { useDispatch } from 'react-redux';
import { Completetodo, Deletetodo, Edittodo } from '../Redux/todoSlice';
import { UpdateForm } from './UpdateForm';
import {AiFillDelete} from "react-icons/ai";

import { FcApproval,FcEditImage } from "react-icons/fc";
import { MdRemoveDone } from "react-icons/md";



export const Todo = ({todo}) => {
  let dispatch=useDispatch();
  const deleteHandler=()=>{
    dispatch(Deletetodo(todo.id))
  };
  const completeHandler=()=>{
    dispatch(Completetodo(todo.id));
  };
  
    const editHandler=()=> {
      dispatch(Edittodo(todo.id));
    }
  
  return (
    <div>
     { todo.isDone?(
     <div style={{color:"green"}}>{todo.task}</div>
     ):(
     <div style={{color:"red"}}>{todo.task}</div>
     )}
     <div>
    {todo.isEdited && <UpdateForm todotask={todo.task} todoid={todo.id}/>}
    <button onClick={deleteHandler}><AiFillDelete/></button>
    <button onClick={completeHandler}>{todo.isDone?<MdRemoveDone/>:<FcApproval/>}</button>
    <button onClick={editHandler}><FcEditImage/></button>
    </div>
    </div>
  )
}
