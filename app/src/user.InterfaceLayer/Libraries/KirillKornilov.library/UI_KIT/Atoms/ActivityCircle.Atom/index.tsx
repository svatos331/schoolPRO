import { FC } from "react";
import "./styled/style.css";

interface IActivity {
    title: string,
    number: number
}

const ActivityCircle: FC<IActivity> = ({title, number}) => {

    return (
        <div className='activity-circle'>
            <p>
                {title}
            </p>
            <div className="circle">
                <p>
                    <span>{number}</span><br/>
                    задач
                </p>
            </div>
        </div>
    );
};

export default ActivityCircle;