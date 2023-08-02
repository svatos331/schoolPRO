import { createSlice } from "@reduxjs/toolkit";

import reducerPaths from "../../../../../../reducerPaths";

export enum ICategoryEnum {
	allCategory = "allCategory",
}
export interface ICategoryType {
	[ICategoryEnum.allCategory]: any[];
}
export const initialCategoryState: ICategoryType = {
	[ICategoryEnum.allCategory]: [],
};

export const categorySlice = createSlice({
	name: reducerPaths.viktoria_category,
	initialState: initialCategoryState,
	reducers: {
		undefined() {
			return initialCategoryState;
		},
		setAllCategory(state, all) {
			return {
				...state,
				allCategory: all.payload,
			};
		},
	},
});

export const categoryActions = categorySlice.actions;
export const categoryReducer = categorySlice.reducer;
