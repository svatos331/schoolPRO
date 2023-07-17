import ActivityCircle from "../../Atoms/ActivityCircle.Atom";
import "./styled/style.css";

const Activity = () => {

    return (
        <div className="activity">
            <ActivityCircle title='Создано' number={113} />
            <ActivityCircle title='Завершено' number={97} />
            <ActivityCircle title='Удалено' number={14} />
        </div>
    );
};

export default Activity;