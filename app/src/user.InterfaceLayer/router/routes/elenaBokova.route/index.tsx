import React, { lazy, Suspense } from "react";
import { RouteObject } from "react-router-dom";

import RoutesPaths from "../../routesPaths";
import Error from "../../../Components/general.components/Error";
import MainLayout from "../../../Layouts/ElenaBokova.layouts/Main.layout";
import elenaBokovaRoutesPaths from "./elenaBokova.routesPaths";
import Loader from "../../../Components/general.components/Loader";

const MainPage = lazy(
    () => import("../../../Pages/ElenaBokova.pages/Main.page")
);

const FavoritePage = lazy(
    () => import("../../../Pages/ElenaBokova.pages/Favorite.page")
);

const CartPage = lazy(
    () => import("../../../Pages/ElenaBokova.pages/Cart.page")
);

const AuthPage = lazy(
    () => import("../../../Pages/ElenaBokova.pages/Auth.page")
);

const elenaBokovaRoutes: RouteObject[] = [
    {
        path: RoutesPaths.ELENA_BOKOVA,
        element: <MainLayout />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: (
                    <Suspense fallback={<Loader />}>
                        <MainPage />
                    </Suspense>
                ),
                errorElement: <Error />,
            },
            {
                path: elenaBokovaRoutesPaths.FAVORITE,
                element: (
                    <Suspense fallback={<Loader />}>
                        <FavoritePage />
                    </Suspense>
                ),
                errorElement: <Error />,
            },
            {
                path: elenaBokovaRoutesPaths.CART,
                element: (
                    <Suspense fallback={<Loader />}>
                        <CartPage />
                    </Suspense>
                ),
                errorElement: <Error />,
            },
            {
                path: elenaBokovaRoutesPaths.AUTH,
                element: (
                    <Suspense fallback={<Loader />}>
                        <AuthPage />
                    </Suspense>
                ),
                errorElement: <Error />,
            },
            {
                path: RoutesPaths.NOT_FOUND,
                element: <div>Page not found</div>,
            },
        ],
    },
];

export default elenaBokovaRoutes;
