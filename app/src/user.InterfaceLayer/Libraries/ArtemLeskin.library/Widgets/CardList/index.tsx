import React, { memo } from "react";
import { SearchPanel } from "user.InterfaceLayer/Libraries/ArtemLeskin.library/Widgets/CardList/module/SearchPanel";

import * as ST from "./style/style";
import List from "./module/List/index";
import { ListCardpProps } from "./type/index";

const CardList = (props:ListCardpProps) => {
    const {
        type,
        useGetAllMovieQuery,
        ganre,
        rating,
        page,
        order,
        yearFrom,
        yearTo,
        changeOrder,
        changeGanre,
        changeYear,
        changePage,
        changeRating,
    } = props;
    const {data, isLoading}  = useGetAllMovieQuery({
        page, 
        type, 
        order, 
        yearTo: yearTo,
        yearFrom: yearFrom, 
        rating, 
        ganre
    });
    
    return (
        <ST.Container>
            <SearchPanel chGanre={changeGanre} chOrder={changeOrder} chRating={changeRating} chYear={changeYear}/>
            <List data={data} isLoading={isLoading} page={page} func={changePage}/>
        </ST.Container>
    );
};

export default memo(CardList);
