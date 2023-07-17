import { FC } from "react";

import { Icon, Icons } from "../../Atoms/Atom1/icons";
import CheckBox from "../../Atoms/Checkbox.Atom";

import "./styled/style.css";


interface ITask {
    text:string
    completed:boolean
}

const Task:FC<ITask> = ({text, completed}) => {

    return (
        <div className={completed ? "task completed" : "task"}>
            <div className='checkbox-box'>
                <CheckBox checked={completed ? true : false}/>
            </div>
            <p>
                {text}
            </p>
            <button className='btn'>
                <Icon width={18} height={18} icon={Icons.Edit} color='#000' />
            </button>
            <button className='btn'>
                <Icon width={18} height={18} icon={Icons.TrashBin} color='#F05454' />
            </button>
        </div>
    );
};

export default Task;