import React, { FC } from "react";

import * as ST from "./style";
import CardsPageTitleWidget from "../../../Libraries/stanislavAristov.library/Widgets/pageTitles/CardsPage.titleWidget";
import CardsBlockComponent from "../../../Components/StanislavAristov.components.bll/CardsBlock.component.bll";
import { useGetBaseInfoAboutMeQuery } from "../../../../business.InterfaceLayer/store/shared/entities/aristovStanislav.entities/payments.entity/redux/api";

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
