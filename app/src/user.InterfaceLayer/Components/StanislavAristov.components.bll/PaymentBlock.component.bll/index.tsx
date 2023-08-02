import React from "react";

import PaymentBlock from "../../../Libraries/stanislavAristov.library/Widgets/paymentBlock";
import {
	useGetBaseInfoAboutAllQuery,
	useGetBaseInfoAboutMeQuery,
} from "../../../../business.InterfaceLayer/store/shared/entities/stanislavAristov.entities/users.entity/redux/api";
import { usePutMoneyMutation } from "../../../../business.InterfaceLayer/store/shared/entities/stanislavAristov.entities/cards.entity/redux/api";

const PaymentBlockComponent = () => {
	const selectedUserIdSelector = (state: any) => state.payments.selectedUserId;
	const paySumSelector = (state: any) => state.payments.paySum;

	return (
		<>
			<PaymentBlock
				paySumSelector={paySumSelector}
				selectedUserIdSelector={selectedUserIdSelector}
				putMoney={usePutMoneyMutation}
				getUsers={useGetBaseInfoAboutAllQuery}
				getMe={useGetBaseInfoAboutMeQuery}
			/>
		</>
	);
};

export default PaymentBlockComponent;
