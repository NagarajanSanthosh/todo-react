import React from "react";
import { SearchComponent } from "./Component/SearchComponent";

const Header = ({ tasks, setResults, results }) => {
    return (<div>
        <SearchComponent
            tasks={tasks}
            setResults={setResults} 
            />
            </div>
            
    )
}
export default Header;