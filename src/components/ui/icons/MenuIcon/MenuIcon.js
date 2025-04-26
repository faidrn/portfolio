import React from "react";
import { PortfolioIcons } from "../PortfolioIcons";

function MenuIcon ({ onCollapseMenuClick }){
    return (
        <PortfolioIcons 
            type="delete" 
            fill="red" 
            cursorPointer=""
            onClick={onCollapseMenuClick}
        />
    );
}

export { MenuIcon };