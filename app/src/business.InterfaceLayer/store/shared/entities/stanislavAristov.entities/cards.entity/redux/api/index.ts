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
import { baseQueryWithReauth } from "../../../payments.entity/redux/api";

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
		`${reducerPaths.put_money}TAG`,
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
			transformResponse: cardsFromUser,
		}),
	}),
});
export const { useGetCardsQuery, useGetTotalBalanceQuery } = paymentsApi;
