import React from "react";
import { useParams } from "react-router-dom";
import Text, { TextSize } from "user.InterfaceLayer/Libraries/ArtemLeskin.library/UI_KIT/Atoms/Text";
import ListCard from "user.InterfaceLayer/Components/ArtemLeskin.components.bll/ListCard.component.bll";

import * as ST from "./style/style";
import cls from "./ListPage.module.css";

const ListPage: React.FC = () => {
    const a = useParams();
    const id = a.id?.split("&")[0] || a.id;
    const ganreValue = a.id?.split("&")[1] || "";

    return (
        <ST.Container>
            <Text 
                title={id === "series"?"Сериалы":"Фильмы"} 
                className={cls.title}
                size={TextSize.XL}
            />
            <ListCard 
                type={id === "series"?"TV_SERIES":"FILM"}
                ganre={ganreValue || ""}
            />
        </ST.Container>
    );
};
export default ListPage;