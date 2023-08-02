import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

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
	[reducerPaths.todo]: todoReducer,
});

export const store = configureStore({
	reducer: allSliceReducersReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(todoApi.middleware, fishingApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
