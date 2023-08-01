import React, { lazy } from "react";
import { RouteObject } from "react-router-dom";

import RoutesPaths from "./routesPaths";
import Error from "../Components/general.components/Error";
import svyatoslavZhilinRoutes from "./routes/svyatoslavZhilin.route";
import stanislavAristovRoutesPaths from "./routes/stanislavAristov.route/stanislavAristov.routesPaths";

const CheckAuth = lazy(() => import("./services/Components/CheckAuth"));
const mainRouter: RouteObject[] = [
	{
		path: RoutesPaths.MAIN,
		element: <CheckAuth />,
		errorElement: <Error />,
		children: [...svyatoslavZhilinRoutes, ...stanislavAristovRoutesPaths],
	},
];

export default mainRouter;
