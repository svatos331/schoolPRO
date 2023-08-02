import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { useKeycloak } from "@react-keycloak/web";

import reducerPaths from "../../../../../../reducerPaths";

const updateToken = () => {
	const { keycloak } = useKeycloak();
	keycloak.updateToken(0);
};
export const baseQuery = fetchBaseQuery({
	baseUrl: "http://localhost:3030", // Замените на ваш базовый URL,
	prepareHeaders: (headers: Headers) => {
		const token = JSON.parse(localStorage.getItem("auth") ?? "");
		headers.set("Authorization", `Bearer ${token}`);

		return headers;
	},
});
export const baseQueryWithReauth = async (
	args: any,
	api: any,
	extraOptions: any
) => {
	let res = await baseQuery(args, api, extraOptions);
	// eslint-disable-next-line no-console
	if (res?.error?.status === 403 || res?.error?.status === 401) {
		// eslint-disable-next-line no-console
		await updateToken();
		res = await baseQuery(args, api, extraOptions);
	} else {
		// eslint-disable-next-line no-console
	}

	return res;
};

export const paymentsApi = createApi({
	reducerPath: `${reducerPaths.payments}/api`,
	baseQuery: baseQueryWithReauth,
	tagTypes: [
		`${reducerPaths.baseInfoAboutMe}TAG`,
		`${reducerPaths.baseUserInfoArray}TAG`,
		`${reducerPaths.payments}TAG`,
		`${reducerPaths.payments_transactions}TAG`,
	],
	endpoints: (builder) => ({}),
});
export {};
