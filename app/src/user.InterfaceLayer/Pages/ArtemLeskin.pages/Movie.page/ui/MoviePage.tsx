import React from "react";
import { useParams } from "react-router-dom";
import Info from "user.InterfaceLayer/Components/ArtemLeskin.components.bll/Info.component.bll";
import SimilarPanel from "user.InterfaceLayer/Components/ArtemLeskin.components.bll/SimilarPanel.component.bll";

import * as ST from "../style/style";



const MoviePage: React.FC = () => {
    const {id} = useParams();

    return (
        <ST.Page>
            <Info id={id || ""}/>
            <ST.Container>
                <SimilarPanel id={id || ""}/>
            </ST.Container>
        </ST.Page>
    );
};

export default MoviePage;