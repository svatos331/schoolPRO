import React, {FC} from "react";

import * as ST from "./styled";
import CardsPageTitleWidget from "../../../Libraries/payments.library/Widgets/pageTitles/CardsPage.titleWidget";
import CardsBlockComponent from "../../../Components/payments.components.bll/CardsBlock.component.bll";

const CardsPage: FC = () => {
    return (
        <ST.CardsPageWrapper>
            <CardsPageTitleWidget/>
            <ST.Main>
                <CardsBlockComponent/>
            </ST.Main>
        </ST.CardsPageWrapper>
    );
};
export default CardsPage;