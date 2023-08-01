import React, { lazy, Suspense } from "react";
import { RouteObject } from "react-router-dom";
import routesPaths from "../../routesPaths";
import payments from "./payments";
import BeforeAuthLayout from "../../../Layouts/payments.layouts/BeforeAuth.layout";
import Error from "../../../Components/general.components/Error";
import Loader from "../../../Components/general.components/Loader";
import AuthWidget from "../../../Libraries/payments.library/Widgets/authWidget";
import WelcomeAuth from "../../../Libraries/payments.library/Widgets/welcomeAuth";
import AfterAuthLayout from "../../../Layouts/payments.layouts/AfterAuth.layout";
import Colors from "../../../constants/colors/index";
import ProfilePage from "../../../Pages/payments.pages/Profile.page";
import MainPage from "../../../Pages/payments.pages/Main.page";

const CardsPage = lazy(
	() => import("../../../Pages/payments.pages/Cards.page")
);
const PaymentPage = lazy(
	() => import("../../../Pages/payments.pages/Payment.page")
);
const OTPPage = lazy(
	() => import("../../../Pages/payments.pages/OTP.page/index")
);
const HomePage = lazy(() => import("../../../Pages/payments.pages/Home.page"));
const paymentsRoutes: RouteObject[] = [
	{
		path: payments.AUTH,
		element: <BeforeAuthLayout />,
		errorElement: <Error />,
		children: [
			{
				path: `/${payments.AUTH}`,
				element: (
					<Suspense fallback={<Loader />}>
						<WelcomeAuth />
					</Suspense>
				),
				errorElement: <Error />,
			},
			{
				path: payments.SIGNIN,
				index: true,
				element: (
					<Suspense fallback={<Loader />}>
						<AuthWidget title={"Sign in"} />
					</Suspense>
				),
				errorElement: <Error />,
			},
			{
				path: payments.SIGNUP,
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
		path: `/${payments.AUTH}`,
		element: <AfterAuthLayout />,
		errorElement: <Error />,
		children: [
			{
				index: true,
				path: `${payments.OTP}`,
				element: (
					<Suspense fallback={<Loader />}>
						<OTPPage />
					</Suspense>
				),
			},
		],
	},
	{
		path: `/${payments.AUTH}/${payments.CREATINPROFILE}`,
		element: <AfterAuthLayout />,
		errorElement: <Error />,
		children: [
			{
				index: true,
				path: `/${payments.AUTH}/${payments.CREATINPROFILE}`,
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
