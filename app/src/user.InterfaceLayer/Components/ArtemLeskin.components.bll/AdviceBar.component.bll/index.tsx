import { useAppDispatch } from "business.InterfaceLayer/store/services/hooks/redux";
import { useGetAllMovieQuery } from "business.InterfaceLayer/store/shared/entities/artemLeskin.entities/movie.entity/redux/api";
import { sortValueActions } from "business.InterfaceLayer/store/shared/entities/artemLeskin.entities/movie.entity/redux/slice";
import React, { memo } from "react";
import AdviceBar from "user.InterfaceLayer/Libraries/ArtemLeskin.library/Widgets/AdviceBar";

const AdviceBarBll = () => {
    const dispatch = useAppDispatch();
    
    const changeGanre = (value: string) => {
        dispatch(sortValueActions.changeGanre(value));
    };

    return (
        <AdviceBar useGetAllMovieQuery={useGetAllMovieQuery} changeGanre={changeGanre}/>
    );
};

export default memo(AdviceBarBll);