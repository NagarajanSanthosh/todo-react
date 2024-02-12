import React from "react";
import { SearchComponent } from "./Component/SearchComponent";

const Header = ({ tasks}) => {
    return (<div>
        <SearchComponent
            tasks={tasks}
            />
            </div>
            
    )
}
export default Header;