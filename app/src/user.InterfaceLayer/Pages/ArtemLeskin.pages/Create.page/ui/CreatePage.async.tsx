import { lazy } from "react";

export const CreatePageAsync = lazy(
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
	() => import("./CreatePage")
);