import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import { todoApi } from "./shared/entities/svyatoslavZhilin.entities/todo.entity/redux/api";
import { todoReducer } from "./shared/entities/svyatoslavZhilin.entities/todo.entity/redux/slice";
import { cardsReducer } from "./shared/entities/stanislavAristov.entities/cards.entity/redux/slice";
import { transactionReducer } from "./shared/entities/stanislavAristov.entities/transactions.entity/redux/slice";
import { usersReducer } from "./shared/entities/stanislavAristov.entities/users.entity/redux/slice";
import reducerPaths from "./reducerPaths";
import { themeReducer } from "./shared/entities/stanislavAristov.entities/theme.entity/redux/slice";
import { sidebarReducer } from "./shared/entities/stanislavAristov.entities/sidebar.entity/redux/slice";
import { paymentsApi } from "./shared/entities/stanislavAristov.entities/payments.entity/redux/api";
import { paymentsReducer } from "./shared/entities/stanislavAristov.entities/payments.entity/redux/slice";
import { cardsApi } from "./shared/entities/stanislavAristov.entities/cards.entity/redux/api";
import { transactionsApi } from "./shared/entities/stanislavAristov.entities/transactions.entity/redux/api";
import { usersApi } from "./shared/entities/stanislavAristov.entities/users.entity/redux/api";

const allSliceReducersReducer = combineReducers({
	[todoApi.reducerPath]: todoApi.reducer,
	[reducerPaths.todo]: todoReducer,

	[cardsApi.reducerPath]: cardsApi.reducer,
	[reducerPaths.payments_cards]: cardsReducer,

	[transactionsApi.reducerPath]: transactionsApi.reducer,
	[reducerPaths.payments_transactions]: transactionReducer,

	[usersApi.reducerPath]: usersApi.reducer,
	[reducerPaths.payments_users]: usersReducer,

	[reducerPaths.payments]: paymentsReducer,
	// [paymentsApi.reducerPath]: paymentsApi.reducer,

	[reducerPaths.theme]: themeReducer,
	[reducerPaths.sidebar]: sidebarReducer,
});

export const store = configureStore({
	reducer: allSliceReducersReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(
			todoApi.middleware,
			cardsApi.middleware,
			// usersApi.middleware,
			transactionsApi.middleware,
			usersApi.middleware
		),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
