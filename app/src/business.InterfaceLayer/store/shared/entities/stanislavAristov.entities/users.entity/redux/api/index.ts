import { createApi } from "@reduxjs/toolkit/query/react";

import reducerPaths from "../../../../../../reducerPaths";
import httpMethods from "../../../../../http/httpMethods";
import validateStatus from "../../../../../../services/utils/validateStatus";
import { baseQueryWithReauth } from "../../../payments.entity/redux/api";
import url from "../../services/url";
import {
	IBaseInfoUserDTO,
	transformFromBaseInfoDTO,
	transformFromBaseInfoDTOArray,
} from "../../services/dto/from.dto";

export const usersApi = createApi({
	reducerPath: `${reducerPaths.payments_users}/api`,
	baseQuery: baseQueryWithReauth,
	tagTypes: [
		`${reducerPaths.baseInfoAboutMe}TAG`,
		`${reducerPaths.baseUserInfoArray}TAG`,
	],
	endpoints: (builder) => ({
		getBaseInfoAboutMe: builder.query<IBaseInfoUserDTO, void>({
			query: () => {
				return {
					url: url.me,
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
	}),
});
export const { useGetBaseInfoAboutAllQuery, useGetBaseInfoAboutMeQuery } =
	usersApi;
