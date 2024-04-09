import React from "react";
import TodoItem from "./TodoItem";
import Header from "./Header";
import { Link } from "react-router-dom";

const TodoList = ({ tasks, markCompleted, deleteTask, setResults, results }) => {
    return (
        <div>
            <Header
                tasks={tasks}
            />
            <div className="text-gray-200 text-xl" >
            <Link to={'/login'}>Login</Link>
                
            </div>
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