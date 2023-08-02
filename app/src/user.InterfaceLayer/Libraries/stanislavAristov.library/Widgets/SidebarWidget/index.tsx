// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { FC } from "react";
import { Sidebar } from "primereact/sidebar";
import { UseQuery } from "@reduxjs/toolkit/dist/query/react/buildHooks";
import { QueryDefinition } from "@reduxjs/toolkit/query";
import { NavLink } from "react-router-dom";
import { useKeycloak } from "@react-keycloak/web";

import * as ST from "./styled";
import {
	useAppDispatch,
	useAppSelector,
} from "../../../../../business.InterfaceLayer/store/services/hooks/redux";
import { sidebarActions } from "../../../../../business.InterfaceLayer/store/shared/entities/stanislavAristov.entities/sidebar.entity/redux/slice";
import { IBaseInfoUserDTO } from "../../../../../business.InterfaceLayer/store/shared/entities/stanislavAristov.entities/users.entity/services/dto/from.dto";
import UserLogo from "../../UI_KIT/Molecules/UserLogo";
import SecondaryButton from "../../UI_KIT/Molecules/SecondaryButton";
import logout from "../../assets/icons/Logout2.svg";
import stanislavAristovRoutes from "../../../../router/routes/stanislavAristov.route";
import stanislavAristovRoutesPaths from "../../../../router/routes/stanislavAristov.route/stanislavAristov.routesPaths";

const SideBarWidget: FC<{
	getMe: UseQuery<QueryDefinition<any, any, any, IBaseInfoUserDTO>>;
}> = ({ getMe }) => {
	const dispath = useAppDispatch();
	const isOpen = useAppSelector((state) => state.sidebar.isOpen);
	const { close } = sidebarActions;
	const { keycloak } = useKeycloak();
	const { data: baseInfo, isLoading } = getMe({});

	return (
		<ST.SideBarWidgetWrapper>
			<Sidebar
				visible={isOpen}
				onHide={() => dispath(close())}
			>
				<ST.SideBarContentWidgetWrapper>
					<ST.Header>
						<UserLogo
							isLoading={isLoading}
							image={baseInfo?.src ?? undefined}
						/>
					</ST.Header>
					<ST.Menu>
						<NavLink to={stanislavAristovRoutesPaths.PAYMENT}>Payment</NavLink>
						<NavLink to={stanislavAristovRoutesPaths.TRANSACTIONS}>
							Transaction
						</NavLink>
						<NavLink to={stanislavAristovRoutesPaths.CARDS}>MyCards</NavLink>
						<NavLink to={"proms"}>Promotions</NavLink>
						<NavLink to={"savings"}>Savings</NavLink>
					</ST.Menu>
					<SecondaryButton
						text={"Sign Out"}
						hasIcon={true}
						icon={logout}
						onClick={keycloak.logout}
					/>
				</ST.SideBarContentWidgetWrapper>
			</Sidebar>
		</ST.SideBarWidgetWrapper>
	);
};
export default SideBarWidget;
