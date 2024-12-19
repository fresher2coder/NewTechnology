import React, { useState } from "react";
import styled from "styled-components";
import { useTodos } from "./useTodos";

// Styled Components
const AppContainer = styled.div`
  font-family: Arial, sans-serif;
  text-align: center;
  background-color: #f2f4c3; /* Light yellow */
  padding: 20px;
  min-height: 100vh;
  min-width: 500px;
`;

const Title = styled.h1`
  color: #480032; /* Deep purple */
`;

const Form = styled.form`
  margin: 20px auto;
  display: flex;
  justify-content: center;
  gap: 10px;
  width: 100%;
`;

const Input = styled.input`
  padding: 10px;
  width: 200px;
  border: 2px solid #005792; /* Deep blue */
  border-radius: 5px;
  font-size: 16px;
  outline: none;

  &:focus {
    border-color: #fc92e3; /* Pink */
  }
`;

const Button = styled.button`
  padding: 10px 15px;
  background-color: #005792; /* Deep blue */
  color: #f2f4c3; /* Light yellow */
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #fc92e3; /* Pink */
    color: #480032; /* Deep purple */
  }
`;

const TaskList = styled.ul`
  list-style: none;
  padding: 0;
`;

const TaskItem = styled.li`
  background-color: ${(props) => (props.completed ? "#005792" : "#fc92e3")};
  color: ${(props) => (props.completed ? "#f2f4c3" : "#480032")};
  padding: 15px;
  margin: 10px auto;
  border-radius: 10px;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const TaskButtons = styled.div`
  display: flex;
  gap: 10px;
`;

const SmallButton = styled(Button)`
  padding: 5px 10px;
  font-size: 14px;
  background-color: #480032; /* Deep purple */
`;
// Error Message Component
const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
  margin-top: 5px;
`;

function TodoApp() {
  const { todoList, addTask, toggleTask, editTask, deleteTask } = useTodos();

  const [newTask, setNewTask] = useState("");
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editingTaskValue, setEditingTaskValue] = useState("");
  const [addError, setAddError] = useState(null);
  const [editError, setEditError] = useState(null);

  // Handle Add Task
  const handleAddTask = (e) => {
    e.preventDefault();
    const trimmedTask = newTask.trim();

    if (!trimmedTask) {
      setAddError("Task cannot be empty!");
      return;
    }

    const isDuplicate = todoList.some(
      (todo) => todo.task.toLowerCase() === trimmedTask.toLowerCase()
    );

    if (isDuplicate) {
      setAddError("Task already exists!");
      setNewTask("");
      return;
    }

    addTask(trimmedTask);
    setNewTask(""); // Clear input
    setAddError(null); // Clear error
  };

  // Handle Edit Task
  const handleEditTask = (e) => {
    e.preventDefault();
    const trimmedTask = editingTaskValue.trim();

    if (!trimmedTask) {
      setEditError("Task cannot be empty!");
      return;
    }

    const isDuplicate = todoList.some(
      (todo) =>
        todo.task.toLowerCase() === trimmedTask.toLowerCase() &&
        todo.id !== editingTaskId
    );

    if (isDuplicate) {
      setEditError("Task already exists!");
      return;
    }

    editTask({ id: editingTaskId, newTask: trimmedTask });
    setEditingTaskId(null); // Clear edit state
    setEditingTaskValue(""); // Clear input
    setEditError(null); // Clear error
  };

  return (
    <AppContainer>
      <Title>Todo List</Title>

      {/* Add Task Form */}
      <Form onSubmit={handleAddTask}>
        <Input
          type="text"
          placeholder="Add a new task"
          value={newTask}
          onChange={(e) => {
            setAddError("");
            setNewTask(e.target.value);
          }}
        />
        <Button type="submit">Add Task</Button>
      </Form>
      {/* Display Add Task Error */}
      {addError && <ErrorMessage>{addError}</ErrorMessage>}

      {/* Task List */}
      <TaskList>
        {todoList.map((todo) => (
          <TaskItem key={todo.id} completed={todo.completed}>
            {editingTaskId === todo.id ? (
              <Form onSubmit={handleEditTask}>
                <Input
                  type="text"
                  value={editingTaskValue}
                  onChange={(e) => {
                    setEditError("");
                    setEditingTaskValue(e.target.value);
                  }}
                />
                <SmallButton type="submit">Save</SmallButton>
                <SmallButton onClick={() => setEditingTaskId(null)}>
                  Cancel
                </SmallButton>
              </Form>
            ) : (
              <>
                <h2>{todo.task}</h2>
                <TaskButtons>
                  <SmallButton onClick={() => setEditingTaskId(todo.id)}>
                    Edit
                  </SmallButton>
                  <SmallButton onClick={() => deleteTask(todo.id)}>
                    Delete
                  </SmallButton>
                  <SmallButton onClick={() => toggleTask(todo.id)}>
                    {todo.completed ? "Unmark" : "Mark"}
                  </SmallButton>
                </TaskButtons>
              </>
            )}
            {/* Display Edit Task Error */}
            {editingTaskId === todo.id && editError && (
              <ErrorMessage>{editError}</ErrorMessage>
            )}
          </TaskItem>
        ))}
      </TaskList>
    </AppContainer>
  );
}

export default TodoApp;
