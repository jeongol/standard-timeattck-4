import React, { useState } from "react";
import axios from "axios";
import { todo } from "../type/todo";

const [todos, setTodos] = useState([]);

export default async function todoList() {
  const res = await axios.patch(`http://localhost:4000/todos/${아이디}`);
  const falseTodos = res.data.filter(function (todo) {
    return todo.isDone === false;
  });

  //   return (
  //     <div>
  //         <ul>
  //             {todos.map(()) => (
  //                 <li key={todo.id}>
  //                     <p>{todo.title}</p>
  //                     <p>{todo.contents}</p>
  //                 </li>
  //             )}
  //         </ul>
  //     </div>
  //   )
  //
}
