import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FilterAll, FilterDone, FilterUndone } from '../Redux/todoSlice';
import { FcList } from "react-icons/fc";
import { FcApproval } from "react-icons/fc";
import { MdRemoveDone } from "react-icons/md";
export const Filter = (props) => {
let dispatch=useDispatch();
const {FilterItems}=useSelector((state)=>state.todo);
console.log(FilterItems);

    return (
    <div>
        <button onClick={()=>dispatch(FilterAll())}><FcList/></button>
        <button onClick={()=>dispatch(FilterDone())}><FcApproval/></button>
        <button onClick={()=>dispatch(FilterUndone())}><MdRemoveDone/></button>
    </div>
  )
}
