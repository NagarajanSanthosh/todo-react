import React from "react";
import TodoItem from "./TodoItem";
import Header from "./Header";

const TodoList = ({ tasks, markCompleted, deleteTask, handleSearch, searchText }) => {
    return (
        <div>
            <Header
             tasks ={tasks}
             handleSearch = {handleSearch}
             searchText={searchText} 
            />
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