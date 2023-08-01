import React from "react";
import { styled } from "styled-components";

import {
	useGetBaseInfoAboutAllQuery,
	useGetBaseInfoAboutMeQuery,
	usePutMoneyMutation,
} from "../../../../business.InterfaceLayer/store/shared/entities/stanislavAristov.entities/payments.entity/redux/api";
import PaymentBlock from "../../../Libraries/stanislavAristov.library/Widgets/paymentBlock";

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
