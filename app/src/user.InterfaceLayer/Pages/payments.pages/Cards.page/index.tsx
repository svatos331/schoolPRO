import React, {FC} from "react";

import * as ST from "./styled";
import {useAppDispatch} from "../../../../business.InterfaceLayer/store/services/hooks/redux";
import {
    sidebarActions
} from "../../../../business.InterfaceLayer/store/shared/entities/payments.entities/sidebar.entity/redux/slice";
import SideBarWidget from "../../../Components/general.components/sideBar";
import SideBarContentWidget from "../../../Libraries/payments.library/Widgets/sideBarContent";
import BalanceBlockComponent from "../../../Components/payments.components.bll/BallanceBlock.component.bll";
import HomePageTitleComponent from "../../../Components/payments.components.bll/HomePageTitle.component.bll";
import CardsPageTitleWidget from "../../../Libraries/payments.library/Widgets/pageTitles/CardsPage.titleWidget";
import CardsBlockComponent from "../../../Components/payments.components.bll/CardsBlock.component.bll";

const HomePage: FC = () => {
    const dispatch = useAppDispatch();
    const {open} = sidebarActions;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    // const {keycloak} = useKeycloak();
    // eslint-disable-next-line no-console
    // eslint-disable-next-line no-console

    return (
        <ST.CardsPageWrapper>
            <CardsPageTitleWidget/>
            <ST.Main>
                <CardsBlockComponent/>
            </ST.Main>
        </ST.CardsPageWrapper>
    );
};
export default HomePage;