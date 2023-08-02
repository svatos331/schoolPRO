import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import reducerPaths from "../../../../../../reducerPaths";
import { ICardDTO } from "../../services/dto/from.dto";

export enum ICardsEnum {
	cards = "cards",
}

export interface ICardsType {
	[ICardsEnum.cards]: ICardDTO[];
}

export const initialCardsState: ICardsType = {
	[ICardsEnum.cards]: [],
};

export const cardsSlice = createSlice({
	name: reducerPaths.payments_cards,
	initialState: initialCardsState,
	reducers: {
		loadCardsByMe: (state, { payload }: PayloadAction<ICardDTO[]>) => {
			state.cards = payload;
		},
	},
});

export const paymentsActions = cardsSlice.actions;
export const paymentsReducer = cardsSlice.reducer;
export const { loadCardsByMe } = paymentsActions;
