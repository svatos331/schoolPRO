import { createSlice } from "@reduxjs/toolkit";

import reducerPaths from "../../../../../../reducerPaths";

export enum IUserEnum {
	id = "id",
	email = "email",
	password = "password",
	firstname = "firstname",
	lastname = "lastname",
	userType = "userType",
	avatar = "avatar",
	phone = "phone",
	username = "username",
	bio = "bio",
}

export interface IUserType {
	[IUserEnum.id]: number;
	[IUserEnum.email]: string;
	[IUserEnum.password]: string;
	[IUserEnum.firstname]: string;
	[IUserEnum.lastname]: string;
	[IUserEnum.userType]: number;
	[IUserEnum.avatar]: string;
	[IUserEnum.phone]: string;
	[IUserEnum.username]: string;
	[IUserEnum.bio]: string;
	allUsers: any[];
}

export const initialUserState: IUserType = {
	[IUserEnum.id]: 0,
	[IUserEnum.email]: "",
	[IUserEnum.password]: "",
	[IUserEnum.firstname]: "",
	[IUserEnum.lastname]: "",
	[IUserEnum.userType]: 0,
	[IUserEnum.avatar]: "",
	[IUserEnum.phone]: "",
	[IUserEnum.username]: "",
	[IUserEnum.bio]: "",
	allUsers: [],
};

export const userSlice = createSlice({
	name: reducerPaths.viktoria_user,
	initialState: initialUserState,
	reducers: {
		undefined() {
			return initialUserState;
		},
		setUser: (state, action) => {
			state = action.payload;

			return {
				...state,
				allUsers: [],
			};
		},
		setAllUsers: (state, all) => {
			return {
				...state,
				allUsers: all.payload,
			};
		},
		setPassword: (state, action) => {
			return {
				...state,
				[IUserEnum.password]: action.payload,
			};
		},
	},
});

export const userActions = userSlice.actions;
export const userReducer = userSlice.reducer;
