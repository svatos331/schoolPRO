import React from "react";
import Slider from "user.InterfaceLayer/Libraries/ArtemLeskin.library/Widgets/Slider";
import { AdviceBar } from "user.InterfaceLayer/Libraries/ArtemLeskin.library/Widgets/AdviceBar";
import { RecomedPanel } from "user.InterfaceLayer/Components/ArtemLeskin.components.bll/RecomendationPanel.component.bll";

import cls from "./MainPage.module.css";


const MainPage: React.FC = () => {

    return (
        <div className={cls.page}>
            <div className={cls.container}>
                <Slider/>
                <AdviceBar/>
                <RecomedPanel/>
            </div>
        </div>
    );
};

export default MainPage;