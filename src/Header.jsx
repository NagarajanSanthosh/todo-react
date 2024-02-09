import React from "react";
import SearchComponent from "./Component/SearchComponent";

const Header = ({tasks, handleSearch, searchText}) => {
    return (
        <SearchComponent tasks={tasks} handleSearch = {handleSearch} searchText={searchText}/>
    )
}
export default Header;