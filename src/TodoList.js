import React from "react";
import TodoItem from "./TodoItem";
import Header from "./Header";

const TodoList = ({ tasks, markCompleted, deleteTask,setResults, results }) => {
    return (
        <div>
            <Header
                tasks={tasks}
                setResults = {setResults}
                results = {results}

            />
            <br />
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