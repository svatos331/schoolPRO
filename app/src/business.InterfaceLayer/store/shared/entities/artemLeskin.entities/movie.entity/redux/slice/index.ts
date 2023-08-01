import { createSlice } from "@reduxjs/toolkit";
import { LocalStorageMethodEnum, localStorageService } from "general.services/utils/local-storage.service";

import reducerPaths from "../../../../../../reducerPaths";
import { IMovie, ISidebar, ISortValue } from "./type/index";

const initialStateMovie: IMovie = {
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

const initialStateSidebar: ISidebar = {
    isActive: false
};

const initialStateSortValue: ISortValue = {
    page: Number(localStorageService(LocalStorageMethodEnum.GET, {data: null, key: "page"})) || 1,
    ganre: localStorageService(LocalStorageMethodEnum.GET, {data: null, key: "ganre"}) || "",
    order: localStorageService(LocalStorageMethodEnum.GET, {data: null, key: "order"}) || "",
    rating: localStorageService(LocalStorageMethodEnum.GET, {data: null, key: "rating"}) || "",
    yearFrom: localStorageService(LocalStorageMethodEnum.GET, {data: null, key: "yearFrom"}) || "",
    yearTo: localStorageService(LocalStorageMethodEnum.GET, {data: null, key: "yearTo"}) || ""
};

export const movieSlice = createSlice({
	name: reducerPaths.movie,
	initialState: initialStateMovie,
	reducers: {
		undefined() {
			return initialStateMovie;
		},
	},
});

export const sidebarMovieSlice = createSlice({
	name: reducerPaths.sidebarMovie,
	initialState: initialStateSidebar,
	reducers: {
		changeActive(state) {
			state.isActive = !state.isActive;
		},
	},
});

export const sortValueSlice = createSlice({
	name: reducerPaths.sortValue,
	initialState: initialStateSortValue,
	reducers: {
		changeOrder(state, action) {
			state.order = action.payload;
			localStorageService(LocalStorageMethodEnum.SET, {data: action.payload, key: "order"});
		},
		changeGanre(state, action) {
			state.ganre = action.payload;
			localStorageService(LocalStorageMethodEnum.SET, {data: action.payload, key: "ganre"});
		},
		changeYear(state, action) {
			state.yearFrom = action.payload.split("-")[0];
			state.yearTo = action.payload.split("-")[1];
			localStorageService(LocalStorageMethodEnum.SET, {data: action.payload.split("-")[0], key: "yearFrom"});
			localStorageService(LocalStorageMethodEnum.SET, {data: action.payload.split("-")[1], key: "yearTo"});
		},
		changeRating(state, action) {
			state.rating = action.payload;
			localStorageService(LocalStorageMethodEnum.SET, {data: action.payload, key: "rating"});

		},
		changePage(state, action) {
			state.page = action.payload;
			localStorageService(LocalStorageMethodEnum.SET, {data: action.payload, key: "page"});
		},
	},
});

export const movieActions = movieSlice.actions;
export const movieReducer = movieSlice.reducer;

export const sidebarMovieActions = sidebarMovieSlice.actions;
export const sidebarMovieReducer = sidebarMovieSlice.reducer;

export const sortValueActions = sortValueSlice.actions;
export const sortValueReducer = sortValueSlice.reducer;