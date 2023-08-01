import { useAppSelector } from "business.InterfaceLayer/store/services/hooks/redux";
import React, { memo } from "react";
import Sidebar from "user.InterfaceLayer/Libraries/ArtemLeskin.library/UI_KIT/Molecules/Sidebar";

const SidebarBll = () => {
    const isActive = useAppSelector((state) => state.sidebarMovie.isActive);

    return (
        <Sidebar isActive={isActive}/>
    );
};

export default memo(SidebarBll);