import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import { todoApi } from "./shared/entities/svyatoslavZhilin.entities/todo.entity/redux/api";
import { productsApi } from "./shared/entities/elenaBokova.entities/products.entity/redux/api";
import { todoReducer } from "./shared/entities/svyatoslavZhilin.entities/todo.entity/redux/slice";
import { productsReducer } from "./shared/entities/elenaBokova.entities/products.entity/redux/slice";
import {favoriteReducer} from "./shared/entities/elenaBokova.entities/favorite.entity/redux/slice";
import reducerPaths from "./reducerPaths";

const allSliceReducersReducer = combineReducers({
	[todoApi.reducerPath]: todoApi.reducer,
	[reducerPaths.todo]: todoReducer,
	[productsApi.reducerPath]: productsApi.reducer,
	[reducerPaths.products]: productsReducer,
	[reducerPaths.favorite]: favoriteReducer,
});

export const store = configureStore({
	reducer: allSliceReducersReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(todoApi.middleware).concat(productsApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
