import {useMemo} from "react";
import {bindActionCreators} from "@reduxjs/toolkit";
import {useAppDispatch} from "./redux";
import {favoriteActions} from "../../shared/entities/elenaBokova.entities/favorite.entity/redux/slice";
import {productActions} from "../../shared/entities/elenaBokova.entities/product.entity/redux/slice";


const rootActions = {
    ...favoriteActions, ...productActions
}

export const useActions = () => {
    const dispatch = useAppDispatch()
    return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch])
}