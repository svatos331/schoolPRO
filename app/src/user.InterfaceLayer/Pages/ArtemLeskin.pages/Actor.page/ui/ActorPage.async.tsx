import { lazy } from "react";

export const ActorPageAsync = lazy(
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    () => import("./ActorPage")
);