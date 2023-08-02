// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { FC } from "react";
import { useKeycloak } from "@react-keycloak/web";
import { NavLink } from "react-router-dom";
import { UseQuery } from "@reduxjs/toolkit/dist/query/react/buildHooks";
import { QueryDefinition } from "@reduxjs/toolkit/query";

import logout from "../../assets/icons/Logout2.svg";
import * as ST from "./styled";
import SecondaryButton from "../../UI_KIT/Molecules/SecondaryButton";
import UserLogo from "../../UI_KIT/Molecules/UserLogo";
import { IBaseInfoUserDTO } from "../../../../../business.InterfaceLayer/store/shared/entities/stanislavAristov.entities/users.entity/services/dto/from.dto";
import UserLogoWidget from "../userLogoWidget";
import { useGetBaseInfoAboutMeQuery } from "../../../../../business.InterfaceLayer/store/shared/entities/stanislavAristov.entities/users.entity/redux/api";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SideBarContentWidget: FC<{
	getMe: UseQuery<QueryDefinition<any, any, any, IBaseInfoUserDTO>>;
}> = ({ getMe }) => {
	const { keycloak } = useKeycloak();
	const { data: baseInfo, isLoading } = getMe({});
	// eslint-disable-next-line no-console
	console.log(baseInfo?.src);

	return (
		<ST.SideBarContentWidgetWrapper>
			<ST.Header>
				<NavLink to="profile">
					<UserLogoWidget getMe={useGetBaseInfoAboutMeQuery} />
				</NavLink>
			</ST.Header>
			<ST.Menu>
				<NavLink to={"/payment"}>Payment</NavLink>
				<NavLink to={"/transaction"}>Transaction</NavLink>
				<NavLink to={"/cards"}>MyCards</NavLink>
				<NavLink to={"/proms"}>Promotions</NavLink>
				<NavLink to={"/savings"}>Savings</NavLink>
			</ST.Menu>
			<SecondaryButton
				text={"Sign Out"}
				hasIcon={true}
				icon={logout}
				onClick={keycloak.logout}
			/>
		</ST.SideBarContentWidgetWrapper>
	);
};

export default SideBarContentWidget;
