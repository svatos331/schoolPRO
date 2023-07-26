import React, { FC, useState } from "react";
import { Header } from "user.InterfaceLayer/Libraries/ArtemLeskin.library/Widgets/Header";
import { Outlet } from "react-router-dom";
import Sidebar from "user.InterfaceLayer/Libraries/ArtemLeskin.library/UI_KIT/Molecules/Sidebar";

import * as ST from "./style/style";

const MainLayout: FC = () => {
    const [isActive, setIsActive] = useState(false);

    const changeActive = () => {
        setIsActive(!isActive);
    };

    return (
        <ST.App>
		<ST.Container>
            <Header changeActive={changeActive} isActive={!isActive}/>
        </ST.Container>
        <Sidebar isActive={isActive}/>
        <Outlet />
	</ST.App>
    );
};

export default MainLayout;
