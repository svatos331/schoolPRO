import React from "react";

import SideBarWidget from "../../../Libraries/stanislavAristov.library/Widgets/SidebarWidget";
import { useGetBaseInfoAboutMeQuery } from "../../../../business.InterfaceLayer/store/shared/entities/stanislavAristov.entities/users.entity/redux/api";
const SidebarComponent = () => {
	return <SideBarWidget getMe={useGetBaseInfoAboutMeQuery} />;
};
export default SidebarComponent;
