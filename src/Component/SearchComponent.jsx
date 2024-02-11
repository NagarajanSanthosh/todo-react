import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
export const SearchComponent = ({ tasks, setResults }) => {
    const [input, setInput] = useState('');
    const filterData = (value) => {
        const results = tasks.filter((task) => {
            return value && task && task.text && task.text.toLowerCase().includes(value.toLowerCase());
        });

        setResults(results);
        console.log(results);
    };
    const handleChange = (value) => {
        setInput(value);
        filterData(value);
    }
    return (
        <div>
            <div className='input-wrapper bg-white w-full rounded-lg h-10 shadow-md flex items-center'>
                <FaSearch className='m-2 text-tindogPink' id='search-icon' />

                <input
                    className='bg-transparent border-none h-full text-lg w-full ml-2 focus:outline-none'
                    placeholder='Search text...'
                    value={input}
                    onChange={(e) => handleChange(e.target.value)}
                />
            </div>
            
        </div>
    )
}
