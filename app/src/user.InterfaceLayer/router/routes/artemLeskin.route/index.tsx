import React, { Suspense } from "react";
import { RouteObject } from "react-router-dom";
import MainLayout from "user.InterfaceLayer/Layouts/ArtemLeskin.layouts/Main.layout";

import RoutesPaths from "../../routesPaths";
import Error from "../../../Components/general.components/Error";
import Loader from "../../../Components/general.components/Loader";
import artemLeskinRoutesPaths from "./artemLeskin.routesPaths";
import { MainPage } from "../../../Pages/ArtemLeskin.pages/Main.page";
import { MoviePage } from "../../../Pages/ArtemLeskin.pages/Movie.page";
import { ListPage } from "../../../Pages/ArtemLeskin.pages/List.page";
import { CreatePage } from "../../../Pages/ArtemLeskin.pages/Create.page";



const artemLeskinRoutes: RouteObject[] = [
	{
		path: RoutesPaths.ARTEM_LESKIN,
		element: <MainLayout />,
		errorElement: <Error />,
		children: [
			{
				index: true,
				element: (
					<Suspense fallback={<Loader />}>
						<MainPage/>
					</Suspense>
				),
				errorElement: <Error />,
			},
			{
				path: `${artemLeskinRoutesPaths.LIST}:id`,
				element: (
					<Suspense fallback={<Loader />}>
						<ListPage/>
					</Suspense>
				),
				errorElement: <Error />,
			},
			{
				path: `${artemLeskinRoutesPaths.MOVIE}:id`,
				element: (
					<Suspense fallback={<Loader />}>
						<MoviePage/>
					</Suspense>
				),
				errorElement: <Error />,
			},
			{
				path: artemLeskinRoutesPaths.CREATE,
				element: (
					<Suspense fallback={<Loader />}>
						<CreatePage/>
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
];

export default artemLeskinRoutes;
