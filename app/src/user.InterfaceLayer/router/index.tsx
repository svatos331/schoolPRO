import React from "react";
import { RouteObject } from "react-router-dom";

import kirillKornilovRoutesRoutes from "./routes/KirillKornilov.route";
import RoutesPaths from "./routesPaths";
import CheckAuth from "./services/Components/CheckAuth";
import Error from "../Components/general.components/Error";

const mainRouter: RouteObject[] = [
	{
		path: RoutesPaths.MAIN,
		element: <CheckAuth />,
		errorElement: <Error />,
		children: [...kirillKornilovRoutesRoutes],
	},
];

export default mainRouter;
