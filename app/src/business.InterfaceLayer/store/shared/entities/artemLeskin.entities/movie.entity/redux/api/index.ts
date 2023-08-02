import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { movieAutorDtoService, movieFromDtoService, movieFromGenreDtoService, movieSimilarsDtoService } from "business.InterfaceLayer/store/shared/entities/artemLeskin.entities/movie.entity/services/dto/from.dto";

import reducerPaths from "../../../../../../reducerPaths";
import url from "../../services/url";
import httpMethods from "../../../../../http/httpMethods";
import validateStatus from "../../../../../../services/utils/validateStatus";

export interface PropsAll {
	page: number,
    type: string
	ganre: string,
	yearFrom: string,
	yearTo: string,
	order: string,
	rating: string
}

export interface PropsGenre {
	parament: number | string
}

export interface PropsOne {
	id: string
}
export interface PropsPost{
	kinopoiskId: number,
	nameRu: string, 
	posterUrlPreview: string,
	ratingKinopoisk: number,
	year: number,
	filmLength: number
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
			query: ({page, type, order, rating, yearFrom, yearTo, ganre}) => ({
				url: ganre !== "999"
				?url.movie+`
				?
				page=${page}
				${ganre !== " "?`&genres=${ganre}`:""}
				${order !== " "?`&order=${order}`:""}
				${type !== " "?`&type=${type}`:""}
				${rating !== " "?`&ratingFrom=${rating}&ratingTo=10`:""}
				${yearFrom !== " "?`&yearFrom=${yearFrom || ""}`:""}
				${yearTo !== " "?`&yearTo=${yearTo || ""}`:""}
				`
				:"http://localhost:4444/movie"
				,
				method: httpMethods.GET,
                headers: {
                    "X-API-KEY": "3fb1ca5b-4af2-42d7-a282-92da7dea890a",
                    "Content-Type": "application/json",
                },
				validateStatus,
			}),
			providesTags: [`${reducerPaths.movie}TAG`],
			transformResponse: movieAutorDtoService
		}),
        getMovieFromGenre: build.query<any, PropsGenre>({
			query: ({parament}) => ({
				url: url.movie+`?genres=${parament}&order=RATING&type=FILM&page=1`,
				method: httpMethods.GET,
                headers: {
                    "X-API-KEY": "3fb1ca5b-4af2-42d7-a282-92da7dea890a",
                    "Content-Type": "application/json",
                },
				validateStatus,
			}),
			providesTags: [`${reducerPaths.movie}TAG`],
			transformResponse: movieFromGenreDtoService
		}),
		getSimilarsMovie: build.query<any, PropsGenre>({
			query: ({parament}) => ({
				url: url.movie+`/${parament}/similars`,
				method: httpMethods.GET,
                headers: {
                    "X-API-KEY": "3fb1ca5b-4af2-42d7-a282-92da7dea890a",
                    "Content-Type": "application/json",
                },
				validateStatus,
			}),
			providesTags: [`${reducerPaths.movie}TAG`],
			transformResponse: movieSimilarsDtoService
		}),
        getOneMovie: build.query<any, PropsOne>({
			query: ({id}) => ({
				url: url.movie+`/${id}`,
				method: httpMethods.GET,
                headers: {
                    "X-API-KEY": "3fb1ca5b-4af2-42d7-a282-92da7dea890a",
                    "Content-Type": "application/json",
                },
				validateStatus,
			}),
			providesTags: [`${reducerPaths.movie}TAG`],
			transformResponse: movieFromDtoService
		}),
		postAuthorMovie: build.query<any, PropsPost>({
			query: (body: PropsPost) => ({
				url: "http://localhost:4444/movie",
				method: httpMethods.POST,
				body,
				validateStatus,
			}),
			providesTags: [`${reducerPaths.movie}TAG`],
			transformResponse: movieFromGenreDtoService
		}),
	}),
});

export const { 
	useGetAllMovieQuery, 
	useGetMovieFromGenreQuery, 
	useGetOneMovieQuery,
	usePostAuthorMovieQuery,
	useGetSimilarsMovieQuery
} = movieApi;
