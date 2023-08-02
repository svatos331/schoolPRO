import React from "react";

import BalanceBlock from "../../../Libraries/stanislavAristov.library/Widgets/ballanceBlock";
import { useGetTotalBalanceQuery } from "../../../../business.InterfaceLayer/store/shared/entities/stanislavAristov.entities/cards.entity/redux/api";

const BalanceBlockComponent = () => {
	return (
		<>
			<BalanceBlock getTotalBalance={useGetTotalBalanceQuery} />
		</>
	);
};

export default BalanceBlockComponent;
