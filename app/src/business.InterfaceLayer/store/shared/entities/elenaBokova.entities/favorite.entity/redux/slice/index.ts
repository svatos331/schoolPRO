import {createSlice} from "@reduxjs/toolkit";

import reducerPaths from "../../../../../../reducerPaths";

const items =
    localStorage.getItem("favoriteItems")// @ts-ignore
        ? JSON.parse(localStorage.getItem("favoriteItems"))
        : [];

export enum FavoriteEnum {
    favoriteItems = "favoriteItems",
    favoriteAmount = "favoriteAmount"
}
export interface IFavoriteType {
    [FavoriteEnum.favoriteItems]: any[];
    [FavoriteEnum.favoriteAmount]: number;
}
export const initialState: IFavoriteType = {
    [FavoriteEnum.favoriteItems]: items,
    [FavoriteEnum.favoriteAmount]: items.length,
};

export const favoriteSlice = createSlice({
    name: reducerPaths.favorite,
    initialState: initialState,
    reducers: {
        toggleFavorite: (state, {payload: product}) => {
            const isExists = state.favoriteItems.some(item => item.id === product.id)

            if (isExists) {
                const index = state.favoriteItems.findIndex(item => item.id === product.id)
                if (index !== -1) {
                    state.favoriteItems.splice(index, 1)
                    state.favoriteAmount = state.favoriteItems.length
                }
            } else {
                state.favoriteItems.push(product)
                state.favoriteAmount = state.favoriteItems.length
            }

            localStorage.setItem('favoriteItems', JSON.stringify(state.favoriteItems))
            localStorage.setItem('favoriteAmount', JSON.stringify(state.favoriteAmount))
        }
    },
});

// @ts-ignore
export const favoriteActions = favoriteSlice.actions;
export const favoriteReducer = favoriteSlice.reducer;
