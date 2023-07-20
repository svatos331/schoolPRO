import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Text, { TextSize } from "user.InterfaceLayer/Libraries/ArtemLeskin.library/UI_KIT/Atoms/Text";
import SearchPanelBll from "user.InterfaceLayer/Components/ArtemLeskin.components.bll/SearchPanel.component.bll";
import ListCard from "user.InterfaceLayer/Components/ArtemLeskin.components.bll/ListCard.component.bll";

import cls from "./ListPage.module.css";

const ListPage: React.FC = () => {
    const a = useParams();

    const id = a.id?.split("&")[0] || a.id;
    const ganreValue = a.id?.split("&")[1] || "";

    const [order, setOrder] = useState("");
    const [ganre, setGanre] = useState(ganreValue);
    const [year, setYear] = useState("");
    const [rating, setRating] = useState("");

    const changeOrder = (value: string) => {
        setOrder(value);
    };

    const changeGanre = (value: string) => {
        setGanre(value);
    };

    const changeYear = (value: string) => {
        setYear(value);
    };

    const changeRating = (value: string) => {
        setRating(value);
    };

    // eslint-disable-next-line no-console
    console.log(a);

    return (
        <div className={cls.container}>
            <Text 
                title={id === "series"?"Сериалы":"Фильмы"} 
                className={cls.title}
                size={TextSize.XL}
            />
            <SearchPanelBll 
                chOrder={changeOrder} 
                chRating={changeRating} 
                chYear={changeYear}
                chGanre={changeGanre}
            />
            <ListCard 
                type={id === "series"?"TV_SERIES":"FILM"}
                order={order}
                ganre={ganre}
                year={year}
                rating={rating}
            />
        </div>
    );
};
export default ListPage;