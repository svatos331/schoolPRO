import {createSlice, PayloadAction} from "@reduxjs/toolkit";

import reducerPaths from "../../../../../../reducerPaths";

export enum ISidebarEnum {
    isOpen = "isOpen"
}

export interface ISidebarType {
    [ISidebarEnum.isOpen]: boolean
}

export const initialSidebarState: ISidebarType = {
    [ISidebarEnum.isOpen]: false
};

export const sidebarSlice = createSlice({
    name: reducerPaths.sidebar,
    initialState: initialSidebarState,
    reducers: {
        changeOpen: (state, {payload}: PayloadAction<boolean>) => {
            state.isOpen = payload;
        },
        pickOpen: (state) => {
            state.isOpen = !state.isOpen;
        },
        close: (state) => {
            state.isOpen = false;
        },
        open: (state) => {
            state.isOpen = true;
        },
    },
});

export const sidebarActions = sidebarSlice.actions;
export const sidebarReducer = sidebarSlice.reducer;
