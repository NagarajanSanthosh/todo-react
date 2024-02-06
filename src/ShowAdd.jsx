import React from "react";
import './index.css';

const ShowAdd = ({
  handleDescriptionChange,
  handleInputChange,
  text,
  description,
  addTask,
  hideAdd,
  handleShowFalse,
  show,

}) => {
  const handleAddTask = () => {
    addTask();
    hideAdd();
  }
  return (
    <div className={show === false ? "slide-down max-w-md mx-auto rounded-xl shadow-md overflow-hidden md:max-w-2xl bg-gray-200 sm:mt-2" : "slide-up max-w-md mx-auto rounded-xl shadow-md overflow-hidden md:max-w-2xl bg-gray-200 sm:mt-2"}>
      <div className="md:flex bg-gray-200 max-w-md mx-auto rounded-xl shadow-lg overflow-hidden md:max-w-2xl mb-2">
        <div className="pl-8">
          <div className="uppercase tracking-wide md:flex text-sm text-tindogPink font-bold p-2">
            Todo
          </div>
          <div className="row">
            <input className="m-2 text-slate-500 p-2"
              type="text"
              value={text}
              onChange={handleInputChange}
              placeholder="task"
            />
            <input className=" text-slate-500 p-2 m-2"
              type="text"
              value={description}
              onChange={handleDescriptionChange}
              placeholder="description"
            />
            <div className="mt-2">
              <button className=" item-start justify-start  bg-tindogPink hover:bg-tindogPink text-gray-200 py-2 px-4 rounded-full m-2 mr-50 md:mr-5 font-semibold"
                onClick={handleShowFalse}>Cancel
              </button>
              <button className="justify-end  bg-tindogPink hover:bg-tindogPink text-gray-200 py-2 px-4 rounded-full m-2 font-semibold"
                onClick={handleAddTask}>Add</button>
            </div>
          </div>



        </div>
      </div>
    </div>
  )
}
export default ShowAdd;