import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { movieApi } from "business.InterfaceLayer/store/shared/entities/artemLeskin.entities/movie.entity/redux/api";

import { todoApi } from "./shared/entities/svyatoslavZhilin.entities/todo.entity/redux/api";
import { todoReducer } from "./shared/entities/svyatoslavZhilin.entities/todo.entity/redux/slice";
import reducerPaths from "./reducerPaths";

const allSliceReducersReducer = combineReducers({
	[todoApi.reducerPath]: todoApi.reducer,
	[movieApi.reducerPath]: movieApi.reducer,
	[reducerPaths.todo]: todoReducer,
});

export const store = configureStore({
	reducer: allSliceReducersReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(todoApi.middleware,movieApi.middleware)
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
