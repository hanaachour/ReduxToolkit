import { createSlice } from "@reduxjs/toolkit";

const TodoSlice=createSlice({
    name:"todos",
    initialState:{
        todos:[
        {id:Math.random(),
        task:"Learn Redux Toolkit",
        isDone:false,
        isEdited:false
        },
        {id:Math.random(),
        task:"Learn Node JS",
        isDone:false,
        isEdited:false
        }
      ],
      FilterItems:"All",
    },
reducers:{
    Addtodo:(state,action)=>{
        state.todos.push(action.payload)
    },
    Deletetodo:(state,action)=>{
        state.todos=state.todos.filter((el)=>el.id !== action.payload )
    },
    Completetodo:(state,action)=>{
        state.todos.map((el)=>{
        if (el.id===action.payload){
        return(el.isDone =!el.isDone)
        }
        return el.isDone;
        })

    },
    Edittodo:(state,action)=>{
        state.todos.map((el)=>el.id===action.payload?(el.isEdited=!el.isEdited):el.isEdited
        );
    },
    Updatetodo:(state,action)=>{
        state.todos.map((el)=> el.id===action.payload.id ? el.task=action.payload.task: el.task)
    },
    FilterAll:(state)=>{
        state.FilterItems="All"
    },
    FilterDone:(state)=>{
        state.FilterItems="Done"
    },
    FilterUndone:(state)=>{
        state.FilterItems="Undone"
    },
},
});

export default TodoSlice.reducer;
export const{Addtodo,Deletetodo,Completetodo,Edittodo,Updatetodo,FilterAll,FilterDone,FilterUndone}=TodoSlice.actions;