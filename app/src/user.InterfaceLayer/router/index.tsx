import React from "react";
import { RouteObject } from "react-router-dom";

// import paymentsRoutes from "./routes/payments.route";
import RoutesPaths from "./routesPaths";
import CheckAuth from "./services/Components/CheckAuth";
import Error from "../Components/general.components/Error";

const mainRouter: RouteObject[] = [
	{
		path: RoutesPaths.MAIN,
		element: <CheckAuth />,
		errorElement: <Error />,
		// children: [...paymentsRoutes],
	},
];

export default mainRouter;
