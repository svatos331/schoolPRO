import React, { FC } from "react";

import * as ST from "./style";
import CardsPageTitleWidget from "../../../Libraries/payments.library/Widgets/pageTitles/CardsPage.titleWidget";
import CardsBlockComponent from "../../../Components/payments.components.bll/CardsBlock.component.bll";
import { useGetBaseInfoAboutMeQuery } from "../../../../business.InterfaceLayer/store/shared/entities/payments.entities/payments.entity/redux/api";

const CardsPage: FC = () => {
	return (
		<ST.CardsPageWrapper>
			<CardsPageTitleWidget getMe={useGetBaseInfoAboutMeQuery} />
			<ST.Main>
				<CardsBlockComponent />
			</ST.Main>
		</ST.CardsPageWrapper>
	);
};
export default CardsPage;
