import React, { FC, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { store } from "../../../../business.InterfaceLayer/store";
import { IUserEnum } from "../../../../business.InterfaceLayer/store/shared/entities/viktoriaGamayunova.entities/user.entity/redux/slice";
import RoutesPaths from "../../../router/routesPaths";
import Header from "../../../Libraries/viktoriaGamayunova.library/Widgets/Header";
import Footer from "../../../Libraries/viktoriaGamayunova.library/Widgets/Footer";
import { useAppSelector } from "../../../../business.InterfaceLayer/store/services/hooks/redux";

const ProductPage: FC = () => {
	const navigate = useNavigate();

	useEffect(() => {
		if (store.getState().user[IUserEnum.id] === 0) {
			navigate(RoutesPaths.VIKTORIA_GAMAYUNOVA);
		}
	}, []);
	// получаем параметры
	const prodId = Number(useParams().id);
	const productInfo = useAppSelector(
		(state) => state.product.allProducts
	).filter((product) => product.id == prodId)[0];

	return (
		<div>
			<Header />
			{/*<ProductComponents />*/}
			{JSON.stringify(productInfo)}
			<Footer />
		</div>
	);
};

export default ProductPage;
