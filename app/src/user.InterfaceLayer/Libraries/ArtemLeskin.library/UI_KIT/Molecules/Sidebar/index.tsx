import React, { memo } from "react";
import NavItem from "user.InterfaceLayer/Libraries/ArtemLeskin.library/UI_KIT/Atoms/NavItem";
import { headerRoute } from "user.InterfaceLayer/Libraries/ArtemLeskin.library/Widgets/Header/const/index";
import { SidebarI } from "user.InterfaceLayer/Libraries/ArtemLeskin.library/UI_KIT/Molecules/Sidebar/type";

import * as ST from "./style/style";

const Sidebar: React.FC<SidebarI> = (props: SidebarI) => {
    const {isActive} = props;

    return (
    <ST.Sidebar isActive={isActive}>
        {headerRoute.map(({link, text}) => <NavItem key={link} text={text} link={link}/>)}
    </ST.Sidebar>
  );
};

export default memo(Sidebar);