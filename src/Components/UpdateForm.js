import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Edittodo, Updatetodo } from '../Redux/todoSlice';
import {GrUpdate}from "react-icons/gr";
import {FcCancel}from "react-icons/fc";


export const UpdateForm = ({todotask,todoid}) => {
   let dispatch=useDispatch();
   
    const [newTask,setNewTask]=useState("");
 
    const handleChange=(e)=>{
    setNewTask(e.target.value)
};
const updateHandler=(e)=>{
e.preventDefault();
dispatch(Updatetodo({id:todoid,task:newTask}));
dispatch(Edittodo(todoid))
}

  return (
    <div>
        <form>
            <input defaultValue={todotask} onChange={handleChange}/>
            <button onClick={updateHandler}><GrUpdate/></button>
            <button onClick={()=>{dispatch(Edittodo(todoid))}}><FcCancel/></button>
            
            </form>
            </div>
  )
}
