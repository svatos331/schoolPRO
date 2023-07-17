import { lazy } from "react";

export const ListPageAsync = lazy(
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
	() => import("./ListPage")
);