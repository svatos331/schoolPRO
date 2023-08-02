import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import reducerPaths from "../../../../../../reducerPaths";
import { IBaseInfoUserDTO } from "../../services/dto/from.dto";
import { Nullable } from "primereact/ts-helpers";

export enum IUsersEnum {
	usersInfoArray = "usersInfoArray",
	userMeInfo = "userMeInfo",
}

export interface IUsersType {
	[IUsersEnum.usersInfoArray]: IBaseInfoUserDTO[];
	[IUsersEnum.userMeInfo]: Nullable<IBaseInfoUserDTO>;
}

export const initialUsersState: IUsersType = {
	[IUsersEnum.usersInfoArray]: [],
	[IUsersEnum.userMeInfo]: null,
};

export const usersSlice = createSlice({
	name: reducerPaths.payments_users,
	initialState: initialUsersState,
	reducers: {
		loadBaseInfoAboutMe: (
			state,
			{ payload }: PayloadAction<IBaseInfoUserDTO>
		) => {
			state.userMeInfo = payload;
		},
		loadBaseInfoAboutAll: (
			state,
			{ payload }: PayloadAction<IBaseInfoUserDTO[]>
		) => {
			state.usersInfoArray = payload;
		},
	},
});

export const paymentsActions = usersSlice.actions;
export const paymentsReducer = usersSlice.reducer;
export const { loadBaseInfoAboutMe, loadBaseInfoAboutAll } = paymentsActions;
