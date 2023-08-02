import React, { FC } from "react";
import { Outlet } from "react-router-dom";
import HeaderBll from "user.InterfaceLayer/Components/ArtemLeskin.components.bll/Header.component.bll";
import SidebarBll from "user.InterfaceLayer/Components/ArtemLeskin.components.bll/Sidebar.component.bll";

import * as ST from "./style/style";

const MainLayout: FC = () => {
    return (
        <ST.App>
		<ST.Container>
            <HeaderBll/>
        </ST.Container>
        <SidebarBll/>
        <Outlet />
	</ST.App>
    );
};

export default MainLayout;
