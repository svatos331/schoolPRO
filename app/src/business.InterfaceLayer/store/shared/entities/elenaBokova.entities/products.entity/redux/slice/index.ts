import {createSlice} from "@reduxjs/toolkit";

import reducerPaths from "../../../../../../reducerPaths";

export interface Product {
    id: string,
    name: string,
    price: string,
    isSale: boolean,
    isFavorite: boolean
}

interface IProducts {
    products: Product[]
}

export const initialProductsState: IProducts = {
    products: [],
};

export const productsSlice = createSlice({
    name: reducerPaths.products,
    initialState: initialProductsState,
    reducers: {
        undefined() {
            return initialProductsState;
        },
    },
});

export const productsActions = productsSlice.actions;
export const productsReducer = productsSlice.reducer;
