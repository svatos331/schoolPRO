import { createSlice } from "@reduxjs/toolkit";

import reducerPaths from "../../../../../../reducerPaths";

export enum IUserEnum {
	email = "",
	pass = "",
}

export interface IUserType {
	[IUserEnum.email]: string;
	[IUserEnum.pass]: string;
}

export const initialUserState: IUserType = {
	[IUserEnum.email]: "",
	[IUserEnum.pass]: "",
};

export const userSlice = createSlice({
	name: reducerPaths.user,
	initialState: initialUserState,
	reducers: {
		undefined() {
			return initialUserState;
		},
	},
});

export const userActions = userSlice.actions;
export const userReducer = userSlice.reducer;
