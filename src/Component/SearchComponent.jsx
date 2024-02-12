import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";
import './SearchComponent.css'

export const SearchComponent = ({ tasks }) => {
    const [input, setInput] = useState('');
    const [results, setResults] = useState([]);

    const filterData = (value) => {
        const filteredResults = tasks.filter((task) => {
            return value && task && task.text && task.text.toLowerCase().includes(value.toLowerCase());
        });

        setResults(filteredResults);
    };

    const handleChange = (value) => {
        setInput(value);
        filterData(value);
    }

    return (
        <div className="max-w-md mx-auto rounded-xl shadow-lg overflow-hidden md:max-w-2xl mb-2">
            <div className="bg-gray-200 text-tindogPink">
                <div className='input-wrapper'>
                    <FaSearch id='search-icon' />
                    <input
                        className='input'
                        placeholder='Search text...'
                        value={input}
                        onChange={(e) => handleChange(e.target.value)}
                    />
                </div>
            </div>
            <div className='results-list'>
                {results.map((result, index) => (
                    <div className='search-result' key={index}>
                        <p>{result.text}</p>
                    </div>
                ))}
            </div>

        </div>

    )
}
