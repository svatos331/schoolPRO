import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { useKeycloak } from "@react-keycloak/web";

import reducerPaths from "../../../../../../reducerPaths";
import httpMethods from "../../../../../http/httpMethods";
import validateStatus from "../../../../../../services/utils/validateStatus";
import {
	balanceFromUser,
	cardsFromUser,
	transactionsFromUser,
	userFromDtoServiceArray,
} from "../../services/dto/from.dto";
import {
	transformFromBaseInfoDTO,
	transformFromBaseInfoDTOArray,
} from "../../../userBaseInfo.entity/services/dto/from.dto";
import url from "../../services/url";

const updateToken = () => {
	const { keycloak } = useKeycloak();
	keycloak.updateToken(0);
};
export const baseQuery = fetchBaseQuery({
	baseUrl: "http://localhost:3030", // Замените на ваш базовый URL,
	prepareHeaders: (headers: Headers) => {
		const token = JSON.parse(localStorage.getItem("auth") ?? "");
		// eslint-disable-next-line no-console
		// eslint-disable-next-line no-console
		headers.set("Authorization", `Bearer ${token}`);
		// const {keycloak} = useKeycloak();
		// headers.set("Authorization", `Bearer ${keycloak.token}`);

		return headers;
	},
});
export const baseQueryWithReauth = async (
	args: any,
	api: any,
	extraOptions: any
) => {
	let res = await baseQuery(args, api, extraOptions);
	if (res?.error?.status === 403 || res?.error?.status === 401) {
		// eslint-disable-next-line no-console
		await updateToken();
		res = await baseQuery(args, api, extraOptions);
	}

	return res;
};

export type IPutMoneyProps = {
	params: {
		id: string;
	};
	balance: number;
};

// // // Создаем API с middleware
export const paymentsApi = createApi({
	reducerPath: `${reducerPaths.payments}/api`,
	baseQuery: baseQueryWithReauth,
	tagTypes: [
		`${reducerPaths.baseInfoAboutMe}TAG`,
		`${reducerPaths.baseUserInfoArray}TAG`,
		`${reducerPaths.payments}TAG`,
		`${reducerPaths.put_money}TAG`,
		`${reducerPaths.payments_balance}TAG`,
		`${reducerPaths.payments_transactions}TAG`,
		`${reducerPaths.payments_cards}TAG`,
	],
	endpoints: (builder) => ({
		getMe: builder.query({
			query: () => {
				return {
					url: url.me,
					method: httpMethods.GET,
					validateStatus,
				};
			},
			providesTags: [`${reducerPaths.payments}TAG`],
			transformResponse: userFromDtoServiceArray,
		}),
		getBalance: builder.query({
			query: () => {
				return {
					url: url.me,
					method: httpMethods.GET,
					validateStatus,
				};
			},
			providesTags: [`${reducerPaths.payments_transactions}TAG`],
			transformResponse: balanceFromUser,
		}),
		getCards: builder.query({
			query: () => {
				return {
					url: url.me,
					method: httpMethods.GET,
					validateStatus,
				};
			},
			providesTags: [`${reducerPaths.payments_cards}TAG`],
			transformResponse: cardsFromUser,
		}),
		getTransactions: builder.query({
			query: () => {
				return {
					url: url.me,
					method: httpMethods.GET,
					validateStatus,
				};
			},
			providesTags: [`${reducerPaths.payments_transactions}TAG`],
			transformResponse: transactionsFromUser,
		}),
		getBaseInfoAboutMe: builder.query({
			query: () => {
				return {
					url: url.baseInfoAboutMe,
					method: httpMethods.GET,
					validateStatus,
				};
			},
			providesTags: [`${reducerPaths.baseInfoAboutMe}TAG`],
			transformResponse: transformFromBaseInfoDTO,
		}),
		getBaseInfoAboutAll: builder.query({
			query: () => {
				return {
					url: url.publicUsersInfo,
					method: httpMethods.GET,
					validateStatus,
				};
			},
			providesTags: [`${reducerPaths.baseUserInfoArray}TAG`],
			transformResponse: transformFromBaseInfoDTOArray,
		}),
		putMoney: builder.mutation<any, IPutMoneyProps>({
			query: ({ params, balance }) => {
				return {
					url: url.payFromMeTo,
					method: httpMethods.POST,
					validateStatus,
					params,
					body: { balance },
				};
			},
			invalidatesTags: [
				`${reducerPaths.baseUserInfoArray}TAG`,
				`${reducerPaths.baseInfoAboutMe}TAG`,
			],
			transformResponse: balanceFromUser,
		}),
	}),
});
export const {
	useGetBaseInfoAboutAllQuery,
	useGetMeQuery,
	useGetBaseInfoAboutMeQuery,
	usePutMoneyMutation,
	useGetBalanceQuery,
} = paymentsApi;
