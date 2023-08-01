import React, { lazy, Suspense } from "react";
import { RouteObject } from "react-router-dom";
import routesPaths from "../../routesPaths";
import stanislavAristovRoutesPaths from "./stanislavAristov.routesPaths";
import BeforeAuthLayout from "../../../Layouts/stanislavAristov.layouts/BeforeAuth.layout";
import Error from "../../../Components/general.components/Error";
import Loader from "../../../Components/general.components/Loader";
import AuthWidget from "../../../Libraries/payments.library/Widgets/authWidget";
import WelcomeAuth from "../../../Libraries/payments.library/Widgets/welcomeAuth";
import AfterAuthLayout from "../../../Layouts/stanislavAristov.layouts/AfterAuth.layout";
import Colors from "../../../constants/colors/index";
import ProfilePage from "../../../Pages/AristovStanislav.pages/Profile.page";
import MainPage from "../../../Pages/AristovStanislav.pages/Main.page";

const CardsPage = lazy(
	() => import("../../../Pages/AristovStanislav.pages/Cards.page")
);
const PaymentPage = lazy(
	() => import("../../../Pages/AristovStanislav.pages/Payment.page")
);
const OTPPage = lazy(
	() => import("../../../Pages/AristovStanislav.pages/OTP.page/index")
);
const HomePage = lazy(
	() => import("../../../Pages/AristovStanislav.pages/Home.page")
);
const paymentsRoutes: RouteObject[] = [
	{
		path: stanislavAristovRoutesPaths.AUTH,
		element: <BeforeAuthLayout />,
		errorElement: <Error />,
		children: [
			{
				path: `/${stanislavAristovRoutesPaths.AUTH}`,
				element: (
					<Suspense fallback={<Loader />}>
						<WelcomeAuth />
					</Suspense>
				),
				errorElement: <Error />,
			},
			{
				path: stanislavAristovRoutesPaths.SIGNIN,
				index: true,
				element: (
					<Suspense fallback={<Loader />}>
						<AuthWidget title={"Sign in"} />
					</Suspense>
				),
				errorElement: <Error />,
			},
			{
				path: stanislavAristovRoutesPaths.SIGNUP,
				index: true,
				element: (
					<Suspense fallback={<Loader />}>
						<AuthWidget title={"Sign up"} />
					</Suspense>
				),
				errorElement: <Error />,
			},

			{
				path: routesPaths.NOT_FOUND,
				element: <div>страницы нет</div>,
			},
		],
	},
	{
		path: `/${stanislavAristovRoutesPaths.AUTH}`,
		element: <AfterAuthLayout />,
		errorElement: <Error />,
		children: [
			{
				index: true,
				path: `${stanislavAristovRoutesPaths.OTP}`,
				element: (
					<Suspense fallback={<Loader />}>
						<OTPPage />
					</Suspense>
				),
			},
		],
	},
	{
		path: `/${stanislavAristovRoutesPaths.AUTH}/${stanislavAristovRoutesPaths.CREATINPROFILE}`,
		element: <AfterAuthLayout />,
		errorElement: <Error />,
		children: [
			{
				index: true,
				path: `/${stanislavAristovRoutesPaths.AUTH}/${stanislavAristovRoutesPaths.CREATINPROFILE}`,
				element: (
					<Suspense fallback={<Loader />}>
						<Error />
					</Suspense>
				),
			},
		],
	},
	{
		path: routesPaths.MAIN,
		element: <AfterAuthLayout bgc={Colors.WHITE} />,
		errorElement: <Error />,
		children: [
			{
				path: `/${routesPaths.MAIN}`,
				element: (
					<Suspense fallback={<Loader />}>
						<HomePage />
					</Suspense>
				),
				index: true,
			},
			{
				path: `/${routesPaths.CARDS}`,
				element: (
					<Suspense fallback={<Loader />}>
						<CardsPage />
					</Suspense>
				),
				index: true,
			},
			{
				path: `/${routesPaths.PAYMENT}`,
				element: (
					<Suspense fallback={<Loader />}>
						<PaymentPage />
					</Suspense>
				),
				index: true,
			},
			{
				path: `/${routesPaths.PROFILE}`,
				element: (
					<Suspense fallback={<Loader />}>
						<ProfilePage />
					</Suspense>
				),
				index: true,
			},
			{
				path: "/main",
				element: (
					<Suspense fallback={<Loader />}>
						<MainPage />
					</Suspense>
				),
				index: true,
			},
			{
				path: routesPaths.NOT_FOUND,
				element: <div>страницы нет</div>,
			},
		],
	},
	{
		path: routesPaths.NOT_FOUND,
		element: <div>страницы нет</div>,
	},
];

export default paymentsRoutes;
