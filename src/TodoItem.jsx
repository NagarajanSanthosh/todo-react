import React from "react";
import './index.css';
import './checkbox.css'

const TodoItem = (
    {
        task,
        markCompleted,
        deleteTask
    }) => {
    const handleCheckbox = () => {
        markCompleted(task.id);
    };
    return (
        <div className=" slide-left m-5">
            <div className="max-w-md mx-auto rounded-xl shadow-lg overflow-hidden md:max-w-2xl mb-2">
                <div className="bg-gray-200 text-tindogPink md-flex">

                    <div className="p-8">
                        <div className="row">
                            <label className=" relative flex items-center p-3 -mt-5 rounded-full cursor-pointer" htmlFor={`checkbox-${task.id}`}>
                                <input
                                    id={`checkbox-${task.id}`}
                                    type="checkbox"
                                    checked={task.completed}
                                    onChange={handleCheckbox}
                                    className="mr-2 md:flex custom-checkbox"
                                />
                                <div className={task.completed ? "line-through text-orange-300 mr-2" : "mr-2"}>
                                    <p className="ml-6 tracking-wide md:flex text-lg uppercase  font-bold" >{task.text}</p>
                                    <p className="ml-6 font-light text-sm text-black italic">{task.description}</p>
                                </div>

                                <div className="flex items-center">
                                    <button
                                        className="font-semibold ml-10 bg-gray-200 flex-items hover:bg-tindogPink text-tindogPink hover:text-gray-200 py-2 px-4 rounded-full"
                                        onClick={() => deleteTask(task.id)}>
                                        X
                                    </button>
                                </div>
                            </label>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};
export default TodoItem;