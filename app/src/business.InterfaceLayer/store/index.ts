import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import { todoApi } from "./shared/entities/svyatoslavZhilin.entities/todo.entity/redux/api";
import { productApi } from "./shared/entities/elenaBokova.entities/product.entity/redux/api";
import { todoReducer } from "./shared/entities/svyatoslavZhilin.entities/todo.entity/redux/slice";
import { productReducer } from "./shared/entities/elenaBokova.entities/product.entity/redux/slice";
import {favoriteReducer} from "./shared/entities/elenaBokova.entities/favorite.entity/redux/slice";
import reducerPaths from "./reducerPaths";

const allSliceReducersReducer = combineReducers({
	[todoApi.reducerPath]: todoApi.reducer,
	[reducerPaths.todo]: todoReducer,
	[productApi.reducerPath]: productApi.reducer,
	[reducerPaths.product]: productReducer,
	[reducerPaths.favorite]: favoriteReducer,
});

export const store = configureStore({
	reducer: allSliceReducersReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(todoApi.middleware).concat(productApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
