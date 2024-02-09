import React from "react";

const ShowAdd = ({
  text,
  handleDescriptionChange,
  handleInputChange,
  description,
  addTask,
  hideAdd,
}) => {
  return (
    <div className="slide-up m-5">
      <div className="max-w-md mx-auto rounded-xl shadow-lg overflow-hidden md:max-w-2xl mb-2">
        <div className="bg-gray-200 text-tindogPink md-flex">
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-todoPink font-semibold">
              Todo
            </div>
            <div className="block mt-1 w-full">
              <input
                type="text"
                value={text}
                onChange={handleInputChange}
                placeholder="task"
                className="w-full rounded-full bg-gray-100 border border-gray-200 py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-400"
              />
            </div>
            <div className="block mt-1 w-full">
              <input
                type="text"
                value={description}
                onChange={handleDescriptionChange}
                placeholder="Description"
                className="w-full bg-gray-100 border border-gray-200 rounded-full py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-400"
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-tindogPink hover:bg-tindogPink text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
                type="button"
                onClick={addTask}
              >
                Add
              </button>
              <button
                className="font-bold py-2 px-4 rounded"
                type="button"
                onClick={hideAdd}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowAdd;
