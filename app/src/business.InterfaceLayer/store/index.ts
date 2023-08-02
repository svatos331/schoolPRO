import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { movieApi } from "business.InterfaceLayer/store/shared/entities/artemLeskin.entities/movie.entity/redux/api";
import { movieReducer, sidebarMovieReducer, sortValueReducer } from "business.InterfaceLayer/store/shared/entities/artemLeskin.entities/movie.entity/redux/slice";

import reducerPaths from "./reducerPaths";
import { todoApi } from "./shared/entities/svyatoslavZhilin.entities/todo.entity/redux/api";
import { fishingApi } from "./shared/entities/ivanKosteev.entities/todo.entity/redux/api";
import { todoReducer } from "./shared/entities/svyatoslavZhilin.entities/todo.entity/redux/slice";
import { cartReducer } from "./shared/entities/ivanKosteev.entities/todo.entity/redux/slice/CartSlice";
// import { authReducer } from "./shared/entities/ivanKosteev.entities/todo.entity/redux/slice/authSlice";

const allSliceReducersReducer = combineReducers({
	// [reducerPaths.auth]: authReducer,
	[fishingApi.reducerPath]: fishingApi.reducer,
	[todoApi.reducerPath]: todoApi.reducer,
	[reducerPaths.cart]: cartReducer,
	[movieApi.reducerPath]: movieApi.reducer,
	[reducerPaths.todo]: todoReducer,
	[reducerPaths.movie]: movieReducer,
	[reducerPaths.sidebarMovie]: sidebarMovieReducer,
	[reducerPaths.sortValue]: sortValueReducer,
});

export const store = configureStore({
	reducer: allSliceReducersReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(todoApi.middleware, fishingApi.middleware,movieApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
