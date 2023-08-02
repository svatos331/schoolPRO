import { createApi } from "@reduxjs/toolkit/query/react";

import reducerPaths from "../../../../../../reducerPaths";
import httpMethods from "../../../../../http/httpMethods";
// eslint-disable-next-line import/order
import validateStatus from "../../../../../../services/utils/validateStatus";
import { transactionsTransformDTO } from "../../services/dto/from.dto";
import url from "../../services/url";
import { baseQueryWithReauth } from "../../../payments.entity/redux/api";

export const transactionsApi = createApi({
	reducerPath: `${reducerPaths.payments_transactions}/api`,
	baseQuery: baseQueryWithReauth,
	tagTypes: [`${reducerPaths.payments_transactions}TAG`],
	endpoints: (builder) => ({
		getTransactions: builder.query({
			query: () => {
				return {
					url: url.transactions,
					method: httpMethods.GET,
					validateStatus,
				};
			},
			providesTags: [`${reducerPaths.payments_transactions}TAG`],
			transformResponse: transactionsTransformDTO,
		}),
	}),
});
export const { useGetTransactionsQuery } = transactionsApi;
