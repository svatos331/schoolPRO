import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

//import reducerPaths from "../../../../../../reducerPaths";
//import url from "../../services/url";
//import httpMethods from "../../../../../http/httpMethods";
//import { todoFromDtoServiceArray } from "../../services/dto/from.dto";
//import validateStatus from "../../../../../../services/utils/validateStatus";

// export interface Props {
// 	authToken: string;
// 	params: { id: string };
// }

export const goodsApi = createApi({
	//reducerPath: `${reducerPaths.todo}/api`,
	reducerPath: "goodsApi",
	baseQuery: fetchBaseQuery({
		//baseUrl: process.env.REACT_APP_API_URL, 
		baseUrl:"http://localhost:3001/"
	}),
	//tagTypes: [`${reducerPaths.todo}TAG`],

	endpoints: (build) => ({
		getGoods: build.query({
			query: () => "goods",
			//providesTags: [`${reducerPaths.todo}TAG`],
			//transformResponse: todoFromDtoServiceArray,
		}),
	}),
});

export const { useGetGoodsQuery } = goodsApi;
