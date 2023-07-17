// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { lazy, Suspense } from "react";
import { RouteObject } from "react-router-dom";

// import RoutesPaths from "../../routesPaths";
// import Error from "../../../Components/general.components/Error";
// import MainLayout from "../../../Layouts/payments.layouts/Main.layout";
// import payments from "./payments";
// import Loader from "../../../Components/general.components/Loader";
//
// const LastPage = lazy(
// 	() => import("../../../Pages/payments.pages/LaunchScreen.page")
// );
//
// const MainPage = lazy(
// 	() => import("../../../Pages/payments.pages/Main.page")
// );

const paymentsRoutes: RouteObject[] = [
	{
		// path: RoutesPaths.SVYATOSLAV_ZHILIN,
		// element: <MainLayout />,
		// errorElement: <Error />,
		// children: [
		// 	{
		// 		index: true,
		// 		element: (
		// 			<Suspense fallback={<Loader />}>
		// 				<MainPage />
		// 			</Suspense>
		// 		),
		// 		errorElement: <Error />,
		// 	},
		// 	{
		// 		path: payments.LAST,
		// 		element: (
		// 			<Suspense fallback={<Loader />}>
		// 				<LastPage />
		// 			</Suspense>
		// 		),
		// 		errorElement: <Error />,
		// 	},
		// 	{
		// 		path: RoutesPaths.NOT_FOUND,
		// 		element: <div>страницы нет</div>,
		// 	},
		// ],
	},
];

export default paymentsRoutes;
