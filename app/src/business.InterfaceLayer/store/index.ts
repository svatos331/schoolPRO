import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import { todoApi } from "./shared/entities/kirillKornilov.entities/todo.entity/redux/api";
import { signApi } from "./shared/entities/kirillKornilov.entities/sign.entity/redux/api";
import { goodsApi } from "./shared/entities/kirillKornilov.entities/task.entity/redux/api";
import { todoReducer } from "./shared/entities/kirillKornilov.entities/todo.entity/redux/slice";
import reducerPaths from "./reducerPaths";

const allSliceReducersReducer = combineReducers({
	[todoApi.reducerPath]: todoApi.reducer,
	[goodsApi.reducerPath]: goodsApi.reducer,
	[signApi.reducerPath]: signApi.reducer,
	[reducerPaths.todo]: todoReducer,
});

export const store = configureStore({
	reducer: allSliceReducersReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(todoApi.middleware,goodsApi.middleware,signApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;