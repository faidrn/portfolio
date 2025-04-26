import { ReactComponent as CollapsseIconSVG } from '../../../../assets/icons/collapse-menu.svg'
import './PortfolioIcons.css';

const iconTypes = {
    "collapseMenuIcon": <CollapsseIconSVG className='icon'/>, 
};

const titleIcons = {
    "collapseMenuIcon": "", 
};

const classIcons = {
    "collapseMenuIcon": "", 
};


function PortfolioIcons({ type, fill, cursorPointer, onClick }){
    let cursorPointerIcon = (cursorPointer) ? 
        cursorPointerIcon = "cursor-pointer" : 
        cursorPointerIcon = '';

    return (
        <span 
            className={`icon-fill-${fill} ${classIcons[type]} ${cursorPointerIcon}`}
            title={titleIcons[type]}
            onClick={onClick}
        >
            {iconTypes[type]}
        </span>
    );
}

export { PortfolioIcons };