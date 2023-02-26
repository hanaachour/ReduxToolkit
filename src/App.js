import { useSelector } from 'react-redux';
import './App.css';
import { Add } from './Components/Add';
import { Filter } from './Components/Filter';
import { Todolist } from './Components/Todolist';


function App() {
  const {todos}=useSelector((state)=>state.todo);
   // const todoooos=useSelector((state)=>state.toto.todos);
  // console.log(todoooos)
  const{FilterItems}=useSelector((state)=>state.todo);
  console.log(FilterItems);
  
  return (
    <div className="App">
      <h1 style={{color:'blue'}}>Todolist checkpoint Redux ToolKit</h1>
      <Filter/>
      <br/>
      <Add/> 
      <br/>
<Todolist
 todos={
  FilterItems==="Done"
?todos.filter((el)=>el.isDone===true)
:FilterItems==="Undone"
?todos.filter((el)=>el.isDone===false)
:todos
}/>

    </div>
  );
}

export default App;
