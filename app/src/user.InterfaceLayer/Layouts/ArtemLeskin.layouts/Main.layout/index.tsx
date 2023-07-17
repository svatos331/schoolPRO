import React, { FC } from "react";
import { Header } from "user.InterfaceLayer/Libraries/ArtemLeskin.library/Widgets/Header";
import { Outlet } from "react-router-dom";

import cls from "./MainLayout.module.css";

const MainLayout: FC = () => (
	<div className={cls.app}>
		<div className={cls.container}>
            <Header/>
        </div>
        <Outlet />
	</div>
);

export default MainLayout;
