import { createSlice } from "@reduxjs/toolkit";

import reducerPaths from "../../../../../../reducerPaths";

export enum UserEnum {
	id = "id",
	name = "name",
	username = "username",
	email = "email",
}

export interface UserType {
	[UserEnum.id]: string;
	[UserEnum.name]: string;
	[UserEnum.username]: string;
	[UserEnum.email]: string;
}

export const initialUserState: UserType = {
	[UserEnum.id]: "",
	[UserEnum.name]: "",
	[UserEnum.username]: "",
	[UserEnum.email]: "",
};

export const userSlice = createSlice({
	name: reducerPaths.todo,
	initialState: initialUserState,
	reducers: {
		undefined() {
			return initialUserState;
		},
	},
});

export const userActions = userSlice.actions;
export const userReducer = userSlice.reducer;
