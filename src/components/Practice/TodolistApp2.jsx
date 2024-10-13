import {useState} from "react";
import './Todolist2.css';
import { Fragment } from "react/cjs/react.production.min";
const TodolistApp2 =() =>{
    const [todo, setTodo] = useState('');
    const [todos, setTodos] = useState([]);
    const [editid,seteditid] = useState(0);
    const handelSubmit = (e) =>{
        e.preventDefault();
        if(editid){
            const editTodo = todos.find((i) =>i.id === editid);
            const updateTodos =todos.map((t)=>t.id === editTodo.id? (t={id:t.id,todo}) : {id:t.id,todo:t.todo});
            setTodos(updateTodos);
            seteditid(0);
            setTodo('');
            return;
        }
        if(todo !==''){
            setTodos([{id:`${todo}-${Date.now()}`,todo}, ...todos])
            setTodo('');
        }else{
            alert('please Enter Todo  value');
        }
    }
    const handelDelete =(id) =>{
        const delTodo =todos.filter((to)=>to.id !==id);
        setTodos([...delTodo]);
    };
    const handelEdit =(id) =>{
        const editTodo =todos.find((i)=>i.id===id);
        setTodo(editTodo.todo);
        seteditid(id);
    };
    return(
        <Fragment> <h2>2**CRUD OPERATION USING  REACT JS(TODO LIST)**</h2> 
        <div className="App">
            <div className="container-todo" >
                <h1>Todo Application</h1>
                <form className="todoForm" onSubmit={handelSubmit}>
                    <input type="text"  value={todo}
                    onChange={(e) =>setTodo(e.target.value)} />
                    <button type="submit"> {editid ?'Update':'Add' }</button>
                </form>
                <ul className="allTodo">
                     { todos.map((t) =>(
                    <li className="singletodo" >
                        <span className="todotext" key={t.id}>{t.todo}</span>
                        <button onClick={()=>handelEdit(t.id)} >Edit</button>
                        <button onClick={()=>handelDelete(t.id)}>Delete</button>
                    </li>
                    ))}
                </ul>
            </div>
        </div>
        </Fragment>
    );
}
export default TodolistApp2;