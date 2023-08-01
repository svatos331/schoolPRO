import React, { lazy } from "react";
import { RouteObject } from "react-router-dom";

import RoutesPaths from "./routesPaths";
import Error from "../Components/general.components/Error";
import paymentsRoutes from "./routes/stanislavAristov.route";

const CheckAuth = lazy(() => import("./services/Components/CheckAuth"));
const mainRouter: RouteObject[] = [
	{
		path: RoutesPaths.MAIN,
		element: <CheckAuth />,
		errorElement: <Error />,
		children: [...paymentsRoutes],
	},
];

export default mainRouter;
