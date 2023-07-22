import ActivityCircle from "../../Atoms/ActivityCircle.Atom";
import * as S from "./styled";

const Activity = () => {

    return (
        <S.activity>
            <ActivityCircle title='Создано' number={113} />
            <ActivityCircle title='Завершено' number={97} />
            <ActivityCircle title='Удалено' number={14} />
        </S.activity>
    );
};

export default Activity;