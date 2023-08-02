import React from "react";
import { useParams } from "react-router-dom";
import ListCard from "user.InterfaceLayer/Components/ArtemLeskin.components.bll/ListCard.component.bll";
import PageTitle from "user.InterfaceLayer/Libraries/ArtemLeskin.library/Widgets/PageTitle";

import * as ST from "../style/style";

const ListPage: React.FC = () => {
    const {id} = useParams();

    return (
        <ST.Container>
            <PageTitle
                title={id === "series"?"Сериалы":"Фильмы"} 
            />
            <ListCard 
                type={id === "series"?"TV_SERIES":"FILM"}
            />
        </ST.Container>
    );
};
export default ListPage;