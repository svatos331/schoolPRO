import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { movieReducer } from "business.InterfaceLayer/store/shared/entities/artemLeskin.entities/movie.entity/redux/slice";
import { movieApi } from "business.InterfaceLayer/store/shared/entities/artemLeskin.entities/movie.entity/redux/api";

import { todoApi } from "./shared/entities/svyatoslavZhilin.entities/todo.entity/redux/api";
import { todoReducer } from "./shared/entities/svyatoslavZhilin.entities/todo.entity/redux/slice";
import reducerPaths from "./reducerPaths";

const allSliceReducersReducer = combineReducers({
	[todoApi.reducerPath]: todoApi.reducer,
	[movieApi.reducerPath]: movieApi.reducer,
	[reducerPaths.todo]: todoReducer,
	[reducerPaths.movie]: movieReducer
});

export const store = configureStore({
	reducer: allSliceReducersReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(movieApi.middleware)
		// getDefaultMiddleware().concat(todoApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
