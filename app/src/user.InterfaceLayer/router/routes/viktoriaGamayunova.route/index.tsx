import React, { lazy, Suspense } from "react";
import { RouteObject } from "react-router-dom";

import RoutesPaths from "../../routesPaths";
import Error from "../../../Components/general.components/Error";
// import MainLayout from "../../../Layouts/viktoriaGamayunova.layouts/Main.layout";
import viktoriaGamayunovaRoutesPaths from "./viktoriaGamayunova.routesPaths";
import Loader from "../../../Components/general.components/Loader";
import AccountPage from "../../../Pages/viktoriaGamayunova.pages/Account.page";
// import MainPage from "../../../Pages/viktoriaGamayunova.pages/Main.page";

// const MainPage = lazy(
// 	() => import("../../../Pages/viktoriaGamayunova.pages/Main.page")
// );

const SignInPage = lazy(
	() => import("../../../Pages/viktoriaGamayunova.pages/SignIn.page")
);
const ProductsPage = lazy(
	() => import("../../../Pages/viktoriaGamayunova.pages/Products.page")
);
const ProductPage = lazy(
	() => import("../../../Pages/viktoriaGamayunova.pages/Product.page")
);
const UserShopPage = lazy(
	() => import("../../../Pages/viktoriaGamayunova.pages/UserShop.page")
);

const viktoriaGamayunovaRoutes: RouteObject[] = [
	{
		path: RoutesPaths.VIKTORIA_GAMAYUNOVA,
		// ???
		// element: <MainLayout />,
		errorElement: <Error />,
		children: [
			{
				index: true,
				element: <Suspense fallback={<Loader />}>{<SignInPage />}</Suspense>,
				errorElement: <Error />,
			},
			{
				path: viktoriaGamayunovaRoutesPaths.PRODUCTS,
				element: (
					<Suspense fallback={<Loader />}>
						<ProductsPage />
					</Suspense>
				),
				errorElement: <Error />,
			},
			{
				path: `${viktoriaGamayunovaRoutesPaths.SHOP}/:id`,
				element: (
					<Suspense fallback={<Loader />}>
						<UserShopPage />
					</Suspense>
				),
				errorElement: <Error />,
			},
			{
				path: `${viktoriaGamayunovaRoutesPaths.PRODUCT}/:id`,
				element: (
					<Suspense fallback={<Loader />}>
						<ProductPage />
					</Suspense>
				),
				errorElement: <Error />,
			},
			{
				path: viktoriaGamayunovaRoutesPaths.ACCOUNT,
				element: (
					<Suspense fallback={<Loader />}>
						<AccountPage />
					</Suspense>
				),
				errorElement: <Error />,
			},
			{
				path: RoutesPaths.NOT_FOUND,
				element: <div>страницы нет</div>,
			},
			{},
		],
	},
];

export default viktoriaGamayunovaRoutes;
