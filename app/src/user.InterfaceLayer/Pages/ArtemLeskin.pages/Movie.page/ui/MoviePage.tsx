import React from "react";
import { useParams } from "react-router-dom";
import Info from "user.InterfaceLayer/Components/ArtemLeskin.components.bll/Info.component.bll";
import SimilarPanel from "user.InterfaceLayer/Components/ArtemLeskin.components.bll/SimilarPanel.component.bll";

import cls from "./MoviePage.module.css";



const MoviePage: React.FC = () => {
    const {id} = useParams();

    return (
        <div className={cls.page}>
            <Info id={id || ""}/>
            <div className={cls.container}>
                <SimilarPanel id={id || ""}/>
            </div>
        </div>
    );
};

export default MoviePage;