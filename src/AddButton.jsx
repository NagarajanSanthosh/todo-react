import React from "react";

const AddButton = ({ onClick }) => {
  return (
    <button
      className="mb-2 bg-gray-200  text-tindogPink font-bold py-2 px-4 rounded-full inline-flex items-center"
      onClick={onClick}
    >
      +
    </button>
  );
};

export default AddButton;