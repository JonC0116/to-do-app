import React from "react";
import { useState } from "react";
import { TfiTrash } from "react-icons/tfi";
import AddTodo from "../AddTodo/AddTodo";

export default function TodoList() {
  const [todos, setTodos] = useState([
    { id: "1", text: "Study react", status: "active" },
    { id: "2", text: "COMP3430 A1", status: "active" },
  ]);

  const handleAdd = (todo) => setTodos([...todos, todo]);

  return (
    <section>
      <ul>
        {todos.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
      <AddTodo onAdd={handleAdd} />
    </section>
  );
}
