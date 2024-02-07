import React from "react";

const Checkbox = ({ id, checked, onChange }) => {
    return (
        <input
            id={`checkbox-${id}`}
            type="checkbox"
            checked={checked}
            onChange={onChange}
            className="mr-2 ml-4 justify-center items-center md:flex checkbox"
        />
    );
};

export default Checkbox;