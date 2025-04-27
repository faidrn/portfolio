import React from "react";
import { PortfolioIcons } from './PortfolioIcons';

function DownloadIcon ({ onDownload }){
    return (
        <PortfolioIcons 
            type="downloadIcon" 
            fill="white" 
            cursorPointer="" 
            onClick={onDownload}
        />
    );
}

export { DownloadIcon };