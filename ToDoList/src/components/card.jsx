import React, { useEffect } from 'react'
import {useRef, useState} from 'react'
import { v4 as uuidv4 } from 'uuid';

function card() {
  const [todo,setTodo]=useState("");
  const [todos, setTodos]=useState([]);
  // const [itemId, setItemId]=useState(1);
  const [showItem, setShowItem]=useState(false);
  const showRef=useRef();


  useEffect(()=>{
    const todoString=localStorage.getItem("todos");
    if(todoString)
    {
      let todos=JSON.parse(localStorage.getItem("todos"))
      setTodos(todos);
    }
  },[]);

  const saveToLS = (todos)=>{
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const reset=()=>{
    if (window.confirm("This will deleate all todo's list")){
      localStorage.clear();
      setTodos([]);
    }
  }

  const itemCheck=(e)=>{
    e.target.checked?setShowItem(true):setShowItem(false);
  }

  const todoValue=(e)=>{
    setTodo(e.target.value);
  }

  const updateTodoList=()=>{
    if(todo.length>3){
    // setItemId(itemId+1);
    setTodos((item)=>{const updatedTodo=[...item, {todo, id:uuidv4(), isCompleted:false }]
      saveToLS(updatedTodo)
      return updatedTodo});
    setTodo("");}
  }

  const markDone=(e)=>{
    const updatedTodo=todos.map((item)=>{return item.id===e.target.id ?{...item, isCompleted: !item.isCompleted}: item})
    setTodos(updatedTodo);
    saveToLS(updatedTodo);
  }

  const removeTodo=(idRemove)=>{
    const updatedTodo=todos.filter((item)=>{return item.id===idRemove?null:item})
    setTodos(updatedTodo)
    saveToLS(updatedTodo);
  }

  const editBtn=(e)=>{
    todos.map((i)=>{
        return i.id===e.target.id?
        setTodo(i.todo):setTodos(todos.filter(todo=>todo.id!==e.target.id));
    })
    // setTodos(todos.filter((item)=>item.id!==e.target.id))
    removeTodo(e.target.id);
  }

  const deleteBtn=(e)=>{
    removeTodo(e.target.id);
  }

  const handleUpdate = (e) => {
    if (e.key === 'Enter' && todo.length > 3) {  // Ensure there is content in the input
      updateTodoList();
    }
  };

  return (
    <div >
      <div className="container md:w-1/3 m-auto min-h-[85vh] bg-purple-100 p-6 my-6 rounded-2xl relative pb-24">
        <div className="heading text-4xl font-bold text-center m-2 mb-6 ">iTask Smart Way to Manage your ToDo Tasks</div>
        <div className='font-bold text-2xl m-2'>Add a ToDo</div>
        <div className="entry flex gap-4 mb-10 h-12">
          <input className="bg-white w-3/4 h-10 rounded-full px-4" type="text" value={todo} onChange={todoValue} onKeyDown={handleUpdate}/>
          <button disabled={todo.length<4} className="bg-violet-400 w-1/8 h-10 rounded-full m-auto font-bold cursor-pointer hover:h-12 hover:w-[15%] hover:text-[18px] disabled:bg-violet-400 disabled:h-10 disabled:w-1/8 disabled:text-[16px]" onClick={updateTodoList}>Save</button>
        </div>
        <div className="showbtn mb-4">
        <input className="mx-4 h-4 w-4" type="checkbox" id='showItem' name="showItem" ref={showRef} onChange={itemCheck} />
        <label className='ml-3 h-4 w-4' htmlFor="showItem">Show Finished</label>
        </div>
        <div className="line w-5/6 m-auto border border-gray-400 mb-6"></div>
        <div className="todoslist text-2xl font-bold mb-4">Your ToDo's</div>

        {todos.length<1? <div>There is no item in your todo</div>:
        
        (todos.map((item)=>{
          return    showItem?    <div key={item.id} className="todos flex justify-between m-2 min-h-8">
          <div className="todo flex-1 mr-3">
            <input className="mr-3 " type="checkbox" id={item.id} onChange={markDone} checked={item.isCompleted}/>
            <label htmlFor={item.id} className={item.isCompleted?"line-through":""} >{item.todo}</label>
          </div>
          <div className="btn mr-8">
            <div className='flex'>
            <div>
            <button className="edit mx-3 bg-purple-500 rounded-lg p-0.5 hover:bg-purple-600 hover:p-1" onClick={editBtn}><img id={item.id} className=' invert w-5 cursor-pointer' src="img/edit.svg" alt="Error"/></button>
            </div>
            <div>
            <button className="delete mx-3 hover:mx-2.5 bg-purple-500 rounded-lg p-0.5 hover:bg-purple-600 hover:p-1" onClick={deleteBtn}><img id={item.id} className=' invert w-5 cursor-pointer' src="img/delete.svg" alt="Error" /></button>
            </div>
            </div>
          </div>
        </div>:item.isCompleted?null:<div key={item.id} className="todos flex justify-between m-2 min-h-8">
          <div className="todo flex-1 mr-3">
            <input className="mr-3 " type="checkbox" id={item.id} onChange={markDone} checked={item.isCompleted}/>
            <label htmlFor={item.id} className={item.isCompleted?"line-through":""} >{item.todo}</label>
          </div>
          <div className="btn mr-8">
            <div className='flex'>
            <div>
            <button className="edit mx-3 bg-purple-500 rounded-lg p-0.5 hover:bg-purple-600 hover:p-1" onClick={editBtn}><img id={item.id} className=' invert w-5 cursor-pointer' src="img/edit.svg" alt="Error" /></button>
            </div>
            <div>
            <button className="delete mx-3 hover:mx-2.5 bg-purple-500 rounded-lg p-0.5 hover:bg-purple-600 hover:p-1" onClick={deleteBtn}><img id={item.id} className=' invert w-5 cursor-pointer' src="img/delete.svg" alt="Error" /></button>
            </div>
            </div>
          </div>
        </div>
        }))}
      

      <button className="resetbtn absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-cyan-400 rounded-full p-4" onClick={reset}>Reset</button>
      </div>
    </div>
  )
}

export default card
