import React from "react";
import { RouteObject } from "react-router-dom";
import artemLeskinRoutes from "user.InterfaceLayer/router/routes/artemLeskin.route";

import svyatoslavZhilinRoutes from "./routes/svyatoslavZhilin.route";
import RoutesPaths from "./routesPaths";
import ivanKosteevRoutes from "./routes/ivanKosteev.route";
import Error from "../Components/general.components/Error";
import kirillKornilovRoutesRoutes from "./routes/KirillKornilov.route";
import CheckAuth from "./services/Components/CheckAuth";

const mainRouter: RouteObject[] = [
	{
		path: RoutesPaths.MAIN,
		element: <CheckAuth />,
		errorElement: <Error />,
<<<<<<< HEAD
		children: [...svyatoslavZhilinRoutes, ...artemLeskinRoutes],
=======
		children: [...svyatoslavZhilinRoutes , ...ivanKosteevRoutes, ...kirillKornilovRoutesRoutes],
>>>>>>> kirillKornilov/task-1
	},
];

export default mainRouter;
