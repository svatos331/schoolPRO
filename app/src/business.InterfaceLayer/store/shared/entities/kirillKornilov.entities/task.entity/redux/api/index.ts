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
	tagTypes: ["Tasks"],
	baseQuery: fetchBaseQuery({
		//baseUrl: process.env.REACT_APP_API_URL,
		baseUrl: "http://localhost:9000/api/",
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
			query: (user_id: number) => `category/${user_id}`,
			//providesTags: [`${reducerPaths.todo}TAG`],
			//transformResponse: todoFromDtoServiceArray,
		}),
		getTasks: build.query({
			query: ({ category_id, user_id }) => `task/${user_id}/${category_id}`,
			// providesTags: (result)=> result
			// ?[
			// 	...result.map(({ id:any })=>({type:"Tasks", id:any })),
			// 	{type: "Tasks",id:"LIST"},
			// ]
			// :[{type:"Tasks", id:"LIST"}],
			//provide0sTags: [`${reducerPaths.todo}TAG`],
			//transformResponse: todoFromDtoServiceArray,
		}),
		addTasks: build.mutation({
			query: (body) => ({
				url: `task/${body["user_id"]}/${body["category_id"]}`,
				method: "POST",
				mode: "no-cors",
				body,
				prepareHeaders: (headers: any) => {
					headers.set("Accept", "application/json");
					headers.set("Access-Control-Allow-Origin", "*");

					return headers;
				},
			}),
			invalidatesTags: [{ type: "Tasks", id: "LIST" }],
		}),

		deleteTasks: build.mutation({
			query: (task_id) => ({
				url: `task/${task_id}`,
				method: "DELETE",
				//	mode: "no-cors",
				//prepareHeaders:(headers:any)=>{
				// headers.set("Accept", "application/json");
				// headers.set("Access-Control-Allow-Origin","*");

				// return headers;
				// }
			}),
			//invalidatesTags:[{type: "Tasks",id: "LIST"}]
		}),

		getObservation: build.query({
			query: ({ category_id, user_id }) =>
				`observation/${user_id}/${category_id}`,
			//provide0sTags: [`${reducerPaths.todo}TAG`],
			//transformResponse: todoFromDtoServiceArray,
		}),
		getFact: build.query({
			query: () => "fact",
			//provide0sTags: [`${reducerPaths.todo}TAG`],
			//transformResponse: todoFromDtoServiceArray,
		}),
		getActivity: build.query({
			query: ({ category_id, user_id }) => `activity/${user_id}/${category_id}`,
			//provide0sTags: [`${reducerPaths.todo}TAG`],
			//transformResponse: todoFromDtoServiceArray,
		}),
		getUser: build.query({
			query: (user_id)=>`user/${user_id}`,
		}),

		toggleTask: build.mutation({
			// query: (task_id) => ({
			// 	url: `toggleTask/${task_id}`,
			// 	method: "PATCH",
				
			// }),

			query: (task_id)=>{
				// eslint-disable-next-line no-console
				console.log(`hook_handletoggle = ${task_id}`);
			
			return({url: `toggleTask/${task_id}`,
			method: "POST",
			mode: "no-cors",
			});
		}
			
		}),
		editTask: build.mutation({
			query: (body) => ({
				url: `editTask/${body["category_id"]}/${body["task_id"]}`,
				method: "POST",
				mode: "no-cors",
				body,
				prepareHeaders: (headers: any) => {
					
					headers.set("Access-Control-Allow-Origin", "*");

					return headers;
				},
			}),
		//	invalidatesTags: [{ type: "Tasks", id: "LIST" }],
		}),

	}),
});

export const {
	useGetGoodsQuery,
	useGetCategoriesQuery,
	useGetTasksQuery,
	useGetObservationQuery,
	useGetFactQuery,
	useGetActivityQuery,
	useAddTasksMutation,
	useDeleteTasksMutation,
	useGetUserQuery,
	useToggleTaskMutation,
	useEditTaskMutation
} = goodsApi;
