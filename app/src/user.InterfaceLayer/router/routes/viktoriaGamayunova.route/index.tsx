import React, { lazy, Suspense } from "react";
import { RouteObject } from "react-router-dom";

import RoutesPaths from "../../routesPaths";
import Error from "../../../Components/general.components/Error";
import MainLayout from "../../../Layouts/viktoriaGamayunova.layouts/Main.layout";
import viktoriaGamayunovaRoutesPaths from "./viktoriaGamayunova.routesPaths";
import Loader from "../../../Components/general.components/Loader";
// import MainPage from "../../../Pages/viktoriaGamayunova.pages/Main.page";

const LastPage = lazy(
	() => import("../../../Pages/viktoriaGamayunova.pages/Last.page")
);

// const MainPage = lazy(
// 	() => import("../../../Pages/viktoriaGamayunova.pages/Main.page")
// );

const SignInPage = lazy(
	() => import("../../../Pages/viktoriaGamayunova.pages/SignIn.page")
);

const viktoriaGamayunovaRoutes: RouteObject[] = [
	{
		path: RoutesPaths.VIKTORIA_GAMAYUNOVA,
		// ???
		element: <MainLayout />,
		errorElement: <Error />,
		children: [
			{
				index: true,
				element: <Suspense fallback={<Loader />}>{/*<MainPage />*/}</Suspense>,
				errorElement: <Error />,
			},
			{
				path: viktoriaGamayunovaRoutesPaths.LAST,
				element: (
					<Suspense fallback={<Loader />}>
						<LastPage />
					</Suspense>
				),
				errorElement: <Error />,
			},
			{
				path: viktoriaGamayunovaRoutesPaths.SIGN_IN,
				element: (
					<Suspense fallback={<Loader />}>
						<SignInPage />
						{/*<MainPage />*/}
					</Suspense>
				),
				errorElement: <Error />,
			},
			{
				path: RoutesPaths.NOT_FOUND,
				element: <div>страницы нет</div>,
			},
		],
	},
];

export default viktoriaGamayunovaRoutes;
