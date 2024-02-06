import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ tasks, markCompleted, deleteTask }) => {
  return (
    <div>
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          markCompleted={markCompleted}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
};

export default TodoList;