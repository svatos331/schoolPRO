import React, { FunctionComponent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import * as ST from "../styled/index";
import RoutesPaths from "../../../../../router/routesPaths";
import { AccSideP } from "../../../UI_KIT/Atoms/AccSideP";
import { useAppSelector } from "../../../../../../business.InterfaceLayer/store/services/hooks/redux";
import { IUserEnum } from "../../../../../../business.InterfaceLayer/store/shared/entities/viktoriaGamayunova.entities/user.entity/redux/slice";

const ModuleSide: FunctionComponent<any> = () => {
	const [active, setActive] = useState({
		actHome: "false",
		actSettings: "true",
		actLogout: "false",
	});
	const navigate = useNavigate();

	const editActiveHome = () => {
		setActive({ actHome: "true", actSettings: "false", actLogout: "false" });
	};
	const editActiveSettings = () => {
		setActive({ actHome: "false", actSettings: "true", actLogout: "false" });
	};
	const editActiveLogout = () => {
		setActive({ actHome: "false", actSettings: "false", actLogout: "true" });
		navigate(RoutesPaths.VIKTORIA_GAMAYUNOVA);
	};

	return (
		<ST.moduleDivLeft>
			<ST.HomeSettingsDiv>
				<ST.ImgDiv
					active={active.actHome}
					onClick={editActiveHome}
				>
					<ST.HomeImg />
					<Link
						to={`/viktoriaGamayunova/shop/${useAppSelector(
							(state) => state.user[IUserEnum.id]
						)}`}
					>
						<AccSideP text={"Home"} />
					</Link>
				</ST.ImgDiv>
				<ST.ImgDiv
					active={active.actSettings}
					onClick={editActiveSettings}
				>
					<ST.SettingsImg />
					<AccSideP text={"Settings"} />
				</ST.ImgDiv>
			</ST.HomeSettingsDiv>
			<ST.ImgDiv
				active={active.actLogout}
				onClick={editActiveLogout}
			>
				<ST.LogoutImg />
				<AccSideP text={"Log out"} />
			</ST.ImgDiv>
		</ST.moduleDivLeft>
	);
};

export default ModuleSide;
