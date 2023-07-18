import { createSlice } from "@reduxjs/toolkit";

import reducerPaths from "../../../../../../reducerPaths";

export interface IMovie {
    id: number,
    name: string,
    poster: string,
    rating: number,
    description: string,
    logoUrl: string,
    ageLimits: string,
    filsLength: number,
    year: number,
    countries: string[],
    genres: string[]
}

const initialState: IMovie = {
    id: 1,
    name: "",
    poster: "",
    rating: 1,
    description: "",
    logoUrl: "",
    ageLimits: "",
    filsLength: 100,
    year: 2000,
    countries: [],
    genres: []
};

export const movieSlice = createSlice({
	name: reducerPaths.movie,
	initialState: initialState,
	reducers: {
		undefined() {
			return initialState;
		},
	},
});

export const movieActions = movieSlice.actions;
export const movieReducer = movieSlice.reducer;
