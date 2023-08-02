import React from "react";

import HomePageTitleWidget from "../../../Libraries/stanislavAristov.library/Widgets/pageTitles/HomePage.titleWidget";
import { sidebarActions } from "../../../../business.InterfaceLayer/store/shared/entities/stanislavAristov.entities/sidebar.entity/redux/slice";
import { useAppDispatch } from "../../../../business.InterfaceLayer/store/services/hooks/redux";
import { useGetBaseInfoAboutMeQuery } from "../../../../business.InterfaceLayer/store/shared/entities/stanislavAristov.entities/users.entity/redux/api";

const HomePageTitleComponent = () => {
	const dispatch = useAppDispatch();
	const { pickOpen } = sidebarActions;

	return (
		<HomePageTitleWidget
			openFunc={() => dispatch(pickOpen())}
			getMe={useGetBaseInfoAboutMeQuery}
		/>
	);
};

export default HomePageTitleComponent;
