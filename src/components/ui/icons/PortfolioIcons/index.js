import { ReactComponent as DownloadIconSVG} from '../../../../assets/icons/download-icon.svg';
import './PortfolioIcons.css';

const iconTypes = {
    "downloadIcon": <DownloadIconSVG className='icon'/>, 
};

const titleIcons = {
    "downloadIcon": "", 
};

const classIcons = {
    "downloadIcon": "download-icon", 
};


function PortfolioIcons({ type, fill, cursorPointer, onClick }){
    const cursorPointerIcon = cursorPointer ? "cursor-pointer" : '';

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