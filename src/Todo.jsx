import React, { useEffect, useState } from "react";
import "./index.css";
import AddButton from "./AddButton";
import ShowAdd from "./ShowAdd";
import TodoList from "./TodoList";
import Footer from "./Footer";
import axios from 'axios';
const Todo = () => {
    const [tasks, setTask] = useState([]);
    let newTask;
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
    const addTask = async () => {
        let changeId = id + 1;
        newTask = {
            id: changeId,
            text,
            description,
            completed: false,
        };
        try {
            const response = await axios.post('http://localhost:5555/api/tasks', newTask, {
                headers: {
                    'Content-Type': 'application/json',
                }
            })
        }
        catch (error) {
            console.error('Error occurred', error);
        }
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

    const hideAdd = () => {
        setShow(false);
    };
    useEffect(() => {
        axios.get('http://localhost:5555/api/tasks')
            .then(response => {
                const tasksData = response.data;
                setTask(tasksData);
                const latestId = tasksData.reduce((maxId, task) => Math.max(maxId, task.id), 0);
                setId(latestId);
            });
    }, [])
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