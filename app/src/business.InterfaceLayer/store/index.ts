// import { configureStore } from "@reduxjs/toolkit";
// import { setupListeners } from "@reduxjs/toolkit/query";

// import { goodsApi } from "./shared/entities/kirillKornilov.entities/task.entity/redux/api";
// //import { todoReducer } from "./shared/entities/kirillKornilov.entities/todo.entity/redux/slice";
//import reducerPaths from "./reducerPaths";

// const allSliceReducersReducer = combineReducers({
// 	[todoApi.reducerPath]: todoApi.reducer,
// 	[reducerPaths.todo]: todoReducer,
// });

// export const store = configureStore({
// 	reducer: { [goodsApi.reducerPath]: goodsApi.reducer},
// 	middleware: (getDefaultMiddleware) =>
// 		getDefaultMiddleware().concat(goodsApi.middleware),
// });

// setupListeners(store.dispatch);

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;


import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import { todoApi } from "./shared/entities/kirillKornilov.entities/todo.entity/redux/api";
import { goodsApi } from "./shared/entities/kirillKornilov.entities/task.entity/redux/api";
import { todoReducer } from "./shared/entities/kirillKornilov.entities/todo.entity/redux/slice";
import reducerPaths from "./reducerPaths";

const allSliceReducersReducer = combineReducers({
	[todoApi.reducerPath]: todoApi.reducer,
	[goodsApi.reducerPath]: goodsApi.reducer,
	[reducerPaths.todo]: todoReducer,
});

export const store = configureStore({
	reducer: allSliceReducersReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(todoApi.middleware,goodsApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

//________________________________________________-

// import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import { setupListeners } from "@reduxjs/toolkit/query";

// import { todoApi } from "./shared/entities/kirillKornilov.entities/todo.entity/redux/api";
// import { todoReducer } from "./shared/entities/kirillKornilov.entities/todo.entity/redux/slice";
// import reducerPaths from "./reducerPaths";

// const allSliceReducersReducer = combineReducers({
// 	[todoApi.reducerPath]: todoApi.reducer,
// 	[reducerPaths.todo]: todoReducer,
// });

// export const store = configureStore({
// 	reducer: allSliceReducersReducer,
// 	middleware: (getDefaultMiddleware) =>
// 		getDefaultMiddleware().concat(todoApi.middleware),
// });

// setupListeners(store.dispatch);

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;