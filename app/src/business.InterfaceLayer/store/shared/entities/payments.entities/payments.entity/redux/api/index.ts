import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {useKeycloak} from "@react-keycloak/web";

import reducerPaths from "../../../../../../reducerPaths";
import httpMethods from "../../../../../http/httpMethods";
import url from "../../../../svyatoslavZhilin.entities/todo.entity/services/url";
import validateStatus from "../../../../../../services/utils/validateStatus";
import {todoFromDtoServiceArray} from "../../../../svyatoslavZhilin.entities/todo.entity/services/dto/from.dto";
import {
    LocalStorageMethodEnum,
    localStorageService
} from "../../../../../../../../general.services/utils/local-storage.service";

const baseQuery = fetchBaseQuery({
    baseUrl: "http://localhost:3030", // Замените на ваш базовый URL,
    prepareHeaders: (headers: Headers) => {
        const token = JSON.parse(
            localStorageService(LocalStorageMethodEnum.GET, {key:"parsedToken"})??"{token:''}"
        )?.token;
        headers.set("Authorization", `Bearer ${token}`);
        // const {keycloak} = useKeycloak();
        // headers.set("Authorization", `Bearer ${keycloak.token}`);

        return headers;
    },
});
const baseQueryWithReauth = async (args: any, api: any, extraOptions: any) => {
    let res = await baseQuery(args, api, extraOptions);
    if (res?.error?.status === 403) {

        // const {updateToken} = keycloak;
        // updateToken(5);
        res = await baseQuery(args, api, extraOptions);
    }

    return res;
};

// // // Создаем API с middleware
export const paymentsApi = createApi({
    reducerPath: `${reducerPaths.payments}/api`,
    baseQuery: baseQuery,
    tagTypes: [`${reducerPaths.payments}TAG`],
    endpoints: (builder) => ({
        getBalance: builder.query({
            query: ({id}) => {


                return {
                    url: url.users,
                    method: httpMethods.GET,
                    validateStatus,
                    params:{id}
                };

            },
            providesTags: [`${reducerPaths.payments}TAG`],
            transformResponse: todoFromDtoServiceArray,
        }),
    }),


});
export const { useGetBalanceQuery } = paymentsApi;

