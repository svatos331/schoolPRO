import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import { todoApi } from "./shared/entities/svyatoslavZhilin.entities/todo.entity/redux/api";
import { todoReducer } from "./shared/entities/svyatoslavZhilin.entities/todo.entity/redux/slice";
import reducerPaths from "./reducerPaths";
import { viktoria_userApi } from "./shared/entities/viktoriaGamayunova.entities/user.entity/redux/api";
import { userReducer } from "./shared/entities/viktoriaGamayunova.entities/user.entity/redux/slice";
import { viktoria_productApi } from "./shared/entities/viktoriaGamayunova.entities/product.entity/redux/api";
import { productReducer } from "./shared/entities/viktoriaGamayunova.entities/product.entity/redux/slice";
import { viktoria_categoryApi } from "./shared/entities/viktoriaGamayunova.entities/category.entity/redux/api";
import { categoryReducer } from "./shared/entities/viktoriaGamayunova.entities/category.entity/redux/slice";

const allSliceReducersReducer = combineReducers({
	[todoApi.reducerPath]: todoApi.reducer,
	[reducerPaths.todo]: todoReducer,

	[viktoria_userApi.reducerPath]: viktoria_userApi.reducer,
	[reducerPaths.viktoria_user]: userReducer,

	[viktoria_productApi.reducerPath]: viktoria_productApi.reducer,
	[reducerPaths.viktoria_product]: productReducer,

	[viktoria_categoryApi.reducerPath]: viktoria_categoryApi.reducer,
	[reducerPaths.viktoria_category]: categoryReducer,
});

export const store = configureStore({
	reducer: allSliceReducersReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(
			todoApi.middleware,
			viktoria_userApi.middleware,
			viktoria_productApi.middleware,
			viktoria_categoryApi.middleware
		),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
