import React, { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../../../Libraries/viktoriaGamayunova.library/Widgets/Header";
// import Footer from "../../../Libraries/viktoriaGamayunova.library/Widgets/Footer";
import AccountComponent from "../../../Components/viktoriaGamayunova.components.bll/AccountComponent.component.bll";
import { store } from "../../../../business.InterfaceLayer/store";
import { IUserEnum } from "../../../../business.InterfaceLayer/store/shared/entities/viktoriaGamayunova.entities/user.entity/redux/slice";
import RoutesPaths from "../../../router/routesPaths";

const AccountPage: FC = () => {
	const navigate = useNavigate();

	useEffect(() => {
		if (store.getState().user[IUserEnum.id] == 0) {
			navigate(RoutesPaths.VIKTORIA_GAMAYUNOVA);
		}
	}, []);

	return (
		<div>
			<Header />
			<AccountComponent />
			{/*<Footer />*/}
		</div>
	);
};

export default AccountPage;
