import { createSlice } from "@reduxjs/toolkit";

import reducerPaths from "../../../../../../reducerPaths";

export enum ProductEnum {
	id = "id",
	name = "name",
	username = "username",
	email = "email",
}

export interface ProductType {
	[ProductEnum.id]: string;
	[ProductEnum.name]: string;
	[ProductEnum.username]: string;
	[ProductEnum.email]: string;
}

export const initialProductState: ProductType = {
	[ProductEnum.id]: "",
	[ProductEnum.name]: "",
	[ProductEnum.username]: "",
	[ProductEnum.email]: "",
};

export const productSlice = createSlice({
	name: reducerPaths.todo,
	initialState: initialProductState,
	reducers: {
		undefined() {
			return initialProductState;
		},
	},
});

export const productActions = productSlice.actions;
export const productReducer = productSlice.reducer;
