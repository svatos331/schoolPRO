import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import reducerPaths from "../../../../../../reducerPaths";
import { ITranDTO } from "../../services/dto/from.dto";

export enum ITransactionsEnum {
	transactions = "transactions",
}

export interface ITransactionsType {
	[ITransactionsEnum.transactions]: ITranDTO[];
}

export const initialTransactionsState: ITransactionsType = {
	[ITransactionsEnum.transactions]: [],
};

export const transactionsSlice = createSlice({
	name: reducerPaths.payments_transactions,
	initialState: initialTransactionsState,
	reducers: {
		loadTransactions: (state, { payload }: PayloadAction<ITranDTO[]>) => {
			state[ITransactionsEnum.transactions] = payload;
		},
	},
});

const transactionsActions = transactionsSlice.actions;
export const transactionReducer = transactionsSlice.reducer;
export const { loadTransactions } = transactionsActions;
