import React, { FC } from "react";
import { UseQuery } from "@reduxjs/toolkit/dist/query/react/buildHooks";
import { QueryDefinition } from "@reduxjs/toolkit/query";

import arrow from "../../assets/icons/arrow/nonstraingt/SmallArrow.svg";
import BalanceWidget from "./modules/ballanceWidget";
import { CheckBalance } from "../../../../Pages/AristovStanislav.pages/Home.page/style";
import PrimaryButton from "../../UI_KIT/Molecules/PrimaryButton";
import * as ST from "./styled/index";
import { IBaseInfoUserDTO } from "../../../../../business.InterfaceLayer/store/shared/entities/stanislavAristov.entities/users.entity/services/dto/from.dto";
import { IBalanceUserResponse } from "../../../../../business.InterfaceLayer/store/shared/entities/stanislavAristov.entities/cards.entity/services/dto/from.dto";

const BalanceBlock: FC<{
	getTotalBalance: UseQuery<
		QueryDefinition<any, any, any, IBalanceUserResponse>
	>;
}> = ({ getTotalBalance }) => {
	return (
		<ST.BalanceBlock>
			<ST.TotalBalance>
				<BalanceWidget getTotalBalance={getTotalBalance} />
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
