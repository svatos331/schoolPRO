import React from "react";
import { useParams } from "react-router-dom";
import Text, { TextSize } from "user.InterfaceLayer/Libraries/ArtemLeskin.library/UI_KIT/Atoms/Text";
import SearchPanelBll from "user.InterfaceLayer/Components/ArtemLeskin.components.bll/SearchPanel.component.bll";
import ListCard from "user.InterfaceLayer/Components/ArtemLeskin.components.bll/ListCard.component.bll";

import cls from "./ListPage.module.css";

const ListPage: React.FC = () => {
    const {id} = useParams();

    return (
        <div className={cls.container}>
            <Text 
                title={id === "series"?"Сериалы":"Фильмы"} 
                className={cls.title}
                size={TextSize.XL}
            />
            <SearchPanelBll/>
            <ListCard type={id === "series"?"TV_SERIES":"FILM"} />
        </div>
    );
};
export default ListPage;