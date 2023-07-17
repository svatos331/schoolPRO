import {createSlice} from "@reduxjs/toolkit";

import reducerPaths from "../../../../../../reducerPaths";

// export enum FavoriteEnum {
//     id = "id",
// }
//
// export interface FavoriteType {
//     [FavoriteEnum.id]: string;
// }
//
// export const initialState: FavoriteType = {
//     [FavoriteEnum.id]: "",
// };

export const initialState = []

export const favoriteSlice = createSlice({
    name: reducerPaths.favorite,
    initialState: initialState,
    reducers: {
        toggleFavorite: (state, {payload: product}) => {
            // @ts-ignore
            const isExists = state.some(item => item.id === product.id)

            if (isExists) { // @ts-ignore
                const index = state.findIndex(item => item.id === product.id)
                if (index !== -1) {
                    state.splice(index, 1)
                }
            } else
                { // @ts-ignore
                    state.push(product)
                }
        }
    },
});

// @ts-ignore
export const favoriteActions = favoriteSlice.actions;
export const favoriteReducer = favoriteSlice.reducer;
