import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import reducerPaths from "../../../../../../reducerPaths";
import url from "../../services/url";
import httpMethods from "../../../../../http/httpMethods";
import validateStatus from "../../../../../../services/utils/validateStatus";

export interface PropsAll {
	page: number,
    type: string
}

export interface PropsGenre {
	genre: number
}

export interface PropsOne {
	id: string
}

const baseUrl = "https://kinopoiskapiunofficial.tech/api/v2.2/";

export const movieApi = createApi({
	reducerPath: `${reducerPaths.movie}/api`,
	baseQuery: fetchBaseQuery({
		baseUrl: baseUrl,
	}),
	tagTypes: [`${reducerPaths.movie}TAG`],

	endpoints: (build) => ({
		getAllMovie: build.query<any, PropsAll>({
			query: ({page, type}) => ({
				url: url.movie+`?&order=RATING&type=${type}&page=${page}`,
				method: httpMethods.GET,
                headers: {
                    "X-API-KEY": "26c4cc02-fede-48b9-9c04-ed99dbda00cc",
                    "Content-Type": "application/json",
                },
				validateStatus,
			}),
			providesTags: [`${reducerPaths.movie}TAG`],
		}),
        getMovieFromGenre: build.query<any, PropsGenre>({
			query: ({genre}) => ({
				url: url.movie+`?genres=${genre}&order=RATING&type=FILM&page=1`,
				method: httpMethods.GET,
                headers: {
                    "X-API-KEY": "26c4cc02-fede-48b9-9c04-ed99dbda00cc",
                    "Content-Type": "application/json",
                },
				validateStatus,
			}),
			providesTags: [`${reducerPaths.movie}TAG`],
		}),
        getOneMovie: build.query<any, PropsOne>({
			query: ({id}) => ({
				url: url.movie+`/${id}`,
				method: httpMethods.GET,
                headers: {
                    "X-API-KEY": "26c4cc02-fede-48b9-9c04-ed99dbda00cc",
                    "Content-Type": "application/json",
                },
				validateStatus,
			}),
			providesTags: [`${reducerPaths.movie}TAG`],
		}),
	}),
});

export const { useGetAllMovieQuery, useGetMovieFromGenreQuery, useGetOneMovieQuery} = movieApi;
