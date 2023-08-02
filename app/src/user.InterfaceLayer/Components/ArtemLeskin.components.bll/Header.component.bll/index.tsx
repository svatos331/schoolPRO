import { useAppDispatch } from "business.InterfaceLayer/store/services/hooks/redux";
import { sidebarMovieActions } from "business.InterfaceLayer/store/shared/entities/artemLeskin.entities/movie.entity/redux/slice";
import React, { memo } from "react";
import Header from "user.InterfaceLayer/Libraries/ArtemLeskin.library/Widgets/Header";

const HeaderBll = () => {
    const dispatch = useAppDispatch();
    
    const changeActive = () => {
        dispatch(sidebarMovieActions.changeActive());
    };

    return (    
        <Header changeActive={changeActive}/>
    );
};

export default memo(HeaderBll);