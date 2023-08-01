import React from "react";
import { styled } from "styled-components";
import { UseQuery } from "@reduxjs/toolkit/dist/query/react/buildHooks";
import { QueryDefinition } from "@reduxjs/toolkit/query";

import { useGetBaseInfoAboutMeQuery } from "../../../../business.InterfaceLayer/store/shared/entities/payments.entities/payments.entity/redux/api";
import BalanceBlock from "../../../Libraries/stanislavAristov.library/Widgets/ballanceBlock";

const BalanceBlockComponent = () => {
	return (
		<>
			<BalanceBlock getMe={useGetBaseInfoAboutMeQuery} />
		</>
	);
};

export default BalanceBlockComponent;
