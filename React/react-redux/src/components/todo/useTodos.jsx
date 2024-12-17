import { useSelector, useDispatch } from "react-redux";

import { addTodo, toggleTodo, editTodo, deleteTodo } from "./todoSlice";

export const useTodos = () => {
  const todoList = useSelector((state) => state.todoList);

  const dispatch = useDispatch();

  const addTask = (task) => {
    dispatch(addTodo(task));
  };

  const toggleTask = (id) => {
    dispatch(toggleTodo(id));
  };

  const editTask = (updatedTask) => {
    dispatch(editTodo(updatedTask));
  };

  const deleteTask = (id) => {
    dispatch(deleteTodo(id));
  };

  return { todoList, addTask, deleteTask, toggleTask, editTask };
};
