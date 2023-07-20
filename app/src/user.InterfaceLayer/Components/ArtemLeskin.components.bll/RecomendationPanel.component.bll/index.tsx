import { useGetMovieFromGenreQuery } from "business.InterfaceLayer/store/shared/entities/artemLeskin.entities/movie.entity/redux/api";
import React from "react";
import { CardBar } from "user.InterfaceLayer/Libraries/ArtemLeskin.library/Widgets/CardBar";


export const RecomedPanel: React.FC = () => {
    return (
        <div>
            <CardBar  
                headerTitle="Триллеры" 
                parament={1} 
                useGetMovie={useGetMovieFromGenreQuery}
            />
            <CardBar 
                headerTitle="Драма" 
                parament={2} 
                useGetMovie={useGetMovieFromGenreQuery}
            />
            <CardBar 
                headerTitle="Криминал" 
                parament={3} 
                useGetMovie={useGetMovieFromGenreQuery}/>
        </div>
    );
};