import React, { useState, useRef } from "react";
import TodoList from "./TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef();

  function handleAddTodo(e) {
    const name = todoNameRef.current.value;
    if (name === "") return;
    console.log(name);
  }
  return (
    <div>
      <TodoList todos={todos} />
      <input ref={todoNameRef} type="text" placeholder="Write here ..." />
      <button onClick={handleAddTodo()}>Add Todo</button>
      <button>Clear Completed Todos</button>
      <div>0 left to do</div>
    </div>
  );
}

export default App;
