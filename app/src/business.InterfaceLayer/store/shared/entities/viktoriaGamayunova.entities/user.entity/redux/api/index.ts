import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import reducerPaths from "../../../../../../reducerPaths";
import url from "../../services/url";
import httpMethods from "../../../../../http/httpMethods";
import { userFromDtoServiceArray } from "../../services/dto/from.dto";
import validateStatus from "../../../../../../services/utils/validateStatus";
import { userToDtoServiceArray } from "../../services/dto/to.dto";

export interface Props {
	params: { email: string; password: string };
}
export interface PropsId {
	params: { id: number };
}
export interface PropsAdd {
	email: string;
	password: string;
	firstname: string;
	lastname: string;
	userType: number;
	avatar: string;
	phone: string;
	username: string;
	bio: string;
}

export interface PropsUpd {
	id: number;
	email?: string;
	password?: string;
	firstname?: string;
	lastname?: string;
	userType?: number;
	avatar?: string;
	phone?: string;
	username?: string;
	bio?: string;
}

export const viktoria_userApi = createApi({
	reducerPath: `${reducerPaths.viktoria_user}/api`,
	baseQuery: fetchBaseQuery({
		baseUrl: process.env.REACT_APP_API_URL_GAMAYUNOVA,
	}),
	tagTypes: [`${reducerPaths.viktoria_user}USER`],

	endpoints: (build) => ({
		getAllUser: build.query<any, void>({
			query: () => ({
				url: url.user,
				method: httpMethods.GET,
				validateStatus,
			}),
			providesTags: [`${reducerPaths.viktoria_user}USER`],
			transformResponse: userFromDtoServiceArray,
		}),
		getUser: build.query<any, Props>({
			query: ({ params }) => ({
				url: url.user,
				method: httpMethods.GET,
				params: params,
				validateStatus,
			}),
			providesTags: [`${reducerPaths.viktoria_user}USER`],
			transformResponse: userFromDtoServiceArray,
		}),
		getUserById: build.query<any, PropsId>({
			query: ({ params }) => ({
				url: url.user,
				method: httpMethods.GET,
				params: params,
				validateStatus,
			}),
			providesTags: [`${reducerPaths.viktoria_user}USER`],
			transformResponse: userFromDtoServiceArray,
		}),
		addUser: build.mutation<any, PropsAdd>({
			query: (body) => ({
				url: url.user,
				method: httpMethods.POST,
				body: userToDtoServiceArray(body),
			}),
			invalidatesTags: [`${reducerPaths.viktoria_user}USER`],
			transformResponse: userFromDtoServiceArray,
		}),
		updateUser: build.mutation<any, PropsUpd>({
			query: (body) => ({
				url: url.user + `/${body.id}`,
				method: httpMethods.PATCH,
				body: userToDtoServiceArray(body),
			}),
			invalidatesTags: [`${reducerPaths.viktoria_user}USER`],
			transformResponse: userFromDtoServiceArray,
		}),
	}),
});

export const {
	useGetUserQuery,
	useLazyGetUserQuery,
	useGetUserByIdQuery,
	useGetAllUserQuery,
	useLazyGetAllUserQuery,
	useAddUserMutation,
	useUpdateUserMutation,
} = viktoria_userApi;
