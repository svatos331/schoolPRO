import React from "react";
import Slider from "user.InterfaceLayer/Libraries/ArtemLeskin.library/Widgets/Slider";
import { AdviceBar } from "user.InterfaceLayer/Libraries/ArtemLeskin.library/Widgets/AdviceBar";
import { RecomedPanel } from "user.InterfaceLayer/Components/ArtemLeskin.components.bll/RecomendationPanel.component.bll";
import { useGetAllMovieQuery } from "business.InterfaceLayer/store/shared/entities/artemLeskin.entities/movie.entity/redux/api";

import cls from "./MainPage.module.css";


const MainPage: React.FC = () => {

    return (
        <div className={cls.page}>
            <div className={cls.container}>
                <Slider/>
                <AdviceBar useGetAllMovieQuery={useGetAllMovieQuery}/>
                <RecomedPanel/>
            </div>
        </div>
    );
};

export default MainPage;