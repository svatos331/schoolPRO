
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, {FC} from "react";
import {Sidebar} from "primereact/sidebar";

import * as ST from "../styled";
import {ISideBarWidgetProps} from "../type";
import {useAppDispatch, useAppSelector} from "../../../../../business.InterfaceLayer/store/services/hooks/redux";
import {
    sidebarActions
} from "../../../../../business.InterfaceLayer/store/shared/entities/payments.entities/sidebar.entity/redux/slice";
const SideBarWidget :FC<ISideBarWidgetProps>= ({children}) => {
    const dispath = useAppDispatch();
    const isOpen = useAppSelector(state => state.sidebar.isOpen);
    const {close, pickOpen} = sidebarActions;

    return (<ST.SideBarWidgetWrapper>
        <Sidebar  visible={isOpen} onHide={() => dispath(close())}>
            {children}
        </Sidebar>
    </ST.SideBarWidgetWrapper>);
};
export default SideBarWidget;