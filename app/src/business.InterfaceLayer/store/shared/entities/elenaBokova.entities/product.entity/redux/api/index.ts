import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import reducerPaths from "../../../../../../reducerPaths";
import url from "../../services/url";
import httpMethods from "../../../../../http/httpMethods";
import { todoFromDtoServiceArray } from "../../services/dto/from.dto";
import validateStatus from "../../../../../../services/utils/validateStatus";

export interface Props {
	authToken: string;
	params: { id: string };
}

export const productApi = createApi({
	reducerPath: `${reducerPaths.product}/api`,
	baseQuery: fetchBaseQuery({
		baseUrl: process.env.REACT_APP_API_URL,
	}),
	tagTypes: [`${reducerPaths.product}TAG`],

	endpoints: (build) => ({
		getProduct: build.query<any, Props>({
			query: ({ authToken, params }) => ({
				url: url.users,
				method: httpMethods.GET,
				headers: {
					Authorization: `Bearer ${authToken}`,
				},
				params: params,
				validateStatus,
			}),
			providesTags: [`${reducerPaths.product}TAG`],
			transformResponse: todoFromDtoServiceArray,
		}),
	}),
});

export const { useGetProductQuery } = productApi;
