import React, { useState } from 'react';
import Check from "./Check";

function Input() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const newTodo = { text, completed: false };
    setTodos([...todos, newTodo]);
  };

  const completeTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = true;
    setTodos(updatedTodos);
  };

  const removeTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  return (
    <>
      <h1>Todo List</h1>
      <div className='put-items'>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const text = e.target.todo.value;
          if (text.trim() !== '') {
            addTodo(text);
          }
          e.target.todo.value = '';
        }}
      >
        <input type="text" name="todo" placeholder="  Add a todo"/>
        <button type="submit">Add</button>
      </form>
      </div>
      
      <ul>
        {todos.map((todo, index) => (
          
          <div className="inp">
            <div className='action'> 
            <Check/>
            <button onClick={() => removeTodo(index)}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
</svg>
</button>
            </div>

          
             <li key={index}>
           <span  className="todo-text"
              style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
              onClick={() => completeTodo(index)}
            >
              {todo.text}
            </span>
          
          </li>
          </div>
        ))}
      </ul>
    </>
  );
}

export default Input;
