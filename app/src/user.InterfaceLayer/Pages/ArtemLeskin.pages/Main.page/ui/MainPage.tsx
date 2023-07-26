import React from "react";
import Slider from "user.InterfaceLayer/Libraries/ArtemLeskin.library/Widgets/Slider";
import { AdviceBar } from "user.InterfaceLayer/Libraries/ArtemLeskin.library/Widgets/AdviceBar";
import { RecomedPanel } from "user.InterfaceLayer/Components/ArtemLeskin.components.bll/RecomendationPanel.component.bll";
import { useGetAllMovieQuery } from "business.InterfaceLayer/store/shared/entities/artemLeskin.entities/movie.entity/redux/api";

import * as ST from "../style/style";


const MainPage: React.FC = () => {

    return (
        <ST.Page>
            <ST.Container>
                <Slider/>
                <AdviceBar useGetAllMovieQuery={useGetAllMovieQuery}/>
                <RecomedPanel/>
            </ST.Container>
        </ST.Page>
    );
};

export default MainPage;