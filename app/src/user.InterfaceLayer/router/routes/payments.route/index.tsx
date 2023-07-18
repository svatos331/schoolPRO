// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, {Suspense} from "react";
import {RouteObject} from "react-router-dom";

import RoutesPaths from "../../routesPaths";
import routesPaths from "../../routesPaths";
import payments from "./payments";
import BeforeAuthLayout from "../../../Layouts/payments.layouts/BeforeAuth.layout";
import Error from "../../../Components/general.components/Error";
import Loader from "../../../Components/general.components/Loader";
import AuthWidget from "../../../Libraries/payments.library/Widgets/authWidget";
import WelcomeAuth from "../../../Libraries/payments.library/Widgets/welcomeAuth";
import AfterAuthLayout from "../../../Layouts/payments.layouts/AfterAuth.layout";
import OTPPage from "../../../Pages/payments.pages/OTP.page";
import Colors from "../../../constants/colors";
import HomePage from "../../../Pages/payments.pages/Home.page";
// import RoutesPaths from "../../routesPaths";
// import Error from "../../../Components/general.components/Error";
// import MainLayout from "../../../Layouts/payments.layouts/AfterAuth.layout";
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
				path: RoutesPaths.NOT_FOUND,
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
				path: `/${RoutesPaths.MAIN}`,
				element: <HomePage/>,
			},
			{
				path: RoutesPaths.NOT_FOUND,
				element: <div>страницы нет</div>,
			},
		]
	},
	{
		path: RoutesPaths.NOT_FOUND,
		element: <div>страницы нет</div>,
	},
];

export default paymentsRoutes;
