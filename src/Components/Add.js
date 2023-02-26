import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Addtodo } from '../Redux/todoSlice';
import{VscAdd} from "react-icons/vsc";
export const Add = () => {
  const dispatch =useDispatch();
//***************First methode:(best one because when you add new task it refreshs automatically(value setNewTodo ) however for the 2nd method it can't because of the initial state is an object) */
const [newTodo,setNewTodo]=useState("");

const changeHandler=(e)=> {
  setNewTodo(e.target.value);
}

const addHandler=(e)=>{
  e.preventDefault();
  dispatch(Addtodo({id:Math.random(),task:newTodo,isDone:false}));
  setNewTodo("");
}
/*****Second method */
/*const[newTodo,setNewTodo]=useState({
  id:Math.random(),
  task:"",
  isDone:false,
})

const changeHandler=(e)=>{
  setNewTodo({...newTodo,[e.target.name]:e.target.value})
};

const addHandler=(e)=>{
  e.preventDefault();
  dispatch(Addtodo(newTodo));
};*/
  return (
    <div>
        <form  onSubmit={addHandler}>
            <input  type="Text" value={newTodo} onChange={changeHandler}></input>
           <button type='submit'><VscAdd/></button> 
        </form>
    </div>
  )
}
