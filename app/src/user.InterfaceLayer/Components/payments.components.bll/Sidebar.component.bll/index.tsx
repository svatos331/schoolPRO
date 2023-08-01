import React from "react";

import SideBarWidget from "../../../Libraries/payments.library/Widgets/SidebarWidget";
import { useGetBaseInfoAboutMeQuery } from "../../../../business.InterfaceLayer/store/shared/entities/payments.entities/payments.entity/redux/api";
const SidebarComponent = () => {
	return <SideBarWidget getMe={useGetBaseInfoAboutMeQuery} />;
};
export default SidebarComponent;
