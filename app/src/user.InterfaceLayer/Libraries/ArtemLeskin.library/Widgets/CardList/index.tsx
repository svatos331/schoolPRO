import React, { useCallback, useState } from "react";
import { SearchPanel } from "user.InterfaceLayer/Libraries/ArtemLeskin.library/Widgets/CardList/module/SearchPanel";

import List from "./module/List/index";
import { ListCardpProps } from "./type/index";

const CardList = ({type,useGetAllMovieQuery, ganre: gvalue }:ListCardpProps) => {
    const [page, setPage] = useState(1);    
    const [order, setOrder] = useState("");
    const [ganre, setGanre] = useState(gvalue);
    const [year, setYear] = useState("");
    const [rating, setRating] = useState("");

    const {data, isLoading}  = useGetAllMovieQuery({
        page, 
        type, 
        order, 
        yearTo: year?.split("-")[1] || "",
        yearFrom: year?.split("-")[0] || "", 
        rating, 
        ganre
    });

    const changeOrder = useCallback((value: string) => {
        setOrder(value);
    }, []);

    const changeGanre = useCallback((value: string) => {
        setGanre(value);
    }, []);

    const changeYear = useCallback((value: string) => {
            setYear(value);
    },[]);

    const changeRating = useCallback((value: string) => {
        setRating(value);
    }, []);

    // eslint-disable-next-line no-console
    console.log(data);
    const func = (value: number) => {
        setPage(value);
    };

    return (
        <div className="">
            <SearchPanel chGanre={changeGanre} chOrder={changeOrder} chRating={changeRating} chYear={changeYear}/>
            <List data={data} isLoading={isLoading} page={page} func={func}/>
        </div>
    );
};

export default CardList;
