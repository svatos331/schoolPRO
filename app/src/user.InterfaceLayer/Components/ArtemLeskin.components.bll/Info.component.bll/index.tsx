import { useGetOneMovieQuery } from "business.InterfaceLayer/store/shared/entities/artemLeskin.entities/movie.entity/redux/api";
import React from "react";
import { InfoBlock } from "user.InterfaceLayer/Libraries/ArtemLeskin.library/Widgets/InfoBlock";

interface InfoProps {
    id: string
}

const Info: React.FC<InfoProps> = ({id}: InfoProps) => {
    useGetOneMovieQuery({id});

    return (    
        <InfoBlock
            useGetOneMovieQuery={useGetOneMovieQuery}
            id={id  || ""}/>
    );
};

export default Info;