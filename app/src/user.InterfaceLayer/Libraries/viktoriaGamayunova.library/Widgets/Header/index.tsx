import React, { FunctionComponent } from "react";

import * as ST from "./styled/styled";
import { TitleSite } from "../../UI_KIT/Atoms/TitleSite";
import { HeaderNavMolecule } from "../../UI_KIT/Molecules/headerNav.molecule";
import { useAppSelector } from "../../../../../business.InterfaceLayer/store/services/hooks/redux";
import { IUserEnum } from "../../../../../business.InterfaceLayer/store/shared/entities/viktoriaGamayunova.entities/user.entity/redux/slice";

const Header: FunctionComponent = () => {
	return (
		<ST.header>
			<ST.myLink to={"/viktoriaGamayunova/products"}>
				<TitleSite />
			</ST.myLink>
			<HeaderNavMolecule
				username={useAppSelector((state) => state.user[IUserEnum.username])}
				userImg={useAppSelector((state) => state.user[IUserEnum.avatar])}
			/>
		</ST.header>
	);
};

export default Header;
