import React, {FC} from "react";

import * as ST from "./styled";
import SideBarWidget from "../../../Components/general.components/sideBar";
import SideBarContentWidget from "../../../Libraries/payments.library/Widgets/sideBarContent";
import BalanceBlockComponent from "../../../Components/payments.components.bll/BallanceBlock.component.bll";
import HomePageTitleComponent from "../../../Components/payments.components.bll/HomePageTitle.component.bll";

const HomePage: FC = () => {
    return (
        <ST.HomePageWrapper>
            <SideBarWidget>
                <SideBarContentWidget/>
            </SideBarWidget>
            <HomePageTitleComponent/>
            <ST.Main>
                <BalanceBlockComponent/>
            </ST.Main>
        </ST.HomePageWrapper>
    );
};
export default HomePage;