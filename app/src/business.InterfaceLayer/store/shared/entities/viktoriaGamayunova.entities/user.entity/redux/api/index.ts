import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import reducerPaths from "../../../../../../reducerPaths";
import url from "../../services/url";
import httpMethods from "../../../../../http/httpMethods";
// import { todoFromDtoServiceArray } from "../../services/dto/from.dto";
import { userFromDtoServiceArray } from "../../services/dto/from.dto";
import validateStatus from "../../../../../../services/utils/validateStatus";

export interface Props {
	authToken: string;
	params: { email: string; pass: string };
}

export const viktoria_userApi = createApi({
	reducerPath: `${reducerPaths.user}/api`,
	baseQuery: fetchBaseQuery({
		baseUrl: process.env.REACT_APP_API_URL_GAMAYUNOVA,
	}),
	tagTypes: [`${reducerPaths.user}TAG`],

	endpoints: (build) => ({
		getUser: build.query<any, Props>({
			query: ({ authToken, params }) => ({
				url: url.user,
				method: httpMethods.GET,
				headers: {
					Authorization: `Bearer ${authToken}`,
				},
				params: params,
				validateStatus,
			}),
			providesTags: [`${reducerPaths.user}TAG`],
			transformResponse: userFromDtoServiceArray,
		}),
	}),
});

export const { useGetUserQuery } = viktoria_userApi;
