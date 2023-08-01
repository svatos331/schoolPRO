import {createSlice, PayloadAction} from "@reduxjs/toolkit";

import reducerPaths from "../../../../../../reducerPaths";
import Colors from "../../../../../../../../user.InterfaceLayer/constants/colors/index";

export enum IThemeEnum {
	curcolor="curcolor"
}
export type ITheme = Colors.WHITE|Colors.BLUE_THEME_GRADIENT;

export interface IThemeType {
	[IThemeEnum.curcolor]:ITheme
}
export const initialThemeState: IThemeType = {
	[IThemeEnum.curcolor]:Colors.WHITE
};

export const themeSlice = createSlice({
	name: reducerPaths.theme,
	initialState: initialThemeState,
	reducers: {
		changeTheme : (state, {payload} : PayloadAction<ITheme>) => {
			state.curcolor = payload;
		},
		pickTheme : (state) => {
			state.curcolor = state.curcolor === Colors.BLUE_THEME_GRADIENT?Colors.WHITE:Colors.BLUE_THEME_GRADIENT;
		}
	},
});

export const themeActions = themeSlice.actions;
export const themeReducer = themeSlice.reducer;
