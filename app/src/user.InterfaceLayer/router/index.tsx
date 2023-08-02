import React from "react";
import { RouteObject } from "react-router-dom";
import artemLeskinRoutes from "user.InterfaceLayer/router/routes/artemLeskin.route";

import RoutesPaths from "./routesPaths";
import Error from "../Components/general.components/Error";
import svyatoslavZhilinRoutes from "./routes/svyatoslavZhilin.route";
import ivanKosteevRoutes from "./routes/ivanKosteev.route";
import CheckAuth from "./services/Components/CheckAuth";

const mainRouter: RouteObject[] = [
	{
		path: RoutesPaths.MAIN,
		element: <CheckAuth />,
		errorElement: <Error />,
		children: [...svyatoslavZhilinRoutes, ...ivanKosteevRoutes, ...artemLeskinRoutes],
	},
];

export default mainRouter;
