import React from "react";
import { RouteObject } from "react-router-dom";

// import paymentsRoutes from "./routes/payments.route";
import RoutesPaths from "./routesPaths";
// import CheckAuth from "./services/Components/CheckAuth";
import Error from "../Components/general.components/Error";
import WelcomeBackPage from "../Pages/payments.pages/WelcomeBackPage";
import MainLayout from "../Layouts/payments.layouts/Main.layout";
// import LaunchScreen from "../Pages/payments.pages/LaunchScreen.page";

const mainRouter: RouteObject[] = [
	{
		path: RoutesPaths.MAIN,

		element: <MainLayout><WelcomeBackPage/></MainLayout>,
		errorElement: <Error />,
		// children: [...paymentsRoutes],
	},
];

export default mainRouter;
