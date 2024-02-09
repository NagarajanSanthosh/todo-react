import React from "react";
import "./index.css";
import "./checkbox.css";
import Checkbox from "./Checkbox";
import Task from "./Task";
import DeleteButton from "./DeleteButton";
import "./TodoItem.css"
import EditButton from "./EditButton";
const TodoItem = ({ task, markCompleted, deleteTask }) => {
    const handleCheckbox = () => {
        markCompleted(task.id);
    };
    return (
        <div className="slide-left m-5">
            <div className="max-w-md mx-auto rounded-xl shadow-lg overflow-hidden md:max-w-2xl mb-2">
                <div className="bg-gray-200 text-tindogPink md-flex">
                    <Checkbox
                        id={task.id}
                        checked={task.completed}
                        onChange={handleCheckbox}
                    />
                    <Task
                        text={task.text}
                        description={task.description}
                        completed={task.completed}
                    />
                    {/* 
                        <label
                         className="relative flex items-center p-3 -mt-5 rounded-full cursor-pointer"
                         htmlFor="priority"
                         >
                        <Priority />
                        </label>
                    */}
                    <div className="flex items-center">
                        <EditButton />
                        <DeleteButton onClick={() => deleteTask(task.id)} />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default TodoItem;