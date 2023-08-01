import React, { FC } from "react";

import * as ST from "./style/styled";
import PaymentPageTitleWidget from "../../../Libraries/payments.library/Widgets/pageTitles/PaymentPage.titleWidget";
import PaymentBlockComponent from "../../../Components/payments.components.bll/PaymentBlock.component.bll";

const PaymentPage: FC = () => {
	return (
		<ST.CardsPageWrapper>
			<PaymentPageTitleWidget />
			<ST.Main>
				<PaymentBlockComponent />
			</ST.Main>
		</ST.CardsPageWrapper>
	);
};
export default PaymentPage;
