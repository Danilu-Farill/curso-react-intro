import { FaCheck } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";
import './../style/TodoIcon.css';

const iconTypes = {
    "check": (color) => <FaCheck fill={color}/>,
    "delete": (color) => <MdOutlineDelete fill={color}/>
}

function TodoIcon(props) {
    return (
        <span className={`Icon Icon-${props.type}`} onClick={props.onClick}>
            {iconTypes[props.type](props.color)}
        </span>
    )
    
};

export { TodoIcon };