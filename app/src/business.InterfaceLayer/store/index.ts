import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import { todoApi } from "./shared/entities/svyatoslavZhilin.entities/todo.entity/redux/api";
import { userApi } from "./shared/entities/elenaBokova.entities/user.entity/redux/api";
import { todoReducer } from "./shared/entities/svyatoslavZhilin.entities/todo.entity/redux/slice";
import { userReducer } from "./shared/entities/elenaBokova.entities/user.entity/redux/slice";
import {favoriteReducer} from "./shared/entities/elenaBokova.entities/favorite.entity/redux/slice";
import reducerPaths from "./reducerPaths";

const allSliceReducersReducer = combineReducers({
	[todoApi.reducerPath]: todoApi.reducer,
	[reducerPaths.todo]: todoReducer,
	[userApi.reducerPath]: userApi.reducer,
	[reducerPaths.users]: userReducer,
	[reducerPaths.favorite]: favoriteReducer,
});

export const store = configureStore({
	reducer: allSliceReducersReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(todoApi.middleware).concat(userApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
