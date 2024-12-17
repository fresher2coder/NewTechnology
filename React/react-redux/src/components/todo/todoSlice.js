import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todoList",
  initialState: [
    { id: 1, task: "Learn Redux", completed: false },
    { id: 2, task: "Build Project", completed: false },
  ],
  reducers: {
    addTodo: (state, action) => {
      //gen id, create the new obj, push the obj to the array
      const id = state.length == 0 ? 1 : state[state.length - 1].id + 1;
      const task = action.payload;
      state.push({ id, task, completed: false });
    },

    toggleTodo: (state, action) => {
      //find the task, !completed
      const task = state.find((task) => task.id == action.payload);
      task.completed = !task.completed;
    },
    editTodo: (state, action) => {
      const task = state.find((task) => task.id == action.payload.id);
      task.task = action.payload.newTask;
    },
    deleteTodo: (state, action) => {
      return state.filter((task) => task.id !== action.payload);
    },
  },
});

export const { addTodo, toggleTodo, editTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
