import { createSlice } from "@reduxjs/toolkit";

import reducerPaths from "../../../../../../reducerPaths";

export enum IProductEnum {
	id = "id",
	category = "category",
	details = "details",
	price = "price",
	name = "name",
	photo = "photo",
	influencerId = "influencerId",
	rating = "rating",
}

export interface ProductType {
	id: number;
	category: string;
	details: string;
	price: number;
	name: string;
	photo: string;
	influencerId: number;
	rating: number;
}

export interface FilterType {
	maxPrice: number;
	str: string;
	categories: number[];
}

export interface IProductType {
	allProducts: Array<ProductType>;
	filteredAllProducts: Array<ProductType>;
	myProducts: Array<ProductType>;
	filter: FilterType;
}

export const initialProductState: IProductType = {
	allProducts: [],
	filteredAllProducts: [],
	myProducts: [],
	filter: {
		maxPrice: 1000,
		str: "",
		categories: [],
	},
};

export const productSlice = createSlice({
	name: reducerPaths.viktoria_product,
	initialState: initialProductState,
	reducers: {
		undefined() {
			return initialProductState;
		},
		changeAllProducts(state, all) {
			return {
				...state,
				allProducts: all.payload,
			};
		},
		changeMyProducts(state, my) {
			return {
				...state,
				myProducts: my.payload,
			};
		},
		changeFilteredAllProducts(state, filtered) {
			return {
				...state,
				filteredAllProducts: filtered.payload,
			};
		},
		changeFilter(state, filter) {
			return {
				...state,
				filter: filter.payload,
			};
		},
	},
});

export const productActions = productSlice.actions;
export const productReducer = productSlice.reducer;
