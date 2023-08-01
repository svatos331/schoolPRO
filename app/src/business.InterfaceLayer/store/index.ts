import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import { todoApi } from "./shared/entities/svyatoslavZhilin.entities/todo.entity/redux/api";
import { todoReducer } from "./shared/entities/svyatoslavZhilin.entities/todo.entity/redux/slice";
import reducerPaths from "./reducerPaths";
import { themeReducer } from "./shared/entities/stanislavAristov.entities/theme.entity/redux/slice";
import { sidebarReducer } from "./shared/entities/stanislavAristov.entities/sidebar.entity/redux/slice";
import { paymentsApi } from "./shared/entities/stanislavAristov.entities/payments.entity/redux/api";
import { paymentsReducer } from "./shared/entities/stanislavAristov.entities/payments.entity/redux/slice";

const allSliceReducersReducer = combineReducers({
	[todoApi.reducerPath]: todoApi.reducer,
	[paymentsApi.reducerPath]: paymentsApi.reducer,
	[reducerPaths.todo]: todoReducer,

	[reducerPaths.theme]: themeReducer,
	[reducerPaths.payments]: paymentsReducer,
	[reducerPaths.sidebar]: sidebarReducer,
});

export const store = configureStore({
	reducer: allSliceReducersReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware()
			.concat(todoApi.middleware)
			.concat(paymentsApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
