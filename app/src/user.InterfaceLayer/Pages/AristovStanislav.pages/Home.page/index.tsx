import React, { FC } from "react";

import * as ST from "./style";
import BalanceBlockComponent from "../../../Components/StanislavAristov.components.bll/BallanceBlock.component.bll";
import HomePageTitleComponent from "../../../Components/StanislavAristov.components.bll/HomePageTitle.component.bll";
import SidebarComponent from "../../../Components/StanislavAristov.components.bll/Sidebar.component.bll";

const HomePage: FC = () => {
	return (
		<ST.HomePageWrapper>
			<SidebarComponent />
			<HomePageTitleComponent />
			<ST.Main>
				<BalanceBlockComponent />
			</ST.Main>
		</ST.HomePageWrapper>
	);
};
export default HomePage;
