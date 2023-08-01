import React, { lazy, Suspense } from "react";
import { RouteObject } from "react-router-dom";

import routesPaths from "../../routesPaths";
import stanislavAristovRoutesPaths from "./stanislavAristov.routesPaths";
import Error from "../../../Components/general.components/Error";
import Loader from "../../../Components/general.components/Loader";
import AfterAuthLayout from "../../../Layouts/stanislavAristov.layouts/AfterAuth.layout";
import Colors from "../../../constants/colors/index";
const CardsPage = lazy(
	() => import("../../../Pages/AristovStanislav.pages/Cards.page")
);
const ProfilePage = lazy(
	() => import("../../../Pages/AristovStanislav.pages/Profile.page")
);
const PaymentPage = lazy(
	() => import("../../../Pages/AristovStanislav.pages/Payment.page")
);
// const OTPPage = lazy(
// 	() => import("../../../Pages/AristovStanislav.pages/OTP.page/index")
// );
const HomePage = lazy(
	() => import("../../../Pages/AristovStanislav.pages/Home.page")
);
const stanislavAristovRoutes: RouteObject[] = [
	// {
	// 	// path: routesPaths.STANISLAV_ARISTOV,
	// 	// element: <BeforeAuthLayout />,
	// 	// errorElement: <Error />,
	// 	// children: [
	// 	// 	// {
	// 	// 	// 	path: `/${stanislavAristovRoutesPaths.AUTH}`,
	// 	// 	// 	element: (
	// 	// 	// 		<Suspense fallback={<Loader />}>
	// 	// 	// 			<WelcomeAuth />
	// 	// 	// 		</Suspense>
	// 	// 	// 	),
	// 	// 	// 	errorElement: <Error />,
	// 	// 	// },
	// 	// 	// {
	// 	// 	// 	path: stanislavAristovRoutesPaths.SIGNIN,
	// 	// 	// 	index: true,
	// 	// 	// 	element: (
	// 	// 	// 		<Suspense fallback={<Loader />}>
	// 	// 	// 			<AuthWidget title={"Sign in"} />
	// 	// 	// 		</Suspense>
	// 	// 	// 	),
	// 	// 	// 	errorElement: <Error />,
	// 	// 	// },
	// 	// 	// {
	// 	// 	// 	path: stanislavAristovRoutesPaths.SIGNUP,
	// 	// 	// 	index: true,
	// 	// 	// 	element: (
	// 	// 	// 		<Suspense fallback={<Loader />}>
	// 	// 	// 			<AuthWidget title={"Sign up"} />
	// 	// 	// 		</Suspense>
	// 	// 	// 	),
	// 	// 	// 	errorElement: <Error />,
	// 	// 	// },
	// 	// 	{
	// 	// 		path: routesPaths.NOT_FOUND,
	// 	// 		element: <div>страницы нет</div>,
	// 	// 	},
	// 	// ],
	// },
	// {
	// 	path: `/${stanislavAristovRoutesPaths.AUTH}`,
	// 	element: <AfterAuthLayout />,
	// 	errorElement: <Error />,
	// 	children: [
	// 		{
	// 			index: true,
	// 			path: `${stanislavAristovRoutesPaths.OTP}`,
	// 			element: (
	// 				<Suspense fallback={<Loader />}>
	// 					<OTPPage />
	// 				</Suspense>
	// 			),
	// 		},
	// 	],
	// },
	// {
	// 	path: `/${stanislavAristovRoutesPaths.AUTH}/${stanislavAristovRoutesPaths.CREATINPROFILE}`,
	// 	element: <AfterAuthLayout />,
	// 	errorElement: <Error />,
	// 	children: [
	// 		{
	// 			index: true,
	// 			path: `/${stanislavAristovRoutesPaths.AUTH}/${stanislavAristovRoutesPaths.CREATINPROFILE}`,
	// 			element: (
	// 				<Suspense fallback={<Loader />}>
	// 					<Error />
	// 				</Suspense>
	// 			),
	// 		},
	// 	],
	// },
	{
		path: routesPaths.STANISLAV_ARISTOV,
		element: <AfterAuthLayout bgc={Colors.WHITE} />,
		errorElement: <Error />,
		children: [
			{
				// path: `/${routesPaths.STANISLAV_ARISTOV}`,
				element: (
					<Suspense fallback={<Loader />}>
						<HomePage />
					</Suspense>
				),
				index: true,
			},
			{
				path: `/${stanislavAristovRoutesPaths.CARDS}`,
				element: (
					<Suspense fallback={<Loader />}>
						<CardsPage />
					</Suspense>
				),
				index: true,
			},
			{
				path: `/${stanislavAristovRoutesPaths.PAYMENT}`,
				element: (
					<Suspense fallback={<Loader />}>
						<PaymentPage />
					</Suspense>
				),
				index: true,
			},
			{
				path: `/${stanislavAristovRoutesPaths.PROFILE}`,
				element: (
					<Suspense fallback={<Loader />}>
						<ProfilePage />
					</Suspense>
				),
				index: true,
			},
			{ path: routesPaths.NOT_FOUND, element: <div>страницы нет</div> },
		],
	},
	{ path: routesPaths.NOT_FOUND, element: <div>страницы нет</div> },
];
export default stanislavAristovRoutes;
