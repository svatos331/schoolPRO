import React from "react";
import { useGetAllMovieQuery } from "business.InterfaceLayer/store/shared/entities/artemLeskin.entities/movie.entity/redux/api";
import CardList from "user.InterfaceLayer/Libraries/ArtemLeskin.library/Widgets/CardList";


interface ListCardpProps {
    type: string;
    order: string;
    ganre: string;
    year: string;
    rating: string
}

const ListCard = ({type, order, ganre, year, rating}:ListCardpProps) => {

    return (
        <CardList 
            type={type}
            useGetAllMovieQuery={useGetAllMovieQuery}
            order={order}
            ganre={ganre}
            year={year}
            rating={rating}    
        />
    );
};

export default ListCard;