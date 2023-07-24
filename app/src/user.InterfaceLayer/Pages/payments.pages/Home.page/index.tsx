import React, {FC} from "react";
import {Outlet} from "react-router-dom";

import menuLogo from "../../../Libraries/payments.library/assets/icons/HamburgerMenu.svg";
import * as ST from "./styled";
import IconElement from "../../../Libraries/payments.library/UI_KIT/Atoms/IconElement";
import Button from "../../../Libraries/payments.library/UI_KIT/Atoms/Button";
import {useAppDispatch} from "../../../../business.InterfaceLayer/store/services/hooks/redux";
import {
    sidebarActions
} from "../../../../business.InterfaceLayer/store/shared/entities/payments.entities/sidebar.entity/redux/slice";
import SideBarWidget from "../../../Components/general.components/sideBar";
import SideBarContentWidget from "../../../Libraries/payments.library/Widgets/sideBarContent";
import Typography_Montserrat_Normal
    from "../../../Libraries/payments.library/UI_KIT/Molecules/Typographies/Montserrat/Normal";
import EFontClasses from "../../../constants/fontsClasses";
import Colors from "../../../constants/colors";
import BalanceBlockComponent from "../../../Components/payments.components.bll/BallanceBlock.component.bll";
import HomePageTitleComponent from "../../../Components/payments.components.bll/HomePageTitle.component.bll";

const HomePage: FC = () => {
    const dispatch = useAppDispatch();
    const {open} = sidebarActions;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    // const {keycloak} = useKeycloak();
    // eslint-disable-next-line no-console
    // eslint-disable-next-line no-console

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