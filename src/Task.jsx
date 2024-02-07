import React from "react";
const Task = ({ text, description, completed }) => {
    return (
        
        <div className={completed ? "line-through text-orange-300 mb-2 mr-2" : " mb-2 mr-2"}>
            <p className="ml-6 tracking-wide md:flex text-lg uppercase font-bold">
                {text}
            </p>
            <p className="ml-6 font-light text-sm text-black italic">
                {description}
            </p>
            
        </div>
        
    );
};

export default Task;