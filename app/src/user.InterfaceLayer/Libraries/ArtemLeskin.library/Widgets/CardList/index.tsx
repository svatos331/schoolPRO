import React, { useState } from "react";
import Text, { TextSize } from "user.InterfaceLayer/Libraries/ArtemLeskin.library/UI_KIT/Atoms/Text";
import { Card } from "user.InterfaceLayer/Libraries/ArtemLeskin.library/UI_KIT/Molecules/Card.molecule";
import PaginationBar from "user.InterfaceLayer/Libraries/ArtemLeskin.library/UI_KIT/Molecules/PaginationBar";

import * as ST from "./style/style"; 
import { ListCardpProps } from "./type/index";

const CardList = ({type,useGetAllMovieQuery, ganre, rating, year, order}:ListCardpProps) => {
    const [page, setPage] = useState(1);
    const {data, isLoading}  = useGetAllMovieQuery({
        page, 
        type, 
        order, 
        yearTo: year?.split("-")[1] || "",
        yearFrom: year?.split("-")[0] || "", 
        rating, 
        ganre
    });

    // eslint-disable-next-line no-console
    console.log(data);
    const func = (value: number) => {
        setPage(value);
    };

    return (
        <ST.List> 
        {isLoading && 
            <ST.Load style={{height: "90vh"}}>
                <Text title="Loading..." size={TextSize.XL}/>
            </ST.Load>
        }
        {data?.items?.map((item: any, index: number) => 
            <Card
                card={item} 
                key={index}
            />
        )}
        {ganre === "999" && data && data?.map((item: any, index: number) => 
            <Card
                card={item} 
                key={index}
            />
        )}
        <PaginationBar count={data?.totalPages} func={func} current={page}/>
        </ST.List>
    );
};

export default CardList;
