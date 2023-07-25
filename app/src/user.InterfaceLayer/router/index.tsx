import React, {lazy} from "react";
import { RouteObject } from "react-router-dom";

// import paymentsRoutes from "./routes/payments.route";
import RoutesPaths from "./routesPaths";
// import CheckAuth from "./services/Components/CheckAuth";
import Error from "../Components/general.components/Error";
// import BeforeAuth.layout from "../Pages/payments.pages/BeforeAuth.layout";
import AfterAuthLayout from "../Layouts/payments.layouts/AfterAuth.layout";
import OTPPage from "../Pages/payments.pages/OTP.page";
import paymentsRoutes from "./routes/payments.route";
// import CheckAuth from "./services/Components/CheckAuth";
// import LaunchScreen from "../Pages/payments.pages/LaunchScreen.page";
const CheckAuth = lazy(
	() => import("./services/Components/CheckAuth")
);
const mainRouter: RouteObject[] = [
	{
		path: RoutesPaths.MAIN,
		element: <CheckAuth/>,
		errorElement: <Error />,
		children: [...paymentsRoutes],
	},
];

export default mainRouter;
