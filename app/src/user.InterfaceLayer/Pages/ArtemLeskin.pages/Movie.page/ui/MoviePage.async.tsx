import { lazy } from "react";

export const MoviePageAsync = lazy(
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
	() => import("./MoviePage")
);