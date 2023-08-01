import {createSlice, PayloadAction} from "@reduxjs/toolkit";

import reducerPaths from "../../../../../../reducerPaths";

export enum IPaymentsEnum {
    selectedUserId = "selectedUserId",
    paySum = "paySum"
}

export interface IPaymentsType {
    [IPaymentsEnum.selectedUserId]: string | null
    [IPaymentsEnum.paySum]: number | 1
}

export const initialPaymentsState: IPaymentsType = {
    [IPaymentsEnum.selectedUserId]: null,
    [IPaymentsEnum.paySum]: 1

};

export const paymentsSlice = createSlice({
    name: reducerPaths.payments,
    initialState: initialPaymentsState,
    reducers: {
        changeSelectedUserId: (state, {payload}: PayloadAction<string>) => {
            state.selectedUserId = payload;
        },
        changePaySum: (state, {payload}: PayloadAction<number>) => {
            state.paySum = payload;
        },
    },
});

export const paymentsActions = paymentsSlice.actions;
export const paymentsReducer = paymentsSlice.reducer;
