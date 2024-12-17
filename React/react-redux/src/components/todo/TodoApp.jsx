import React from "react";

import { useTodos } from "./useTodos";

function TodoApp() {
  const { todoList, addTask, toggleTask, editTask, deleteTask } = useTodos();
  console.log(todoList);
  return (
    <>
      <h1>TodoList</h1>
      <ul>
        {todoList.map((todo, index) => (
          <li key={todo.id}>
            <h1>{todo.task}</h1>
            <h2>{todo.completed}</h2>
            <button
              onClick={() => {
                editTask({ id: todo.id, newTask: "Practice" });
              }}
            >
              Edit
            </button>
            <button
              onClick={() => {
                deleteTask(todo.id);
              }}
            >
              Delete
            </button>
            <button
              onClick={() => {
                toggleTask(todo.id);
              }}
            >
              Toggle
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default TodoApp;
