import React from "react";

const DeleteButton = ({ onClick }) => {
  return (
    <button
      className="font-semibold ml-10 bg-gray-200 flex-items hover:bg-tindogPink text-tindogPink hover:text-gray-200 py-2 px-4 rounded-full"
      onClick={onClick}
    >
      X
    </button>
  );
};

export default DeleteButton;
