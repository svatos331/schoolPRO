// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, {lazy, Suspense} from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {RouteObject} from "react-router-dom";

import routesPaths from "../../routesPaths";
import payments from "./payments";
import BeforeAuthLayout from "../../../Layouts/payments.layouts/BeforeAuth.layout";
import Error from "../../../Components/general.components/Error";
import Loader from "../../../Components/general.components/Loader";
import AuthWidget from "../../../Libraries/payments.library/Widgets/authWidget";
import WelcomeAuth from "../../../Libraries/payments.library/Widgets/welcomeAuth";
import AfterAuthLayout from "../../../Layouts/payments.layouts/AfterAuth.layout";
import Colors from "../../../constants/colors/index";
import CardsPage from "../../../Pages/payments.pages/Cards.page";
import PaymentPage from "../../../Pages/payments.pages/Payment.page";

// const CardsPage = lazy(
// 	() => import("../../../Pages/payments.pages/Cards.page")
// );
const OTPPage = lazy(
	() => import("../../../Pages/payments.pages/OTP.page/index")
);
const HomePage = lazy(
	() => import("../../../Pages/payments.pages/Home.page")
);
const paymentsRoutes: RouteObject[] = [
	{
		path: payments.AUTH,
		element: <BeforeAuthLayout/>,
		errorElement: <Error/>,
		children: [
			{
				path:`/${payments.AUTH}`,
				element: (
					<Suspense fallback={<Loader />}>
						<WelcomeAuth/>
					</Suspense>
				),
				errorElement: <Error />,
			},
			{
				path:payments.SIGNIN,
				index: true,
				element: (
					<Suspense fallback={<Loader />}>
						<AuthWidget title={"Sign in"}/>
					</Suspense>
				),
				errorElement: <Error />,
			},
			{
				path:payments.SIGNUP,
				index: true,
				element: (
					<Suspense fallback={<Loader />}>
						<AuthWidget title={"Sign up"}/>
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
		path:`/${payments.AUTH}`,
		element: <AfterAuthLayout/>,
		errorElement: <Error />,
		children:[
			{
				index:true,
				path: `${payments.OTP}`,
				element: (
					<Suspense fallback={<Loader />}>
						<OTPPage/>
					</Suspense>
				),
			},


		],

	},
	{
		path:`/${payments.AUTH}/${payments.CREATINPROFILE}`,
		element: <AfterAuthLayout/>,
		errorElement: <Error />,
		children:[
			{
				index:true,
				path: `/${payments.AUTH}/${payments.CREATINPROFILE}`,
				element: (
					<Suspense fallback={<Loader />}>
						<div>1</div>
					</Suspense>
				),
			},


		],

	},
	{
		path: routesPaths.MAIN,
		element: <AfterAuthLayout bgc={Colors.WHITE}/>,
		errorElement: <Error/>,
		children:[
			{
				path: `/${routesPaths.MAIN}`,
				element: <HomePage/>,
				index:true
			},
			{
				path: `/${routesPaths.CARDS}`,
				element: <CardsPage/>,
				index:true
			},
			{
				path: `/${routesPaths.PAYMENT}`,
				element: <PaymentPage/>,
				index:true
			},
			{
				path: routesPaths.NOT_FOUND,
				element: <div>страницы нет</div>,
			},
		]
	},
	{
		path: routesPaths.NOT_FOUND,
		element: <div>страницы нет</div>,
	},
];

export default paymentsRoutes;
