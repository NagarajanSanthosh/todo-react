import React from "react";
const SearchComponent = ({tasks, handleSearch, searchText}) => {
    const filteredTasks = tasks.filter(task => {
        task.text.toLowerCase().includes(searchText.toLowerCase())
    });
    const handleSearchSubmit = () => {

    }
    return (
    <div className='pulse  header max-w-md mx-auto rounded-xl shadow-lg overflow-hidden md:max-w-2xl mb-2'>
            <div className="relative flex items-center text-gray w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
                

                <input
                    className=" m-2 peer h-full w-full outline-none text-sm text-gray-700 pr-2"
                    type="text"
                    id="search"
                    placeholder="Search tasks.."
                    onChange={handleSearch}
                    />
                <button onClick={handleSearchSubmit}>
                <div className="grid place-items-center h-full w-12  text-gray-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            
                </div></button>
            </div>
        </div>
)
}
export default SearchComponent;