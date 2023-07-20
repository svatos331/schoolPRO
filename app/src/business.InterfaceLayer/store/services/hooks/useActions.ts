import {useMemo} from "react";
import {bindActionCreators} from "@reduxjs/toolkit";
import {useAppDispatch} from "./redux";
import {favoriteActions} from "../../shared/entities/elenaBokova.entities/favorite.entity/redux/slice";
import {productsActions} from "../../shared/entities/elenaBokova.entities/products.entity/redux/slice";


const rootActions = {
    ...favoriteActions, ...productsActions
}

export const useActions = () => {
    const dispatch = useAppDispatch()
    return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch])
}