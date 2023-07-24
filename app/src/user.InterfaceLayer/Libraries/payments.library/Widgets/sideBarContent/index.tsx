
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, {FC} from "react";
import {useKeycloak} from "@react-keycloak/web";
import {NavLink} from "react-router-dom";

import logout from "../../assets/icons/Logout2.svg";
import * as ST from "./styled";
import UserLogo from "../../UI_KIT/Molecules/UserLogo";
import SecondaryButton from "../../UI_KIT/Molecules/SecondaryButton";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SideBarContentWidget :FC= () => {
    const {keycloak} = useKeycloak();

    return (<ST.SideBarContentWidgetWrapper>
        <ST.Header>
            <UserLogo/>
        </ST.Header>
        <ST.Menu>
            <NavLink to={"payment"}>Payment</NavLink>
            <NavLink to={"transaction"}>Transaction</NavLink>
            <NavLink to={"cards"}>MyCards</NavLink>
            <NavLink to={"proms"}>Promotions</NavLink>
            <NavLink to={"savings"}>Savings</NavLink>
        </ST.Menu>
        <SecondaryButton 
            text={"Logout"} 
            hasIcon={true} 
            icon={logout}
            onClick={keycloak.logout}
        />
    </ST.SideBarContentWidgetWrapper>);
};

export default SideBarContentWidget;