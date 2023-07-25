import React, {FC} from "react";

import * as ST from "./styled";
import SideBarWidget from "../../../Components/general.components/sideBar";
import BalanceBlockComponent from "../../../Components/payments.components.bll/BallanceBlock.component.bll";
import HomePageTitleComponent from "../../../Components/payments.components.bll/HomePageTitle.component.bll";
import SideBarContentComponent from "../../../Components/payments.components.bll/SideBarContent.component.bll";

const HomePage: FC = () => {
    return (
        <ST.HomePageWrapper>
            <SideBarWidget>
                <SideBarContentComponent/>
            </SideBarWidget>
            <HomePageTitleComponent/>
            <ST.Main>
                <BalanceBlockComponent/>
            </ST.Main>
        </ST.HomePageWrapper>
    );
};
export default HomePage;