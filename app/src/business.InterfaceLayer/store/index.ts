import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

// import { todoApi } from "./shared/entities/svyatoslavZhilin.entities/todo.entity/redux/api";
import { todoApi } from "./shared/entities/viktoriaGamayunova.entities/todo.entity/redux/api";
// import { todoReducer } from "./shared/entities/svyatoslavZhilin.entities/todo.entity/redux/slice";
import { todoReducer } from "./shared/entities/viktoriaGamayunova.entities/todo.entity/redux/slice";
import reducerPaths from "./reducerPaths";
import { viktoria_userApi } from "./shared/entities/viktoriaGamayunova.entities/user.entity/redux/api";
import { userReducer } from "./shared/entities/viktoriaGamayunova.entities/user.entity/redux/slice";

const allSliceReducersReducer = combineReducers({
	[todoApi.reducerPath]: todoApi.reducer,
	[reducerPaths.todo]: todoReducer,

	[viktoria_userApi.reducerPath]: viktoria_userApi.reducer,
	[reducerPaths.user]: userReducer,
});

export const store = configureStore({
	reducer: allSliceReducersReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(
			todoApi.middleware,
			viktoria_userApi.middleware
		),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
