import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import reducerPaths from "../../../../../../reducerPaths";
import url from "../../services/url";
import httpMethods from "../../../../../http/httpMethods";
import validateStatus from "../../../../../../services/utils/validateStatus";
import { categoryFromDtoServiceArray } from "../../services/dto/from.dto";

export const viktoria_categoryApi = createApi({
	reducerPath: `${reducerPaths.viktoria_category}/api`,
	baseQuery: fetchBaseQuery({
		baseUrl: process.env.REACT_APP_API_URL_GAMAYUNOVA,
	}),
	tagTypes: [`${reducerPaths.viktoria_category}CATEGORY`],

	endpoints: (build) => ({
		getAllCategory: build.query<any, null>({
			query: () => ({
				url: url.category,
				method: httpMethods.GET,
				validateStatus,
			}),
			providesTags: [`${reducerPaths.viktoria_category}CATEGORY`],
			transformResponse: categoryFromDtoServiceArray,
		}),
		getCategoryById: build.query<any, number>({
			query: (id) => ({
				url: url.category + `/${id}`,
				method: httpMethods.GET,
				validateStatus,
			}),
			providesTags: [`${reducerPaths.viktoria_category}CATEGORY`],
			transformResponse: categoryFromDtoServiceArray,
		}),
	}),
});

export const { useGetAllCategoryQuery, useGetCategoryByIdQuery } =
	viktoria_categoryApi;
