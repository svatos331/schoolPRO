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
import {
    useGetBalanceQuery
} from "../../../../business.InterfaceLayer/store/shared/entities/payments.entities/payments.entity/redux/api";

const HomePage: FC = () => {
    const dispatch = useAppDispatch();
    const {open} = sidebarActions;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    // const {keycloak} = useKeycloak();
    // eslint-disable-next-line no-console
    const {data} = useGetBalanceQuery();

    return (
        <ST.HomePageWrapper>
            <SideBarWidget>
                <SideBarContentWidget/>
            </SideBarWidget>
            <ST.Menu>

                <Button
                    onClick={() => {
                        // eslint-disable-next-line no-console
                        dispatch(open());
                    }}
                    text={
                        <IconElement src={menuLogo}/>
                    }
                />

            </ST.Menu>
            <main>
                <Outlet/>
            </main>


        </ST.HomePageWrapper>
    );
};
export default HomePage;