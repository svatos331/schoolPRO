import React, { FC } from "react";
import {Outlet} from "react-router-dom";
import {MainLayoutWrapper} from "../../SvyatoslavZhilin.layouts/Main.layout/styled";
import Header from "../../../Libraries/ElenaBokova.library/Widgets/Header";


const MainLayout: FC = () => (
    <MainLayoutWrapper>
        <Header />
        <Outlet/>
    </MainLayoutWrapper>
);

export default MainLayout;