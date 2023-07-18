import {useMemo} from "react";
import {bindActionCreators} from "@reduxjs/toolkit";
import {useAppDispatch} from "./redux";
import {favoriteActions} from "../../shared/entities/elenaBokova.entities/favorite.entity/redux/slice";
import {userActions} from "../../shared/entities/elenaBokova.entities/user.entity/redux/slice";


const rootActions = {
    ...favoriteActions, ...userActions
}

export const useActions = () => {
    const dispatch = useAppDispatch()
    return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch])
}