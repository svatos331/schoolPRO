import { createApi } from "@reduxjs/toolkit/query/react";

import reducerPaths from "../../../../../../reducerPaths";
import httpMethods from "../../../../../http/httpMethods";
import validateStatus from "../../../../../../services/utils/validateStatus";
import {
	balanceFromUser,
	cardsFromDtoServiceObject,
	putFromResponse,
} from "../../services/dto/from.dto";
import url from "../../services/url";
import { baseQueryWithReauth } from "../../../payments.entity/redux/api";
export type IPutMoneyProps = {
	params: {
		userId: string;
	};
	sum: number;
};
// // // Создаем API с middleware
export const cardsApi = createApi({
	reducerPath: `${reducerPaths.payments_cards}/api`,
	baseQuery: baseQueryWithReauth,
	tagTypes: [
		`${reducerPaths.payments_totalBalance}TAG`,
		`${reducerPaths.payments_cards}TAG`,
	],
	endpoints: (builder) => ({
		getTotalBalance: builder.query({
			query: () => {
				return {
					url: url.balance,
					method: httpMethods.GET,
					validateStatus,
				};
			},
			providesTags: [`${reducerPaths.payments_totalBalance}TAG`],
			transformResponse: balanceFromUser,
		}),
		getCards: builder.query({
			query: () => {
				return {
					url: url.cards,
					method: httpMethods.GET,
					validateStatus,
				};
			},
			providesTags: [`${reducerPaths.payments_cards}TAG`],
			transformResponse: cardsFromDtoServiceObject,
		}),
		putMoney: builder.mutation<any, IPutMoneyProps>({
			query: ({ params, sum }) => {
				return {
					url: url.pay,
					method: httpMethods.POST,
					validateStatus,
					params,
					body: { sum },
				};
			},
			invalidatesTags: [`${reducerPaths.payments_totalBalance}TAG`],
			transformResponse: putFromResponse,
		}),
	}),
});
export const {
	useGetCardsQuery,
	useGetTotalBalanceQuery,
	usePutMoneyMutation,
} = cardsApi;
