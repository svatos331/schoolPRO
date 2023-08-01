import React, { FC } from "react";

import * as ST from "./style";
import BalanceBlockComponent from "../../../Components/payments.components.bll/BallanceBlock.component.bll";
import HomePageTitleComponent from "../../../Components/payments.components.bll/HomePageTitle.component.bll";
import SidebarComponent from "../../../Components/payments.components.bll/Sidebar.component.bll";

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
