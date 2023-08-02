import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import reducerPaths from "../../../../../../reducerPaths";
import url from "../../services/url";
import httpMethods from "../../../../../http/httpMethods";
import { productFromDtoServiceArray } from "../../services/dto/from.dto";
import { productToDtoServiceArray } from "../../services/dto/to.dto";
import validateStatus from "../../../../../../services/utils/validateStatus";

export interface PropsAdd {
	params: {
		category: number;
		details: string;
		price: number;
		name: string;
		photo: string;
		influencerId: number;
		rating: number;
	};
}
export interface PropsUpd {
	id: number;
	category?: number;
	details?: string;
	price?: number;
	name?: string;
	photo?: string;
	influencerId?: number;
	rating?: number;
}

export const viktoria_productApi = createApi({
	reducerPath: `${reducerPaths.viktoria_product}/api`,
	baseQuery: fetchBaseQuery({
		baseUrl: process.env.REACT_APP_API_URL_GAMAYUNOVA,
	}),
	tagTypes: [`${reducerPaths.viktoria_product}PRODUCT`],

	endpoints: (build) => ({
		getAllProduct: build.query<any, void>({
			query: () => ({
				url: url.product,
				method: httpMethods.GET,
				validateStatus,
			}),
			providesTags: [`${reducerPaths.viktoria_product}PRODUCT`],
			transformResponse: productFromDtoServiceArray,
		}),
		getProductById: build.query<any, number>({
			query: (id) => ({
				url: url.product + `/${id}`,
				method: httpMethods.GET,
				validateStatus,
			}),
			providesTags: [`${reducerPaths.viktoria_product}PRODUCT`],
			transformResponse: productFromDtoServiceArray,
		}),
		getProductByInfluencerId: build.query<any, number>({
			query: (influencerId) => ({
				url: url.product + `/?${influencerId}`,
				method: httpMethods.GET,
				validateStatus,
			}),
			providesTags: [`${reducerPaths.viktoria_product}PRODUCT`],
			transformResponse: productFromDtoServiceArray,
		}),
		addProduct: build.mutation<any, PropsAdd>({
			query: (body) => ({
				url: url.product,
				method: httpMethods.POST,
				body: productToDtoServiceArray(body),
			}),
			invalidatesTags: [`${reducerPaths.viktoria_product}PRODUCT`],
			transformResponse: productFromDtoServiceArray,
		}),
		updateProduct: build.mutation<any, PropsUpd>({
			query: (body) => ({
				url: url.product + `/${body.id}`,
				method: httpMethods.PATCH,
				body: productToDtoServiceArray(body),
			}),
			invalidatesTags: [`${reducerPaths.viktoria_product}PRODUCT`],
			transformResponse: productFromDtoServiceArray,
		}),
	}),
});

export const {
	useGetAllProductQuery,
	useGetProductByIdQuery,
	useAddProductMutation,
	useUpdateProductMutation,
	useGetProductByInfluencerIdQuery,
	useLazyGetProductByInfluencerIdQuery,
} = viktoria_productApi;
