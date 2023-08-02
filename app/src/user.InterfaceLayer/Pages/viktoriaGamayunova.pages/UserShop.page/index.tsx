import React, { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// import ProductComponents from "../../../Components/viktoriaGamayunova.components.bll/ProductComponents.component.bll";
import { store } from "../../../../business.InterfaceLayer/store";
import { IUserEnum } from "../../../../business.InterfaceLayer/store/shared/entities/viktoriaGamayunova.entities/user.entity/redux/slice";
import RoutesPaths from "../../../router/routesPaths";
import Header from "../../../Libraries/viktoriaGamayunova.library/Widgets/Header";
import Footer from "../../../Libraries/viktoriaGamayunova.library/Widgets/Footer";
// import { useAppSelector } from "../../../../business.InterfaceLayer/store/services/hooks/redux";
import ShopComponents from "../../../Components/viktoriaGamayunova.components.bll/ShopComponents.component.bll";

const UserShop: FC = () => {
	const navigate = useNavigate();

	useEffect(() => {
		if (store.getState().user[IUserEnum.id] === 0) {
			navigate(RoutesPaths.VIKTORIA_GAMAYUNOVA);
		}
	}, []);
	// const Id = Number(useParams().id);
	// const userInfo = useAppSelector((state) => state.user.allUsers).filter(
	// 	(user) => user.id == Id
	// )[0];

	return (
		<p>
			<Header />
			{/*<ProductComponents />*/}
			{/*user_shop {JSON.stringify(userInfo)}*/}
			{/*user_shop {userInfo.username}*/}
			<ShopComponents />
			<Footer />
		</p>
	);
};

export default UserShop;
