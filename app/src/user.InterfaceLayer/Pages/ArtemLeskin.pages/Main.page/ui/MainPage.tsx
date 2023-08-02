import React from "react";
import Slider from "user.InterfaceLayer/Libraries/ArtemLeskin.library/Widgets/Slider";
import RecomedPanel from "user.InterfaceLayer/Components/ArtemLeskin.components.bll/RecomendationPanel.component.bll";
import AdviceBarBll from "user.InterfaceLayer/Components/ArtemLeskin.components.bll/AdviceBar.component.bll";

import * as ST from "../style/style";


const MainPage: React.FC = () => {

    return (
        <ST.Page>
            <ST.Container>
                <Slider/>
                <AdviceBarBll/>
                <RecomedPanel/>
            </ST.Container>
        </ST.Page>
    );
};

export default MainPage;