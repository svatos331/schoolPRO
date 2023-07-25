import React from "react";
import { useGetAllMovieQuery } from "business.InterfaceLayer/store/shared/entities/artemLeskin.entities/movie.entity/redux/api";
import CardList from "user.InterfaceLayer/Libraries/ArtemLeskin.library/Widgets/CardList";


interface ListCardpProps {
    type: string;
    ganre: string;
}

const ListCard = ({type,ganre}:ListCardpProps) => {

    return (
        <CardList 
            type={type}
            useGetAllMovieQuery={useGetAllMovieQuery}
            ganre={ganre}
        />
    );
};

export default ListCard;