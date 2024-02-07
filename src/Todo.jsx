import React, { useState } from "react";
import "./index.css";
import AddButton from "./AddButton";
import ShowAdd from "./ShowAdd";
import TodoList from "./TodoList";
import Footer from "./Footer";

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
        setShow(false);
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
    };
    const handleShowTrue = () => {
        setShow(true);
    };
    const handleShowFalse = () => {
        setShow(false);
    };
    const hideAdd = () => {
        setShow(false);
    };
    return (
        <div className="m-5">
            <div>
                <TodoList
                    tasks={tasks}
                    markCompleted={markCompleted}
                    deleteTask={deleteTask}
                />
                <div className="row md-flex items-center">
                    <AddButton onClick={handleShowTrue} />
                    <br />
                    {show && (
                        <ShowAdd
                            text={text}
                            handleDescriptionChange={handleDescriptionChange}
                            handleInputChange={handleInputChange}
                            description={description}
                            addTask={addTask}
                            hideAdd={hideAdd}
                            show={show}
                            handleShowFalse={handleShowFalse}
                        />
                    )}
                </div>
                <div className="row md-flex items-center">
                <Footer />
                </div>
            </div>
        </div>
    );
};
export default Todo;