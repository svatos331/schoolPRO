import { createSlice } from "@reduxjs/toolkit";

import reducerPaths from "../../../../../../reducerPaths";

export enum ProductEnum {
	id = "id",
	name = "name",
	price = "price",
	isSale = "isSale",
	isFavorite = "isFavorite"
}

export interface ProductType {
	[ProductEnum.id]: string;
	[ProductEnum.name]: string;
	[ProductEnum.price]: string;
	[ProductEnum.isSale]: boolean;
	[ProductEnum.isFavorite]: boolean;
}

export const initialProductState: ProductType = {
	[ProductEnum.id]: "",
	[ProductEnum.name]: "",
	[ProductEnum.price]: "",
	[ProductEnum.isSale]: false,
	[ProductEnum.isFavorite]: false,
};

export const productSlice = createSlice({
	name: reducerPaths.todo,
	initialState: initialProductState,
	reducers: {

	},
});

export const productActions = productSlice.actions;
export const productReducer = productSlice.reducer;
