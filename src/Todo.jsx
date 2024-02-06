import React, { useState } from "react";
import TodoItem from "./TodoItem";
import './index.css';
import ShowAdd from "./ShowAdd";
const Todo = () => {
    const [tasks, setTask] = useState([]);

    const [id, setId] = useState(0);
    const [text, setText] = useState("");
    const [description, setDescription] = useState("");
    const [show, setShow] = useState(false);


    const handleInputChange = (event) => {
        setText(event.target.value);
    };
    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };
    console.log([...tasks]);
    const addTask = () => {
        let changeId = id + 1;
        const newTask = {
            id: changeId,
            text,
            description,
            completed: false,
        };
        setTask([...tasks, newTask]);
        setText("");
        setDescription("");
        setId(changeId);
    };
    const markCompleted = (id) => {
        setTask(
            tasks.map((task) =>
                task.id === id ? { ...task, completed: !task.completed } : task
            )
        );
    };
    const deleteTask = (id) => {
        console.log(id);
        setTask(tasks.filter((task) => task.id !== id));
    }
    const handleShowTrue = () => {
        setShow(true);
    }
    const handleShowFalse = () => {
        setShow(false);
    }
    const hideAdd = () => {
        setShow(false);
    }
    return (
        <div className="m-5">

            <div>
                {tasks.map((task) => (
                    <TodoItem
                        key={task.id}
                        task={task}
                        markCompleted={markCompleted}
                        deleteTask={deleteTask} />
                ))}
                <div className="row md-flex items-center">

                    <button
                        className="mb-2 bg-gray-200  text-tindogPink font-bold py-2 px-4 rounded-full inline-flex items-center"
                        onClick={handleShowTrue}>
                        +
                    </button>
                    <br />
                    {show && <ShowAdd
                        text={text}
                        handleDescriptionChange={handleDescriptionChange}
                        handleInputChange={handleInputChange}
                        description={description}
                        addTask={addTask}
                        hideAdd={hideAdd}
                        show = {show}
                        handleShowFalse = {handleShowFalse}
                    />
                    }
                </div>

            </div>
        </div>
    );
};
export default Todo;
