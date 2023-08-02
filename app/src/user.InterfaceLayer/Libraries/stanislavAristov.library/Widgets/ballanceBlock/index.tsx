import React, { FC } from "react";
import { styled } from "styled-components";
import { UseQuery } from "@reduxjs/toolkit/dist/query/react/buildHooks";
import { QueryDefinition } from "@reduxjs/toolkit/query";

import arrow from "../../assets/icons/arrow/nonstraingt/SmallArrow.svg";
import BalanceWidget from "./modules/ballanceWidget";
import {
	IBalanceUserResponse,
	IUserDTO,
} from "../../../../../business.InterfaceLayer/store/shared/entities/stanislavAristov.entities/payments.entity/services/dto/from.dto";
import { CheckBalance } from "../../../../Pages/AristovStanislav.pages/Home.page/style";
import PrimaryButton from "../../UI_KIT/Molecules/PrimaryButton";
import * as ST from "./styled/index";
import { useGetMeQuery } from "../../../../../business.InterfaceLayer/store/shared/entities/stanislavAristov.entities/payments.entity/redux/api";
import { IBaseInfoUserDTO } from "../../../../../business.InterfaceLayer/store/shared/entities/stanislavAristov.entities/users.entity/services/dto/from.dto";

const BalanceBlock: FC<{
	getMe: UseQuery<QueryDefinition<any, any, any, IBaseInfoUserDTO>>;
}> = ({ getMe }) => {
	return (
		<ST.BalanceBlock>
			<ST.TotalBalance>
				<BalanceWidget getMe={getMe} />
			</ST.TotalBalance>
			<CheckBalance>
				<PrimaryButton
					height={"150px"}
					width={"100%"}
					text={"Check Your Account Balance"}
					hasIcon={true}
					icon={arrow}
					contentposition={"between"}
				/>
			</CheckBalance>
		</ST.BalanceBlock>
	);
};

export default BalanceBlock;
