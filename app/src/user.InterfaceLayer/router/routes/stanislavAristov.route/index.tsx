import React, { lazy, startTransition, Suspense } from "react";
import { RouteObject } from "react-router-dom";

import routesPaths from "../../routesPaths";
import stanislavAristovRoutesPaths from "./stanislavAristov.routesPaths";
import Error from "../../../Components/general.components/Error";
import Loader from "../../../Components/general.components/Loader";
import Colors from "../../../constants/colors/index";

const CardsPage = lazy(
	() => import("../../../Pages/AristovStanislav.pages/Cards.page")
);
const AfterAuthLayout = lazy(
	() => import("../../../Layouts/stanislavAristov.layouts/AfterAuth.layout")
);
const ProfilePage = lazy(
	() => import("../../../Pages/AristovStanislav.pages/Profile.page")
);
const PaymentPage = lazy(
	() => import("../../../Pages/AristovStanislav.pages/Payment.page")
);

const HomePage = lazy(
	() => import("../../../Pages/AristovStanislav.pages/Home.page")
);
const stanislavAristovRoutes: RouteObject[] = [
	{
		path: routesPaths.STANISLAV_ARISTOV,
		element: (
			<Suspense fallback={<Loader />}>
				<AfterAuthLayout bgc={Colors.WHITE} />
			</Suspense>
		),
		errorElement: <Error />,
		children: [
			{
				element: (
					<Suspense fallback={<Loader />}>
						<HomePage />
					</Suspense>
				),
				index: true,
			},
			{
				path: stanislavAristovRoutesPaths.CARDS,
				element: (
					<Suspense fallback={<Loader />}>
						<CardsPage />
					</Suspense>
				),
				index: true,
			},
			{
				path: stanislavAristovRoutesPaths.PAYMENT,
				element: (
					<Suspense fallback={<Loader />}>
						<PaymentPage />
					</Suspense>
				),
				index: true,
			},
			{
				path: stanislavAristovRoutesPaths.PROFILE,
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
