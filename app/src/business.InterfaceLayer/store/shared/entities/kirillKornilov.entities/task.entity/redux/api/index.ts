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
		baseUrl:"http://localhost:9000/api/", 
		// prepareHeaders:(headers,{getState})=>{
		// 	headers.set("Access-Control-Allow-Origin","*");

		// 	return headers;
		// }
	}),
	//tagTypes: [`${reducerPaths.todo}TAG`],

	endpoints: (build) => ({
		getGoods: build.query({
			query: () => "category/1",
			//providesTags: [`${reducerPaths.todo}TAG`],
			//transformResponse: todoFromDtoServiceArray,
		}),
		getCategories: build.query({
			query: (user_id:number) => `category/${user_id}`,
			//providesTags: [`${reducerPaths.todo}TAG`],
			//transformResponse: todoFromDtoServiceArray,
		}),
		getTasks: build.query({
			query: ({category_id,user_id}) => `task/${user_id}/${category_id}`,
			//provide0sTags: [`${reducerPaths.todo}TAG`],
			//transformResponse: todoFromDtoServiceArray,
		}),
		addTasks: build.mutation({
			query: (body) => ({
				//url:`task/${user_id}/${category_id}`,
				url: `task/${body["user_id"]}/${body["category_id"]}`,
				//`task/${user_id}/${category_id}`
				method: "POST",
				mode: "no-cors",
				body,
				prepareHeaders:(headers:any)=>{
					
				headers.set("Accept", "application/json");
				headers.set("Access-Control-Allow-Origin","*");
				
				return headers;
				}
			})

			// w.Header().Set("Accept", "application/json")
			// w.Header().Set("Access-Control-Allow-Origin", "*")
			//provide0sTags: [`${reducerPaths.todo}TAG`],
			//transformResponse: todoFromDtoServiceArray,
		}),
		getObservation: build.query({
			query: ({category_id,user_id}) => `observation/${user_id}/${category_id}`,
			//provide0sTags: [`${reducerPaths.todo}TAG`],
			//transformResponse: todoFromDtoServiceArray,
		}),
		getFact: build.query({
			query: () => "fact",
			//provide0sTags: [`${reducerPaths.todo}TAG`],
			//transformResponse: todoFromDtoServiceArray,
		}),
		getActivity: build.query({
			query: ({category_id,user_id}) => `activity/${user_id}/${category_id}`,
			//provide0sTags: [`${reducerPaths.todo}TAG`],
			//transformResponse: todoFromDtoServiceArray,
		}),

	}),
});

export const { 
	useGetGoodsQuery,
	useGetCategoriesQuery,
	 useGetTasksQuery,
	  useGetObservationQuery,
	   useGetFactQuery , 
	   useGetActivityQuery,
		useAddTasksMutation
	} = goodsApi;
